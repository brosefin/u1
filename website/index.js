// Recommended: All functions declared here
const targetCityName = prompt("Enter city");
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

function getClosestCity() {
    let closestCity = null;
    let shortestDistance = Infinity;

    for (let distanceObject of distances) {
        let city1 = cities[distanceObject.city1];
        let city2 = cities[distanceObject.city2];
        let otherCity = null;

        if (city1.name === targetCityName) {
            otherCity = city2;
        } else if (city2.name === targetCityName) {
            otherCity = city1;
        }

        if (otherCity && distanceObject.distance < shortestDistance) {
            closestCity = otherCity;
            shortestDistance = distanceObject.distance;
        }
    }

    if (closestCity) {
        console.log(`Närmaste staden till ${targetCityName} är ${closestCity.name}.`);
    } else {
        console.log(`${targetCityName} finns inte i databasen.`);
    }

    return closestCity;
}

getClosestCity(targetCityName);


// function getClosestCity () {
//     let closestCity = null;
//     let shortestDistance = Infinity;

//     for (let distanceObject of distances) {
//         let otherCity = null;

//         if (cities[distanceObject.city1] == targetCityName) {
//             otherCity = distanceObject.city2;
//         } else if (cities[distanceObject.city2] == targetCityName) {
//             otherCity = distanceObject.city1;
//         }

//         if (otherCity) {
//             let distance = distanceObject.distance;

//             if (distanceObject.distance < shortestDistance) {
//                 closestCity = otherCity;
//                 shortestDistance = distanceObject.distance;
//             }
//         }
//     }

//     if (closestCity) { console.log(`Närmaste staden till ${targetCityName} är ${closestCity.name}.`); } else { console.log(`${targetCityName} finns inte i databasen.`); }

//     return closestCity;
// }

// getClosestCity();

// function getFurthestCity () {
// let furthestCity = null;
//     let furthestDistance = 0;
//     for let (city of cities) {
    // skapa variabeln för den andra staden
    // om targetCityName är city1 blir otherCity city2
//     } else if {
    // om targetCityName är city2 blir otherCity city1
    // }

    // if (otherCity) {
    //     om en annan stad hittas och otherCity inte längre är null
    //     let distance = element.distance
    // }

// return furthestCity;
// }

// Recommended: constants with references to existing HTML-elements
const main = document.querySelector("main");
const section = document.getElementById("links");
const h2 = document.querySelector("h2");
const title = document.querySelector("title");

// Recommended: Ask for the city name and then the rest of the code

function getCityByName () {
    let cityFound = false;

    for (let city of cities) {
        if (city.name === targetCityName) {
            console.log(city.name);
            h2.textContent = city.name + " " + "(" + city.country + ")";
            cityFound = true;
            title.textContent = city.name;
            break;
        }
    }

    if (!cityFound) {
        h2.textContent = `${targetCityName} finns inte i databasen`;
        title.textContent = "Not found";
    }
}

getCityByName(targetCityName);