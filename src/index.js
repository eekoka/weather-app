import "./styles.css";
import { fetchWeatherData } from "./fetch-weather-data.js";
import { getLocation } from "./get-location.js";
import { getUnit } from "./get-unit.js";
import { loadPage } from "./load-page.js";

const content = document.querySelector("#content");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");
const loadingScreen = document.querySelector("#loading-screen");

const resultImg = document.querySelector("#result-img");
const resultTemp = document.querySelector("#result-temp");
const resultsmry = document.querySelector("#result-summary");

//self executable async function for display initial view for default location and default unit
(async () => {
    const [status, weatherData] = await fetchWeatherData("London", getUnit());
    loadPage(status, weatherData, getUnit());

})(); 


searchBtn.onclick = () => {
    (async () => {
        const [status, weatherData] = await fetchWeatherData(getLocation(), getUnit());
        loadPage(status, weatherData, getUnit()); 
    })();
};




const unitRadio = document.querySelectorAll("#settings input");

unitRadio.forEach(radio => {
    radio.addEventListener('change', (event) => {
    //checks if radio button is checked
    let unitX;
    if (event.target.checked) {
      unitX = event.target.value;
    }
    //fetchWeatherData();
    //leadpagewithweatherdata();
  });
});

//200 4xx(user check) 5xx (something else)