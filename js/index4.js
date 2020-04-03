// const serialNum = document.getElementById("serialNumber");
// const validation = document.getElementById("bpValid");
// const message = document.getElementById("messValErr");
// let isValid = false;


// function funcClick(){
    
//     const serNum = serialNum.value ;
//     console.log(serNum);
//     console.log(serNum.length);
//     message.innerHTML = "" ;

//     const groups = serNum.split('-');

//     // == Etape 2 : Groupe 1 & Groupe 3 == //
//     if (isValid && (groups[0] !== groups[2].split('').reverse().join('')) ) {
//         isValid = false;
//     }

//     const group3 = parseInt(groups[2]);
//     const group2 = parseInt(groups[1]);

//     // == Etape 3 : Groupe 3 & Groupe 2 == //
//     if (isValid && ((group3 * 7) % 10000 !== group2) ) {
//         isValid = false;
//     }

//     const group1 = parseInt(groups[0]);
//     const group4 = parseInt(groups[3]);

//     // == Etape 4 : La somme == //
//     if (isValid && ((group1 + group2 + group3 + group4) % 10000 !== 0) ) {
//         isValid = false;
//     }

//     if (isValid) {
//         message.innerHTML += "Le numéro de série est valide !" ;
//     } else {
//         message.innerHTML += "Le numéro de série n'est pas valide !";
//     }
// }

// function funcInput() {

//     const serNum = serialNum.value ;
//     console.log(serNum.length);
//     message.innerHTML = "" ;

//     // == Etape 1 : Vérification du format == //
//     if ((serNum.length !== 19) ) {
//         isValid = false;

//     } else if ((serNum[4] !== '-' || serNum[9] !== '-' || serNum[14] !== '-') ) {
//         isValid = false;
//     }else if ((isNaN(serNum.split('-').join('')))) {
//         isValid = false;
//     } else if ((parseInt(serNum.split('-').join('')) !== parseFloat(serNum.split('-').join('')))) {
//         isValid = false;
//     }else{
//         isValid = true ;
//     }

//     if(isValid){
//         validation.disabled = false ;
//     }else{
//         validation.disabled = true ;
//     }

// }



// serialNum.addEventListener("input", funcInput);
// validation.addEventListener("click", funcClick);




// 0x00-0000 -> représente une valeur hexa pour ça on peut préciser le type de parseInt -> parseInt("0x10", 10);


// correction Antho :




const serialInput = document.getElementById("serialInput");
const checkButton = document.getElementById("checkButton");
const messageViewer = document.getElementById("message");

serialInput.addEventListener("input", function() {
    if (ev.data !== null && !ev.data.split("").every(c => "0123456789".indexOf(c) !== -1)) {
        serialInput.value = serialInput.value.split("").filter(c => "0123456789".indexOf(c) !== -1).join("");
    }
    
    const serialNumber = serialInput.value;
    if (serialNumber.length !== 19) {
        checkButton.disabled = true;
        console.error("Regle 1 : Mauvaise longueur !");
    } else if (serialNumber[4] !== '-' || serialNumber[9] !== '-' || serialNumber[14] !== '-') {
        checkButton.disabled = true;
        console.error("Regle 1 : Mauvais format (tiret) !");
    } else if (isNaN(serialNumber.split('-').join(''))) {
        checkButton.disabled = true;
        console.error("Regle 1 : Mauvais format (chiffres) !");
    } else if (parseInt(serialNumber.split('-').join('')) !== parseFloat(serialNumber.split('-').join(''))) {
        checkButton.disabled = true;
        console.error("Regle 1 : Mauvais format (y'a un point) !");
    } else {
        checkButton.disabled = false;
    }
});

