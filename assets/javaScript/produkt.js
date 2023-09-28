const URL = new URLSearchParams(window.location.search)

const BOX = document.querySelector(".productDetails__box")
const ADDITINAL_TABEL = document.querySelector(".productDetails__additinalTable")
const DESCRIPTION_TABEL = document.querySelector(".productDetails__descriptionTable")
const IMG = document.querySelector(".productDetails__image")

fetch("http://localhost:3000/produkt")
    .then(function(response) {
        if (response.status !== 200) 
            throw new Error("fejlbesked")
        return response.json()
    })
    .then(function(data) {
        data.forEach(function(produkt) {
            if (produkt.id.toString() === URL.get("produkt")) {
                console.log(produkt);

                IMG.src = produkt.image_src
                IMG.alt = produkt.name

                BOX.innerHTML = 
                    `<h1 class="productDetails__name">${produkt.name.charAt(0).toUpperCase() + produkt.name.slice(1)}</h1>
                    <a href="/category.html?brand=${produkt.brand.name}" class="productDetails__brandLink">See other ${produkt.brand.name.charAt(0).toUpperCase() + produkt.brand.name.slice(1)} products</a>
                    ${produkt.price.discaont !== "" ? `<p class="productDetails__price"><span class="productDetails__price--normal">£${produkt.price.normal_price}</span>£${produkt.price.discaont}</p>` : `<p class="productDetails__price">£${produkt.price.normal_price}</p>`}
                    <p class="productDetails__text">${produkt.description.text}</p>`
            
                ADDITINAL_TABEL.innerHTML = 
                    `<tbody>
                        <tr>
                            <th>Manufacturer</th>
                            <td>${produkt.brand.name}</td>
                        </tr>
                        <tr>
                            <th>Manufacturer Link</th>
                            <td><a href="${produkt.brand.manufacturer_link}">${produkt.brand.manufacturer_link}</td>
                        </tr>
                        <tr>
                            <th>Free warrant</th>
                            <td>${produkt.free_warranty}</td>
                        </tr>
                        <tr>
                            <th>Delivery Charge</th>
                            <td>${produkt.delivery.charge}</td>
                        </tr>
                        <tr>
                            <th>Delivery time</th>
                            <td>${produkt.delivery.time}</td>
                        </tr>
                        <tr>
                            <th>Card Surcharges</th>
                            <td>${produkt.card_surcharges}</td>
                        </tr>
                    </tbody>`

                    DESCRIPTION_TABEL.innerHTML = 
                    `<tbody>
                        <tr>
                            <th>Power Output (8/4 Ohm RMS)</th>
                            <td>${produkt.description.power_output.toString().replace(",", " / ").replace(",", " / ")}</td>
                        </tr>
                        <tr>
                            <th>Frequency response</th>
                            <td>${produkt.description.frequency_response.toString().replace("", "X").replace(",", " / ")}</td>
                        </tr>
                        <tr>
                            <th>Total Harmonic Distortion</th>
                            <td>${produkt.description.total_harmonic_distortion.toString().replace(",", " / ")}</td>
                        </tr>
                        <tr>
                            <th>Damping Factor</th>
                            <td>${produkt.description.damping_factor.toString().replace(",", " / ")}</td>
                        </tr>
                        <tr>
                            <th>Input sensitivity:MM</th>
                            <td>${produkt.description["input_sensitivity:MM"].toString().replace(",", " / ")}</td>
                        </tr>
                        <tr>
                            <th>Input sensitivity:MC</th>
                            <td>${produkt.description["input_sensitivity:MC"].replace("", "X")}</td>
                        </tr>
                        <tr>
                            <th>Signal to Noise Ratio:MM / MC</th>
                            <td>${produkt.description["signal_to_noise_ratio:MM/MC"].toString().replace(",", " / ") + produkt.description["signal_to_noise_ratio:MM/MC"][1].replace("", "X")}</td>
                        </tr>
                        <tr>
                            <th>Input Sensitivity: High level</th>
                            <td>${produkt.description["input_sensitivity:High_level"].toString().replace(",", " / ")}</td>
                        </tr>
                        <tr>
                            <th>Input Sensitivity: Balanced High level</th>
                            <td>${produkt.description["input_sensitivity:balanced_high_level"].replace("", "X")}</td>
                        </tr>
                        <tr>
                            <th>Signal to Noise Ratio: High level</th>
                            <td>${produkt.description["signal_to_noise_ratio:high_level"].toString().replace(",", " / ")}</td>
                        </tr>
                        <tr>
                            <th>Input Sensitivity: Power Amp Direct IN</th>
                            <td>${produkt.description["input_sensitivity:power_amp_direct_IN"].replace("", "X")}</td>
                        </tr>
                        <tr>
                            <th>Signal to Noise ratio :Power AMP Direct IN</th>
                            <td>${produkt.description["signal_to_noise_ratio:power_amp_direct_IN"].replace("", "X")}</td>
                        </tr>
                    </tbody>`
            }
        })
    })
    .catch(function (error) {
        alert(error)
    })
