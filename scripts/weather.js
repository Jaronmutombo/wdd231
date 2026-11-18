
const myTown = document.querySelector('#town-name');
const myDescription = document.querySelector('#town-description');
const myTemperature = document.querySelector('#town-temperature');
const myGraphic = document.querySelector('#town-graphic');


const myKey = '905bfb43d8485f0486931700b9607067'
const myLat = 40.37747307779979;
const myLon = -111.95163556391083;
const myUnits = 'imperial';
const myApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=${myUnits}&unit=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myApiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    console.log('hello')
}

 