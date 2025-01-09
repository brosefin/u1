// Recommended: All functions declared here
function createAllCityBoxes() {

    for (let city of cities) {

        if (city.name) {
            let boxDOM = document.createElement;
            citiesDOM.appendChild(boxDOM);
            
        }
    }
}

// Skapa lista över alla städer
//createAllCityBoxes


//markCityBox (cityObject, kindOfCity)

// Recommended: constants with references to existing HTML-elements
const main = document.querySelector("main");
const section = document.getElementById("links");
const h2 = document.querySelector("h2");
const citiesDOM = document.getElementById("cities");

// Recommended: Ask for the city name and then the rest of the code
// const targetCityName = prompt("Enter city");