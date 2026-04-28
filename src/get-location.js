
//get location from form
function getLocation() {
    const searchBox = document.querySelector("#search-box");

    if (searchBox.value === "") {
        //alert("No location has been entered. Please enter a valid location.");
        console.log("No location has been entered. Please enter a valid location.");
        return "";
    }
    return searchBox.value;
}

export {getLocation};