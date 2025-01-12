// Recommended: All functions declared here

// Skapa lista över alla städer
//createAllCityBoxes

function createAllCityBoxes() {
    const citiesDOM = document.getElementById("cities");
    console.log("Function createAllCityBoxes is called");

    for (let city of cities) {

        if (city.name) {
            let boxDOM = document.createElement("div");
            citiesDOM.appendChild(boxDOM);
            boxDOM.textContent = city.name;
            boxDOM.className = "cityBox";
        }
    }
}

createAllCityBoxes();

//markCityBox (cityObject, kindOfCity)

// function markCityBox (cityObject, kindOfCity){
//  for ()
//  if targetCityName == target -> ge klassen .target
 
// }
// markCityBox (cityObject, kindOfCity);

// Recommended: constants with references to existing HTML-elements
const main = document.querySelector("main");
const section = document.getElementById("links");
const h2 = document.querySelector("h2");

// Recommended: Ask for the city name and then the rest of the code
const targetCityName = prompt("Enter city");

function getCityByName () {
    let cityFound = false;

    for (let city of cities) {
        if (city.name === targetCityName) {
            console.log(city.name);
            h2.textContent = city.name;
            cityFound = true;
            break;
        }
    }

    if (!cityFound) {
        h2.textContent = `${targetCityName} finns inte i databasen`;
    }
}

getCityByName(targetCityName);