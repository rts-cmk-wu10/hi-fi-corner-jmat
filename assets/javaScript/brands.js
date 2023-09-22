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
            console.log(element);
            console.log(element.logo.includes(".svg"));
            const LI = document.createElement("li")
            LI.innerHTML = `<img src="${element.logo}" alt="${element.name}">`
            UL.append(LI)
        })
    })
    .catch(function (error) {
        alert(error)
    })