// Recommended: All functions declared here
const targetCityName = prompt("Enter city");

// Skapa lista över alla städer
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

function markCityBox(cityObject, kindOfCity) {
    const citiesDOM = document.getElementById("cities");
    const cityBoxes = citiesDOM.getElementsByClassName("cityBox");

    for (let box of cityBoxes) {
        const boxText = box.textContent.split(" (")[0];

        if (boxText === cityObject.name) {
            box.classList.remove("target", "closest", "furthest");
            box.classList.add(kindOfCity);
            break;
        }
    }
}

function getClosestCity(targetCityName) {
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
        markCityBox(closestCity, "closest");
        updateBoxDistance(closestCity, shortestDistance);
        document.getElementById("closest").textContent = closestCity.name;
    } else {
        console.log(`${targetCityName} finns inte i databasen.`);
    }

    return closestCity;
}

function getFurthestCity(targetCityName) {
    let furthestCity = null;
    let furthestDistance = 0;

    for (let distanceObject of distances) {
        let city1 = cities[distanceObject.city1];
        let city2 = cities[distanceObject.city2];
        let otherCity = null;

        if (city1.name === targetCityName) {
            otherCity = city2;
        } else if (city2.name === targetCityName) {
            otherCity = city1;
        }

        if (otherCity && distanceObject.distance > furthestDistance) {
            furthestCity = otherCity;
            furthestDistance = distanceObject.distance;
        }
    }

    if (furthestCity) { 
        console.log(`Den längst bort belägna staden från ${targetCityName} är ${furthestCity.name}.`);
        markCityBox(furthestCity, "furthest");
        updateBoxDistance(furthestCity, furthestDistance);
        document.getElementById("furthest").textContent = furthestCity.name;
    } else { 
        console.log(`${targetCityName} finns inte i databasen.`); 
    }

    return furthestCity;
}

function updateBoxDistance(cityObject, distance) {
    const citiesDOM = document.getElementById("cities");
    const cityBoxes = citiesDOM.getElementsByClassName("cityBox");

    for (let box of cityBoxes) {
        const boxText = box.textContent.split(" (")[0];

        if (boxText === cityObject.name) {
            box.textContent = `${cityObject.name} (${distance} km)`;
            break;
        }
    }
}

getClosestCity(targetCityName);
getFurthestCity(targetCityName);

// Recommended: constants with references to existing HTML-elements
const main = document.querySelector("main");
main.style.fontFamily = "BC-Light";
const section = document.getElementById("links");
const h2 = document.querySelector("h2");
const title = document.querySelector("title");


function getCityByName() {
    let cityFound = false;

    for (let city of cities) {
        if (city.name === targetCityName) {
            cityFound = true;
            console.log(city.name);
            h2.textContent = city.name + " " + "(" + city.country + ")";
            title.textContent = city.name;
            markCityBox(city, "target");
            break;
        }
    }

    if (!cityFound) {
        h2.textContent = `${targetCityName} finns inte i databasen`;
        title.textContent = "Not found";
    }
}

getCityByName(targetCityName);