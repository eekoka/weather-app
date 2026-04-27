function loadPage(status, weatherData, unit) {
    const resultImg = document.querySelector("#result-img");
    const location = document.querySelector("#location");
    const resultTemp = document.querySelector("#result-temp");
    const resultsmry = document.querySelector("#result-summary");

    let unitx;
    if (unit == "metric") unitx = "°C";
    else if (unit == "us") unitx = "F";

    console.log(weatherData.currentConditions.icon);
    location.textContent = weatherData.resolvedAddress;
    resultTemp.textContent = weatherData.currentConditions.temp.toString() + unitx;
    resultsmry.textContent = weatherData.currentConditions.conditions + ". " + weatherData.description;

    //clear search field
    const searchBox = document.querySelector("#search-box");
    searchBox.value = ""; 

}

export {loadPage};