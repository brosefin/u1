const targetCityName = prompt("Enter city");

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
        console.log(`Staden närmast till ${targetCityName} är ${closestCity.name}.`);
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
        console.log(`Staden längst bort från ${targetCityName} är ${furthestCity.name}.`);
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

function createDistanceTable() {
    const tableDOM = document.getElementById("table");

    for (let k = 0; k < cities.length; k++) {
        let headerCell = document.createElement("div");
        headerCell.classList.add("cell", "head_column");
        headerCell.textContent = cities[k].id;
        headerCell.style.gridRow = "1";
        headerCell.style.gridColumn = k + 2;
        tableDOM.appendChild(headerCell);
    }

    for (let k = 0; k < cities.length; k++) {
        let rowHeaderCell = document.createElement("div");
        rowHeaderCell.classList.add("cell", "head_row");
        rowHeaderCell.textContent = `${cities[k].id} - ${cities[k].name}`;
        rowHeaderCell.style.gridColumn = "1";
        rowHeaderCell.style.gridRow = k + 2;
        tableDOM.appendChild(rowHeaderCell);
    }

    for (let i = 0; i < cities.length; i++) {
        for (let j = 0; j < cities.length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.gridColumn = j + 2;
            cell.style.gridRow = i + 2;

            if (i === j) {
                cell.textContent = "";
            } else {
                let distance = getDistanceBetweenCities(cities[i].id, cities[j].id);
                cell.textContent = distance !== null ? Math.round(distance / 10) : "-";
            }

            if ((j + 1) % 2 === 0) { 
                cell.classList.add("even_col");
            }
            
            tableDOM.appendChild(cell);
        }
    }
}

function getDistanceBetweenCities(city1Id, city2Id) {
    for (let i = 0; i < distances.length; i++) {
        if ((distances[i].city1 === city1Id && distances[i].city2 === city2Id) ||
            (distances[i].city1 === city2Id && distances[i].city2 === city1Id)) {
            return distances[i].distance;
        }
    }
    return null;
}

createAllCityBoxes();
createDistanceTable();
getClosestCity(targetCityName);
getFurthestCity(targetCityName);

// Recommended: constants with references to existing HTML-elements
const main = document.querySelector("main");
const section = document.getElementById("links");
const h2 = document.querySelector("h2");
const title = document.querySelector("title");
const h3 = document.querySelector("h3");

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
        h3.textContent = " ";
        h2.textContent = `${targetCityName} finns inte i databasen`;
        title.textContent = "Not found";
    }
}

getCityByName(targetCityName);