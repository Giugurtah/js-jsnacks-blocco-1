var palla = {
    nome : "palla",
    peso : 10,
};
var displayElement = document.getElementById("display");
var changeWeightButton = document.getElementById("change_weight");
var weightFormElement = document.getElementById("weight_form");
displayElement.innerHTML = printPalla();

changeWeightButton.addEventListener("click", function(){
    var pesoAux = weightFormElement.value;
    if (isPositiveNumber(pesoAux)) {
        palla.peso = parseInt(pesoAux);
        displayElement.innerHTML = printPalla();
    } else {
        alert("Dato non coerente inserito!!");
    }
})


function printPalla() {
    var message = "";
    for (var key in palla) {
        message += key + ": " + palla[key] + "<br>";
    }
    return message;
}

function isPositiveNumber(number) {
    //Il dato viene passato comunque come un stringa, ma controlla che possa essere successivamente convertito in un numero poitivo
    if (!number || number.trim() == "" || isNaN(number) || number < 0) {
        return false;
    }
    return true;
}