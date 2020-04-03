// correction antho :

const serialInput = document.getElementById("serialInput");
const checkButton = document.getElementById("checkButton");
const messageViewer = document.getElementById("message");
const activesSerials = document.getElementById("activesSerials");

function checkSerial(serialNumber) {
    const groups = serialNumber.split('-');

    // == Etape 2 : Groupe 1 & Groupe 3 == //
    if (groups[0] !== groups[2].split('').reverse().join('')) {
        console.error("Regle 2 !");
        return false;
    }

    const group3 = parseInt(groups[2]);
    const group2 = parseInt(groups[1]);

    // == Etape 3 : Groupe 3 & Groupe 2 == //
    if ((group3 * 7) % 10000 !== group2) {
        console.error("Regle 3 !");
        return false;
    }

    const group1 = parseInt(groups[0]);
    const group4 = parseInt(groups[3]);

    // == Etape 4 : La somme == //
    if ((group1 + group2 + group3 + group4) % 10000 !== 0) {
        console.error("Regle 4 !");
        return false;
    }

    return true;
}

serialInput.addEventListener("input", function() {
    if (serialInput.value.split("").some(c => "0123456789".indexOf(c) === -1)) {
        serialInput.value = serialInput.value.split("").filter(c => "0123456789".indexOf(c) !== -1).join("");
    }

    for (let i = 4; i <= 14; i += 5) {
        if (serialInput.value.length > i) {
            serialInput.value = serialInput.value.slice(0, i) + '-' + serialInput.value.slice(i);
        }
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

checkButton.addEventListener("click", function() {
    if (checkSerial(serialInput.value)) {
        messageViewer.textContent = "Votre numéro de série est valide !";
        messageViewer.className = "valid";
        // NE PAS FAIRE CA !!!
        activesSerials.innerHTML += "<li>" + serialInput.value + "</li>";
    } else {
        messageViewer.textContent = "Votre numéro de série est invalide !";
        messageViewer.className = "error";
    }
});