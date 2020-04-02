const long = document.getElementById("long");
const unitLong = document.getElementById("unitLong");
const larg = document.getElementById("larg");
const unitLarg = document.getElementById("unitLarg");
const resultPerim = document.getElementById("resultCalcPerim");
// const perim = resultPerim.innerHTML;



function functPerim(){

    let longVal = parseFloat(long.value);
    const unitLongVal = unitLong.value;
    let largVal = parseFloat(larg.value);
    const unitLargVal = unitLarg.value;
    let def = false ;

    // const UNIT = {"mm":1000, "cm":100, "dm":10, "m":1};

    if (isNaN(longVal) || longVal <= 0 || isNaN(largVal) || largVal <= 0) {
        resultPerim.innerHTML = "Veuillez rentrer une longueur et une largeur positive !";
    } else {


        switch (unitLongVal) {
            case "mm":
                longVal /= 1000;
                break;
            case "cm":
                longVal /= 100;
                break;
            case "dm":
                longVal /= 10;
                break;
            case "m":
                longVal /= 1;
                break;
            default:
                def = true ;
                resultPerim.innerHTML = "Veuillez rentrer une unité de longueur acceptable (" + unitLongVal + ") !";
                break;
        }

        switch (unitLargVal) {
            case "mm":
                largVal /= 1000;
                break;
            case "cm":
                largVal /= 100;
                break;
            case "dm":
                largVal /= 10;
                break;
            case "m":
                largVal /= 1;
                break;
            default:
                def = true ;
                resultPerim.innerHTML = "Veuillez rentrer une unité de largeur acceptable (" + unitLargVal + ") !";
                break;
        }  

        if( def === false){
            resultPerim.innerHTML = "Le perimetre d'un surface de coté " + longVal + unitLongVal + " x " +  largVal + unitLargVal + " est de " + ((parseFloat(longVal) + parseFloat(largVal)) * 2).toFixed(2) + " m ";
        }
    }

};

long.addEventListener("input", functPerim);
unitLong.addEventListener("input", functPerim);

larg.addEventListener("input", functPerim);
unitLarg.addEventListener("input", functPerim);



