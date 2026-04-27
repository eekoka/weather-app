function getUnit() {
    const unitRadio = document.querySelectorAll("#settings input");
    let unitX;
    unitRadio.forEach(radio => {
        if (radio.checked) unitX = radio.value;
    });
    return unitX;
}

export {getUnit};