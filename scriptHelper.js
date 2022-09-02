// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementbyID("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
}

function validateInput(testInput) {
   if (testInput === Number) {
        return "Is a Number";
   } else if (isNaN(testInput) === true) {
        return "Not a Number";
   } else if (testInput === "") {
        return "Empty";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
        let pilotStatus = document.getElementbyID("pilotName");
        let copilotStatus = document.getElementbyID("copilotName");
        let fuelStatus = document.getElementbyID("fuelAmount");
        let cargoStatus = document.getElementbyID("cargoMass");
        let launchStatus = document.getElementbyID("launchStatus");
        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
        }

        else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
            alert("Please enter numerical values");
        } else if (validateInput(pilot) === "Is a Number" || validateInput(copliot)=== "Is a Number") {
            alert("Please do not enter numbers for names")
        }
        else {
            pilotStatus.innerHTML = "Pilot ${pilot} is ready";
            copilotStatus.innerHTML = "Co-pilot ${copilot} is ready";
            list.style.visibility = 'hidden';
        }

        if (Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML = "Not enough fuel";
            list.style.visibility = 'visbile';
            launchStatus.InnerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = 'red';
        } else if (Number(cargoLevel) > 10000 ) {
            cargoStatus.innerHTML = "Cargo too heavy";
            list.style.visibility = 'visible';
            launchStatus.InnerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = 'red';
        } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
            list.style.visibility = 'visible';
            launchStatus.InnerHTML = "Shuttle ready for launch";
            launchStatus.style.color = 'green';
            fuelStatus.innerHTML = "Enough fuel for travel";
            cargoStatus.innerHTML = "Cargo light enough to takeoff";
        }
   }


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
