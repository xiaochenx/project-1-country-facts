const BASE_URL = "https://restcountries.eu/rest/v2";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("countries").addEventListener("click",getCountries)
   
})



function getCountries(){
    let ul = document.getElementById("country-list")
    ul.innerHTML = ""
    let div = document.getElementById("show-country")
    div.innerHTML = ""
    fetch(BASE_URL + "/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.map(country => {
            console.log(country)
            ul.innerHTML += `
            <li><a href="#">${country.name}</a></li>
            `
        })
        clickableLinks()
    })
}

function clickableLinks(){
    let ul = document.getElementById("country-list")
    ul.addEventListener("click",displayCountry)
}

function displayCountry(e){
    console.log(e)
    let ul = document.getElementById("country-list")
    ul.innerHTML = ""
    let div = document.getElementById("show-country")
    fetch(BASE_URL + `/name/${e.target.innerText}`)
    .then(res => res.json())
    .then(country => {
        console.log(country)
        div.innerHTML = `
        <h1>${country[0].name}</h1>
        <h3>Capital: </h3><p>${country[0].capital}</p>
        <h4>Native Name: </h4><p>${country[0].nativeName}</p>
        <h4>Population: </h4><p>${country[0].population}</p>
        <h4>Region: </h4><p>${country[0].region}</p>
        <h4>Currency: </h4><p>${country[0].currencies[0].name}</p>
        <h4>National Flag<h4>
        <img src="${country[0].flag}" alt="Country flag" width="450" height="300">
        `
    })
}


