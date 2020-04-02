// correction Antho :

const serialNum = document.getElementById("serialNumber");
const validation = document.getElementById("bpValid");
const message = document.getElementById("messValErr");

function funcInput(){

    const serNum = serialNum.value ;
    message.innerHTML = "" ;
    let isValid = true;

    console.log(serNum);
    console.log(serNum.length);

    // == Etape 1 : Vérification du format == //
    if (isValid && (serNum.length !== 19) ) {
        isValid = false;
        message.innerHTML = "Regle 1 : Mauvaise longueur !" + "<br>";
    } else if (isValid && (serNum[4] !== '-' || serNum[9] !== '-' || serNum[14] !== '-') ) {
        isValid = false;
        message.innerHTML = "Regle 1 : Mauvais format (tiret) !" + "<br>";
    } else if (isValid && (isNaN(serNum.split('-').join('')))) {
        isValid = false;
        message.innerHTML = "Regle 1 : Mauvais format (chiffres) !" + "<br>";
    } else if (isValid && (parseInt(serNum.split('-').join('')) !== parseFloat(serNum.split('-').join('')))) {
        isValid = false;
        message.innerHTML = "Regle 1 : Mauvais format (y'a un point) !" + "<br>";
    }

    const groups = serNum.split('-');

    // == Etape 2 : Groupe 1 & Groupe 3 == //
    if (isValid && (groups[0] !== groups[2].split('').reverse().join('')) ) {
        isValid = false;
        message.innerHTML = "Regle 2 ! \n Le 1er groupe de 4 chiffres n'est pas l'inverse du 3eme groupe." + "<br>";
    }

    const group3 = parseInt(groups[2]);
    const group2 = parseInt(groups[1]);

    // == Etape 3 : Groupe 3 & Groupe 2 == //
    if (isValid && ((group3 * 7) % 10000 !== group2) ) {
        isValid = false;
        message.innerHTML = "Regle 3 ! \n Le 2eme groupe de chiffres n'est pas composé des 4 derniers chiffres du 3eme groupe multiplié par 7." + "<br>";
    }

    const group1 = parseInt(groups[0]);
    const group4 = parseInt(groups[3]);

    // == Etape 4 : La somme == //
    if (isValid && ((group1 + group2 + group3 + group4) % 10000 !== 0) ) {
        isValid = false;
        message.innerHTML = "Regle 4 !  \n La somme des 4 groupes de chiffres ne donne pas un multiple de 10000." + "<br>";
    }

    if (isValid) {
        message.innerHTML += "Le numéro de série est valide !" ;
    } else {
        message.innerHTML += "Le numéro de série n'est pas valide !";
    }
}

validation.addEventListener("click", funcInput);




// 0x00-0000 -> représente une valeur hexa pour ça on peut préciser le type de parseInt -> parseInt("0x10", 10);
