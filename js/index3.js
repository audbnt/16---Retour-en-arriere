const temp = document.getElementById("temp");
const bpUnits1 = document.getElementById("unitButton1");
const bpUnits2 = document.getElementById("unitButton2");
const bpUnits3 = document.getElementById("unitButton3");
const resultConv = document.getElementById("resultConvTemp");



function functConvTempC(){
    const tempVal = parseFloat(temp.value);
    console.log(tempVal)
    const unitsVal = bpUnits1.value ;
    console.log(unitsVal);
    let tempC = 0 , tempF = 0 , tempK = 0;

    if (isNaN(tempVal)) {
        resultConv.innerHTML = "Veuillez saisir valeur numérique de température !";

    } else {
        
        tempC = tempVal;
        tempF = 9/5 * tempVal + 32;
        tempK = tempVal + 273.15;
            

        // resultConv.innerHTML = "Voici vos température :\n\t " + tempC.toFixed(2) + "°C " + tempF.toFixed(2) + "°F " + tempK.toFixed(2) + "K ";

        resultConv.innerHTML = "Voici vos température :\n\t " + "<ul>" + "<li>" + tempC.toFixed(3) + "°C " + "<li>" + tempF.toFixed(3) + "°F " + "<li>" + tempK.toFixed(3) + "K ";
    }

}

function functConvTempF(){
    const tempVal = parseFloat(temp.value);
    console.log(tempVal)
    const unitsVal = bpUnits3.value ;
    console.log(unitsVal);
    let tempC = 0 , tempF = 0 , tempK = 0;

    if (isNaN(tempVal)) {
        resultConv.innerHTML = "Veuillez saisir valeur numérique de température !";
    
    } else {
        
        tempC = (tempVal - 32) * 5/9;
        tempF = tempVal;
        tempK = (tempVal - 32) * 5/9 + 273.15;
            
    

        // resultConv.innerHTML = "Voici vos température :\n\t " + tempC.toFixed(2) + "°C " + tempF.toFixed(2) + "°F " + tempK.toFixed(2) + "K ";

        resultConv.innerHTML = "Voici vos température :\n\t " + "<ul>" + "<li>" + tempC.toFixed(3) + "°C " + "<li>" + tempF.toFixed(3) + "°F " + "<li>" + tempK.toFixed(3) + "K ";
    }
}

function functConvTempK(){
    const tempVal = parseFloat(temp.value);
    console.log(tempVal)
    const unitsVal = bpUnits2.value ;
    console.log(unitsVal);
    let tempC = 0 , tempF = 0 , tempK = 0;

    if (isNaN(tempVal)) {
        resultConv.innerHTML = "Veuillez saisir valeur numérique de température !";
    } else if (unitsVal === "°K" && tempVal < 0) {
        resultConv.innerHTML = "C'est n'importe quoi : les Kelvin sont forcément positif !";
    } else {
        
        tempC = tempVal - 273.15;
        tempF = (tempVal - 273.15) * 9/5 + 32;
        tempK = tempVal;

        // resultConv.innerHTML = "Voici vos température :\n\t " + tempC.toFixed(2) + "°C " + tempF.toFixed(2) + "°F " + tempK.toFixed(2) + "K ";
        resultConv.innerHTML = "Voici vos température :\n\t " + "<ul>" + "<li>" + tempC.toFixed(3) + "°C " + "<li>" + tempF.toFixed(3) + "°F " + "<li>" + tempK.toFixed(3) + "K ";
    }

}

bpUnits1.addEventListener("click", functConvTempC);
bpUnits2.addEventListener("click", functConvTempK);
bpUnits3.addEventListener("click", functConvTempF);


/* correction antho :
const temperatureInput = document.getElementById("temperature");
const cButton = document.getElementById("c-button");
const fButton = document.getElementById("f-button");
const kButton = document.getElementById("k-button");
const cValue = document.getElementById("c-value");
const fValue = document.getElementById("f-value");
const kValue = document.getElementById("k-value");

function evalTemperature(ev) {
    const temperature = parseFloat(temperatureInput.value);
    switch (ev.target.getAttribute("data-unit")) {
        case "c":
            cValue.textContent = temperature.toFixed(2) + "°C";
            fValue.textContent = (9/5 * temperature + 32).toFixed(2) + "°F";
            kValue.textContent = (temperature + 273.15).toFixed(2) + "K";
            break;
        case "f":
            cValue.textContent = ((temperature - 32) * 5/9).toFixed(2) + "°C";
            fValue.textContent = temperature.toFixed(2) + "°F";
            kValue.textContent = ((temperature - 32) * 5/9 + 273.15).toFixed(2) + "K";
            break;
        case "k":
            cValue.textContent = (temperature - 273.15).toFixed(2) + "°C";
            fValue.textContent = ((temperature - 273.15) * 9/5 + 32).toFixed(2) + "°F";
            kValue.textContent = temperature.toFixed(2) + "K";
            break;
    }
}

cButton.addEventListener("click", evalTemperature);
fButton.addEventListener("click", evalTemperature);
kButton.addEventListener("click", evalTemperature);
*/