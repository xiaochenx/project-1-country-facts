document.addEventListener("DOMContentLoaded", () => {
    getCountries()  
})

function getCountries(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}