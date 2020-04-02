// const numSerie = document.getElementById("numeroSerie");
// const modNumSerie = "0000-0000-0000-0000";
// let tabGrps = numSerie.split("-");
//     // console.log("tabGrps = ", tabGrps);
// let numSerieInvalid = false;

// if( (numSerie.length !== modNumSerie.length) || ( (numSerie.charAt(4) && numSerie.charAt(9) && numSerie.charAt(14))!== "-" ) || isNaN(tabGrps[0]) || isNaN(tabGrps[1]) || isNaN(tabGrps[2]) || isNaN(tabGrps[3]) ){
    
//     numSerieInvalid = true ;
//     console.log("Numéro de série invalide !");
//     console.log("Règle n°1 non respectée. \n Le numéro de série n'est pas sous la forme XXXX-XXXX-XXXX-XXXX (les X sont des nombres)");
    
// } else if(numSerieInvalid === false){
//     const grp1 = tabGrps[0].split('');
//     // console.log("grp1 = ", grp1);
//     const grp2 = tabGrps[1].split('');
//     // console.log("grp2 = ", grp2);
//     const grp3 = tabGrps[2].split('');
//     // console.log("grp3 = ", grp3);
//     const grp4 = tabGrps[3].split('');
//     // console.log("grp4 = ", grp4);

//     if (grp1[0] !== grp3[3] || grp1[1] !== grp3[2] || grp1[2] !== grp3[1] || grp1[3] !== grp3[0]){

//         numSerieInvalid = true ;    
//         console.log("Numéro de série invalide !");
//         console.log("Règle n°2 non respectée. \n Le 1er groupe de 4 chiffres n'est pas l'inverse du 3eme groupe.");

//     }else if(numSerieInvalid === false){

//         let grp3Mult7 = tabGrps[2] * 7 ;
//         // console.log("grp3Mult7 = ", grp3Mult7);
//         let a = grp3Mult7.toString();
//         // console.log("a = ", a);
//         let b = a.split('');
//         // console.log("b = ", b);
//         let c = b[b.length-4] + b[b.length-3] + b[b.length-2] + b[b.length-1];
//         // console.log("c = ", c);

//         if (tabGrps[1] !== c ){
//             numSerieInvalid = true ; 
//             console.log("Numéro de série invalide !");
//             console.log("Règle n°3 non respectée. \n Le 2eme groupe de chiffres n'est pas composé des 4 derniers chiffres du 3eme groupe multiplié par 7.");

//         } else if(numSerieInvalid === false){

//             const sommeGrps = parseInt(tabGrps[0]) + parseInt(tabGrps[1]) + parseInt(tabGrps[2]) + parseInt(tabGrps[3]);
//             // console.log("sommeGrps = ", sommeGrps);

//             if ((sommeGrps%10000) !== 0){
//                 numSerieInvalid = true ; 
//                 console.log("Numéro de série invalide !");
//                 console.log("Règle n°4 non respectée. \n La somme des 4 groupes de chiffres ne donne pas un multiple de 10000.");
            
//             }
//         }
//     }
// }   

// if (numSerieInvalid === false){
//     console.log("Numéro de série valide !");
// }

// correction Antho :

const serialNumber = document.getElementById("numeroSerie");
let isValid = true;

// == Etape 1 : Vérification du format == //
if (serialNumber.length !== 19) {
    isValid = false;
    console.error("Regle 1 : Mauvaise longueur !");
} else if (serialNumber[4] !== '-' || serialNumber[9] !== '-' || serialNumber[14] !== '-') {
    isValid = false;
    console.error("Regle 1 : Mauvais format (tiret) !");
} else if (isNaN(serialNumber.split('-').join(''))) {
    isValid = false;
    console.error("Regle 1 : Mauvais format (chiffres) !");
} else if (parseInt(serialNumber.split('-').join('')) !== parseFloat(serialNumber.split('-').join(''))) {
    isValid = false;
    console.error("Regle 1 : Mauvais format (y'a un point) !");
}

const groups = serialNumber.split('-');

// == Etape 2 : Groupe 1 & Groupe 3 == //
if (groups[0] !== groups[2].split('').reverse().join('')) {
    isValid = false;
    console.error("Regle 2 !");
}

const group3 = parseInt(groups[2]);
const group2 = parseInt(groups[1]);

// == Etape 3 : Groupe 3 & Groupe 2 == //
if ((group3 * 7) % 10000 !== group2) {
    isValid = false;
    console.error("Regle 3 !");
}

const group1 = parseInt(groups[0]);
const group4 = parseInt(groups[3]);

// == Etape 4 : La somme == //
if ((group1 + group2 + group3 + group4) % 10000 !== 0) {
    isValid = false;
    console.error("Regle 4 !");
}

if (isValid) {
    document.write("Le numéro de série est valide !");
} else {
    document.write("Le numéro de série n'est pas valide !");
}


// 0x00-0000 -> représente une valeur hexa pour ça on peut préciser le type de parseInt -> parseInt("0x10", 10);
