const mEuro = document.getElementById("valEuro");
const mDollars = document.getElementById("valDollars");
const errorMessage = document.getElementById("error-message");

// mEuro.addEventListener("input", function() {
//     const euroVal = parseFloat(mEuro.value);
//     if (isNaN(euroVal) || euroVal < 0) {
//         mDollars.value = "";
//         errorMessage.textContent = "Veuillez rentrer un nombre positif !";
//     } else {
//         errorMessage.textContent = "";
//         const dollarsVal = euroVal * 1.1;
//         mDollars.value = dollarsVal.toFixed(1) + "$";
//     }
// });

// code factorisé :

function funcInput() {
    const euroValue = parseFloat(mEuro.value);
    if (isNaN(euroValue) || euroValue < 0) {
        mDollars.value = "";
        errorMessage.textContent = "Veuillez rentrer un nombre positif !";
    } else {
        mDollars.value = (euroValue * 1.1).toFixed(1) + "$";
        errorMessage.textContent = "";
    }
}

mEuro.addEventListener("input", funcInput);




// function clickOnEuro() {
//     console.log("Ca c'est bien :)");
// }

// const euro = parseFloat(prompt("Entrez une valeur en euro"));
// if (isNaN(euro) || euro < 0) {
//     alert("Veuillez rentrer un nombre positif !");
// } else {
//     const dollars = euro * 1.1;
//     alert("Votre conversion de " + euro.toFixed(1) + "€ correspond à " + dollars.toFixed(1) + "$");
// }