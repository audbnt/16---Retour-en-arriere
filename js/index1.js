
// const mEuro = parseFloat(prompt("Hello ! Write a positive number in € to convert in $ :"));

// if ( mEuro >= 0) {
//     const mDollars = mEuro * 1.10 ;
//     window.alert("Your price in € convert is : " + mDollars.toFixed(2) + "$");
// } else {
//     window.alert("You need write a positive number too convert !");
// }


const euro = parseFloat(prompt("Entrez une valeur en euro"));
if (isNaN(euro) || euro < 0) {
    alert("Veuillez rentrer un nombre positif !");
} else {
    const dollars = euro * 1.1;
    alert("Votre conversion de " + euro.toFixed(1) + "€ correspond à " + dollars.toFixed(1) + "$");
}
