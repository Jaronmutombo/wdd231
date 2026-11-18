
const myTown = document.querySelector('#town-name');
const myDescription = document.querySelector('#town-description');
const myTemperature = document.querySelector('#town-temperature');
const myGraphic = document.querySelector('#town-graphic');


const myKey = '905bfb43d8485f0486931700b9607067'
const myLat = 40.37747307779979;
const myLon = -111.95163556391083;
const myUnits = 'imperial';
const myApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=${myUnits}&unit=imperial`;

async function getWeather() {
  try {
    const response = await fetch(myApiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      myTown.textContent = data.name;
      myDescription.textContent = data.weather[0].description;
      myTemperature.textContent = `${data.main.temp.toFixed(0)} °F`;
      const iconCode = data.weather[0].icon;
      myGraphic.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    } else {        
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}


function displayWeather() {
  console.log('Fetching weather data...');
  getWeather(); 
}

displayWeather();   