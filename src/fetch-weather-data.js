async function fetchWeatherData(locationVal, unitX) {
    const location = locationVal; // Specify your location here
    const apiKey = "5AEDH9XLUNHJSBVWDHVGENLUK"; // Use your API Key
    const unitg = unitX;
    //const unitg = "us";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unitg}&key=${apiKey}&contentType=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            //console.log(response);
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const weatherData = await response.json();
        //console.log("Weather Data:", weatherData);
        return [response.status, weatherData];

    } catch (error) {
        console.error("Fetching weather data failed:", error);
        return [response.status, {}];
    }
}

export {fetchWeatherData};