document.addEventListener("DOMContentLoaded", () => {
    getCountries()  
})

function getCountries(){
    let ul = document.getElementById("country-list")
    ul.innerHTML = ""
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.map(country => {
            ul.innerHTML += `
            <li>${country.name}</li>
            `
        })
    })
}
