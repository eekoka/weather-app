import "./styles.css";

const content = document.querySelector("#content");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");
const loadingScreen = document.querySelector("#loading-screen");

const resultImg = document.querySelector("#result-img");
const resultTemp = document.querySelector("#result-temp");
const resultsmry = document.querySelector("#result-summary");

//get location from form
function getLocation() {
    if (searchBox.textContent === "") {
        alert("No location has been entered. Please enter a valid location.");
        return "";
    }
    return searchBox.textContent;
}





async function getWeatherData() {
    const location = "New York"; // Specify your location here
    const apiKey = "5AEDH9XLUNHJSBVWDHVGENLUK"; // Use your API Key
    const unitg = "metric";
    //const unitg = "us";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unitg}&key=${apiKey}&contentType=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            //console.log(response);
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const weatherData = await response.json();
        console.log("Weather Data:", weatherData);
        // Further processing of weatherData can be done here

    } catch (error) {
        console.error("Fetching weather data failed:", error);
        //Optional: add placeholder stuff if fetch fails
    }
}

getWeatherData();





searchBtn.onclick = () => {
    location = getLocation();
    if (location !== "") getWeatherData();
};
