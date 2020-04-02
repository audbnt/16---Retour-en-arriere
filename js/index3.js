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