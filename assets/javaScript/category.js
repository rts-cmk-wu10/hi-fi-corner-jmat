const URL = new URLSearchParams(window.location.search)

if (URL.get("category") !== null) { 
    var category = URL.get("category").replace("_", " ")

    const NARRATOR = document.querySelector(".categoryNarrator__narrator")
    NARRATOR.innerHTML = ` / ${category}`
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
            if (URL.get("category") === null){
                const PRODUKT = document.createElement("li")
                PRODUKT.classList = "produktList__element"

                PRODUKT.innerHTML = `
                <img src="${produkt.image_src}" alt="${produkt.name}">
                <p class="produktList__element--name">${produkt.name}</p>
                ${produkt.price.discaont !== "" ? `<p><span>${produkt.price.normal_price}</span> ${produkt.price.discaont}</p>` : `<p>${produkt.price.normal_price}</p>`}
                ${produkt.instock === true ? "<button>add to cart</button>" : "" }
                `   

                LIST.append(PRODUKT)
            }
            else if (produkt.type === category) {
                console.log(produkt);

                const PRODUKT = document.createElement("li")
                PRODUKT.classList = "produktList__element"

                PRODUKT.innerHTML = `
                <a href="#">
                    <img src="${produkt.image_src}" alt="${produkt.name}">
                    <p class="produktList__element--name">${produkt.name}</p>
                    ${produkt.price.discaont !== "" ? `<p><span>${produkt.price.normal_price}</span> ${produkt.price.discaont}</p>` : `<p>${produkt.price.normal_price}</p>`}
                    ${produkt.instock === true ? "<button>add to cart</button>" : "" }
                </a>
                `   

                LIST.append(PRODUKT)
            }
        })
    })
    .catch(function (error) {
        alert(error)
    })