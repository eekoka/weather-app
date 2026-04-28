async function fetchWeatherData(locationVal, unitX) {
    const location = locationVal; // Specify your location here
    const apiKey = "5AEDH9XLUNHJSBVWDHVGENLUK"; // Use your API Key
    const unitg = unitX;
    const loadingScreen = document.querySelector("#loading-screen");
    
    if (location == "") {
        console.log("Location is empty!");
        return [900, {}]
    };

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unitg}&key=${apiKey}&contentType=json`;
    loadingScreen.style.display = "block";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            //console.log(response);
            //throw new Error('Network response was not ok: ' + response.statusText);
            console.error(`Network response was not ok! status: ${response.status}`);
            loadingScreen.style.display = "none";
            return [response.status, {}];
        }

        const weatherData = await response.json();
        //console.log("Weather Data:", weatherData);
        loadingScreen.style.display = "none";
        return [response.status, weatherData];

    } catch (error) {
        console.error("Fetching weather data failed:", error);
        loadingScreen.style.display = "none";
        return [response.status, {}];
    }
}

export {fetchWeatherData};