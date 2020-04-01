let perim = 0.0 ;
let longM = 0.0 ;
let largM = 0.0 ;
let def = true ;
const long = (prompt("Saissez la longeur de la surface : "));
const unitLong = prompt("Quel est l'unité de mesure de la longueur ?")
const larg = (prompt("Saissez la largeur de la surface : "));
const unitLarg = prompt("Quel est l'unité de mesure de la largeur ?");


if ( long > 0 && larg > 0) {

    switch(unitLong) {
        case "m":
            longM = long ;
            break;
        case "dm":
            longM = long / 10 ;
            break;
        case "cm":
            longM = long / 100 ;
            break;
        case "mm":
            longM = long / 1000 ;
            break;
        case "dam":
            longM = long * 10 ;
            break;
        case "hm":
            longM = long * 100 ;
            break;
        case "km":
            longM = long * 1000 ;
            break;
        default:
            def = false;
            window.alert("Unités inconnues : "+ unitLong );
            break;
    }

    switch(unitLarg) {
        case "m":
            largM = larg;
            break;
        case "dm":
            largM = larg / 10 ;
            break;
        case "cm":
            largM = larg / 100 ;
            break;
        case "mm":
            largM = larg / 1000 ;
            break;
        case "dam":
            largM = larg * 10 ;
            break;
        case "hm":
            largM = larg * 100 ;
            break;
        case "km":
            largM = larg * 1000 ;
            break;
        default:
            def = false;
            window.alert("Unités inconnues : "+ unitLarg );
            break;
    }

    if (def === true) {
        const perim = (parseFloat(longM) + parseFloat(largM)) * 2 ;
        window.alert("Périmètre de la surface : " + perim + "m");
    }
   
} else {
    def = false;
    window.alert("Valeurs invalide !");
}



// let longueur = prompt("Veuillez saisir la longueur");
// const unitLongueur = prompt("En quelle unité ?");
// let largeur = prompt("Veuillez saisir la largeur");
// const unitLargeur = prompt("En quelle unité ?");

// const UNIT = {"mm":1000, "cm":100, "dm":10, "m":1};

// if (isNaN(longueur) || longueur <= 0 || isNaN(largeur) || largeur <= 0) {
//     alert("Veuillez rentrer une longueur et une largeur positive !");
// } else if (UNIT.indexOf(unitLongueur) === -1 || UNIT.indexOf(unitLargeur) === -1) {
//     alert("Veuillez rentrer une unité acceptable (" + UNIT.join(" ou ") + ") !");
// } else {


//     // switch (unitLongueur) {
//     //     case "mm":
//     //         longueur /= 1000;
//     //         break;
//     //     case "cm":
//     //         longueur /= 100;
//     //         break;
//     //     case "dm":
//     //         longueur /= 10;
//     //         break;
//     // }
// ou :
//     // switch (unitLongueur) {
//     //     case "mm":longueur /= 10;
//     //     case "cm":longueur /= 10;
//     //     case "dm":longueur /= 10;
//     //         break;
//     // }

//     // switch (unitLargeur) {
//     //     case "mm":
//     //         largeur /= 1000;
//     //         break;
//     //     case "cm":
//     //         largeur /= 100;
//     //         break;
//     //     case "dm":
//     //         largeur /= 10;
//     //         break;
//     // }
//     const perimetre = (parseFloat(longueur) + parseFloat(largeur)) * 2;
//     alert("Le perimetre d'un surface de coté " + longueur + "x" + largeur + " est de " + perimetre + "m");
// }