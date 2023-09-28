const URL = new URLSearchParams(window.location.search)

const NARRATOR = document.querySelector(".categoryNarrator__narrator")

if (URL.get("category") !== null) { 
    var category = URL.get("category").replace("_", " ")

    NARRATOR.innerHTML = ` / ${category}`
}
else if (URL.get("brand") !== null) {
    var brand = URL.get("brand")

    NARRATOR.innerHTML = ` / ${brand}`
}

const LIST = document.querySelector(".produktList")

fetch(`http://localhost:3000/produkt`)
    .then(function(response) {
        if (response.status !== 200) 
            throw new Error("fejlbesked")
        return response.json()
    })
    .then(function(data) {
        data.forEach(function(produkt) {
            if (produkt.type === category) makeProdukt()
            else if (produkt.brand.name === brand) makeProdukt()
            else if (produkt.type === null && produkt.brand.name === null) makeProdukt()

            function makeProdukt() {
                const PRODUKT = document.createElement("li")
                PRODUKT.classList = "produktList__element"

                PRODUKT.innerHTML = 
                `<a href="/productview.html?produkt=${produkt.id}">
                    <img src="${produkt.image_src}" alt="${produkt.name}">
                    <p class="produktList__element--name">${produkt.name}</p>
                    ${produkt.price.discaont !== "" ? `<p class="produktList__element--price><span class="produktList__element--normalPrice>${produkt.price.normal_price}</span> ${produkt.price.discaont}</p>` : `<p class="produktList__element--price>${produkt.price.normal_price}</p>`}
                    ${produkt.instock === true ? "<button>add to cart</button>" : "" }
                </a>`   

                LIST.append(PRODUKT)
            }
        })
    })
    .catch(function (error) {
        alert(error)
    })