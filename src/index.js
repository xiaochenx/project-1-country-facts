const BASE_URL = "https://restcountries.eu/rest/v2";

document.addEventListener("DOMContentLoaded", () => {
    getCountries()  
})

function getCountries(){
    let ul = document.getElementById("country-list")
    ul.innerHTML = ""
    fetch(BASE_URL + "/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.map(country => {
            ul.innerHTML += `
            <li><a href="#">${country.name}</a></li>
            `
        })
    })
}
