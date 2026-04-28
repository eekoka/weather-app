import { getWeatherIconUrl } from "./get-weather-icon-url.js";

function loadPage(status, weatherData, unit) {
    const resultImg = document.querySelector("#result-img");
    const location = document.querySelector("#location");
    const resultTemp = document.querySelector("#result-temp");
    const resultsmry = document.querySelector("#result-summary");
    const errMessage = document.querySelector("#err-message");

    let unitx;
    if (unit == "metric") unitx = "°C";
    else if (unit == "us") unitx = "F";
    errMessage.textContent = "";

    if (status === 200) {
        resultImg.src = getWeatherIconUrl(weatherData.currentConditions.icon);
        location.textContent = weatherData.resolvedAddress;
        resultTemp.textContent = weatherData.currentConditions.temp.toString() + unitx;
        resultsmry.textContent = weatherData.currentConditions.conditions + ". " + weatherData.description;
    } else if (status >= 400 && status < 500) {
        //alert("Location not found! Please check your spelling and try again!");
        errMessage.textContent = "Location not found! Please check your spelling and try again!";
    } else if (status == 900) {
        errMessage.textContent = "Location is empty! Please enter a location!";
    } else {
        //alert("Apologies, something went wrong. Please try again later!");
        errMessage.textContent = "Apologies, something went wrong. Please try again later!";
    }

    //clear search field
    const searchBox = document.querySelector("#search-box");
    searchBox.value = ""; 

}

export {loadPage};