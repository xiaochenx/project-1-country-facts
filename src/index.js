const BASE_URL = "https://restcountries.eu/rest/v2";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("countries").addEventListener("click",getCountries)
    document.getElementById("continent-dropdown").addEventListener("change",getCountriesByContinent)
})

function getCountriesByContinent(e){
    console.log(e);
    let ul = document.getElementById("country-list")
    ul.innerHTML = ""
    let div = document.getElementById("show-country")
    div.innerHTML = ""
    fetch(BASE_URL + "/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.filter(country => {
            console.log(country)
            if(country.region === e.target.value){
            ul.innerHTML += `
            <li><a href="#">${country.name}</a>
            <button id = "like" data-tag-type="buttonTag" data-likes="0">Like</button>
            </li>
            `
            }
        })
        clickableLinks()
    })

}


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
            <li><a href="#" data-tag-type="aTag">${country.name}</a>
            <button id = "like" data-tag-type="buttonTag" data-likes="0">Like</button>
            </li>
            `
        })
        clickableLinks()
    })
}


function clickableLinks(){
    let ul = document.getElementById("country-list")
    ul.addEventListener("click",handleClicks)
}



function handleClicks(e){
    console.log(e.target.dataset.tagType);
    const tagType = e.target.dataset.tagType
    
    if(tagType === "buttonTag"){
        likeCountry(e)
    }else{
        displayCountry(e)
    }
}

function likeCountry(e){
    console.log(e)
    const li = e.target.parentElement;
    const button = e.target;
    button.dataset.likes ++
    if(button.dataset.likes === "1"){
        li.innerHTML += `<p id:"likes">Liked:${button.dataset.likes}</p>`
    }else{
       li.querySelector("p").innerText = `Liked: ${button.dataset.likes}`
    }
    
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
        <img src="${country[0].flag}" alt="Country flag" width="380" height="250">
        <h4>Capital: </h4><p>${country[0].capital}</p>
        <h4>Native Name: </h4><p>${country[0].nativeName}</p>
        <h4>Official Language: </h4><p>${country[0].languages[0].name}</p>
        <h4>Population: </h4><p>${country[0].population.toLocaleString()}</p>
        <h4>Continent: </h4><p>${country[0].region}</p>
        <h4>Currency: </h4><p>${country[0].currencies[0].name}</p>
        `
    })
}


