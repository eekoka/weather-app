import "./styles.css";
import { fetchWeatherData } from "./fetch-weather-data.js";
import { getLocation } from "./get-location.js";
import { getUnit } from "./get-unit.js";
import { loadPage } from "./load-page.js";

//self executable async function for display initial view for default location and default unit when website is first opened
(async () => {
    const [status, weatherData] = await fetchWeatherData("London", getUnit());
    loadPage(status, weatherData, getUnit());

})(); 

//when new location is submitted page should load the new data for new location
const searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = (event) => {
    event.preventDefault();
    (async () => {
        const [status, weatherData] = await fetchWeatherData(getLocation(), getUnit());
        loadPage(status, weatherData, getUnit()); 
    })();
};

//when unit is changed page should reload with correct unit
const unitRadio = document.querySelectorAll("#settings input");
const location = document.querySelector("#location");

unitRadio.forEach(radio => {
    radio.addEventListener('change', (event) => {
    (async () => {
        //using the currently displayed location
        const [status, weatherData] = await fetchWeatherData(location.textContent, getUnit());
        loadPage(status, weatherData, getUnit()); 
    })();
  });
});
