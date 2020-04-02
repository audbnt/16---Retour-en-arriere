// let perim = 0;
// let def = true ;
// const temp = parseFloat(prompt("Saissez une température : "));
// const uniteMesure = prompt("Quel est l'unité de la temperature (C=Celsius / K=Kelvin / F=Fahrenheit) ?");
// let tempC = 0;
// let tempK = 0;
// let tempF = 0;

// if ( temp >= 0 ) {

//     switch(uniteMesure) {
//         case "C":
//             tempC = temp;
//             tempK = (temp + 273.15) ;
//             tempF = (tempK * 1.8) - 459.67;
//             break;
//         case "K":
//             tempK = temp ;
//             tempC = temp - 273.15 ;
//             tempF = temp * 1.8 - 459.67;
//             break;
//         case "F":
//             tempF = temp ;
//             tempK = (temp + 459.67) /1.8;
//             tempC = tempK - 273.67;
//             break;
//         default:
//             def = false;
//             window.alert("Unités inconnues : "+ uniteMesure );
//             break;
//     }
   
// } else {
//     def = false;
//     window.alert("Valeurs invalide !");
// }


// if (def === true) {
//     window.alert("Température en degrés Celsius : " + tempC + "°C" + "\n" + "Température en degrés Kelvin : " + tempK + "°K" + "\n" + "Température en degrés Fahrenheit : " + tempF + "°F" + "\n");
//     // window.alert("Température en degrés Kelvin : " + tempK + "°K");
//     // window.alert("Température en degrés Fahrenheit : " + tempF + "°F");
// }




// let temperature = prompt("Veuillez saisir une température");
// const unit = prompt("Veuillez saisir une unité (°C, °F, K)");

const UNIT = ["C", "F", "K"];

if (isNaN(temperature)) {
    alert("Veuillez saisir valeur numérique de température !");
} else if (UNIT.indexOf(unit) === -1) {
    alert("Veuillez saisir une unité acceptable (" + UNIT.join(" ou ") + ") !");
} else if (unit === "K" && temperature < 0) {
    alert("C'est n'importe quoi : les Kelvin sont forcément positif !");
} else {
    let tempC, tempF, tempK;
    temperature = parseFloat(temperature);
    switch (unit) {
        case "C":
            tempC = temperature;
            tempF = 9/5 * temperature + 32;
            tempK = temperature + 273.15;
            break;
        case "F":
            tempC = (temperature - 32) * 5/9;
            tempF = temperature;
            tempK = (temperature - 32) * 5/9 + 273.15;
            break;
        case "K":
            tempC = temperature - 273.15;
            tempF = (temperature - 273.15) * 9/5 + 32;
            tempK = temperature;
            break;
    }
    alert("Voici vos température :\n\t♦ " + tempC + "°C\n\t♦ " + tempF + "°F\n\t♦ " + tempK + "K");
}

// alert("Hello\r\nworld"); // Windows
// alert("Hello\nworld"); // Linux
// alert("Hello\rworld"); // MacOS