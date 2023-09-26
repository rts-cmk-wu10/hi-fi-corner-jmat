const UL = document.querySelector(".brands__list--logos")

fetch("http://localhost:3000/brands")
    .then(function(response) {
        if (response.status !== 200) 
            throw new Error("fejlbesked")
        return response.json()
    })
    .then(function(data) {
        console.log(data);

        data.forEach(function(element) {
            // console.log(element);
            const LI = document.createElement("li")
            LI.innerHTML = `<a href="/category.html?brand=${element.name}"><img src="${element.logo}" alt="${element.name}"></a>`
            UL.append(LI)
        })
    })
    .catch(function (error) {
        alert(error)
    })