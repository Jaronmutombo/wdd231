
const myTown = document.querySelector('#town-name');
const myDescription = document.querySelector('#town-description');
const myTemperature = document.querySelector('#town-temperature');
const myGraphic = document.querySelector('#town-graphic');


const myKey = '905bfb43d8485f0486931700b9607067'
const myLat = 40.37747307779979;
const myLon = -111.95163556391083;
const myUnits = 'imperial';
const myApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=${myUnits}&unit=imperial`;




