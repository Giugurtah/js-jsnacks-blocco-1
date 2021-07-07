
// Ciclo while che chiede a quale snack si vuole accedere e controlla ache che sia stata fatta una scelta possibilie
var resultScriptElement = document.getElementById("results_script");
do {
    var scelta = prompt("Inserire il numero dello snack che si vuole avviare (da 1 a 4)");
} while (scelta != "1" && scelta != "2" && scelta != "3" && scelta != "4");
document.getElementById("header_choice").innerText = "SNACK" + scelta + ":";

// Ciclo if che in base alla scelta fatta avvia lo snack
if (scelta == "1") {
    // SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
    // Il programma stampa la somma di tutti i numeri inseriti.
    // Esegui questo programma in due versioni, con il for e con il while.
    var message = "";

    var sum = 0;
    for (var i=0; i<5; i++) {
        do {
            var numAux = parseInt(prompt("Inserire un numero (ciclo for)"));
        } while (isNaN(numAux));
        sum += numAux;
    }
    message = "Il risultato del ciclo for è " + sum + "<br>";

    var i = 0;
    sum = 0;
    while (i<5) {
        do {
            var numAux = parseInt(prompt("Inserire un numero (ciclo while)"));
        } while (isNaN(numAux));
        sum += numAux;
        i++;
    }

    message += "Il risultato del ciclo while è: " + sum;
    resultScriptElement.innerHTML = message;

} else if (scelta == "2") {
    // SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero, se è dispari stampa il numero successivo.
    var numAux = parseInt(prompt("Inserire un numero"));
    if (numAux%2==0) {
        resultScriptElement.innerText = "Il valore inserito è pari quindi stampo: " + numAux;
    } else {
        resultScriptElement.innerText = "Il valore inserito è dispari quindi stampo: " + (numAux+1);
    }

} else if (scelta == "3") {
    // SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
    var namesList = ["Cristian", "Lorenzo", "Brigida", "Emilia", "Concetta", "Francesca"];
    var surnamesList = ["Buoncompagni", "Moretti", "Terracciano", "Esposito", "Porricelli", "Santella"];
    var fakeGuestsList = [];
    var randNum = 0;
    
    for (var i=0; i<3; i++) {
        do {
        randNum = Math.floor(Math.random()*namesList.length);
        var fakeGuest = namesList[randNum];
        randNum = Math.floor(Math.random()*surnamesList.length);
        fakeGuest += " " + surnamesList[randNum];
        } while (fakeGuestsList.includes(fakeGuest));
        
        fakeGuestsList[i] = fakeGuest;
    }

    resultScriptElement.innerHTML = fakeGuestsList.join("<br>");

} else {
    // SNACK 4: Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.
    var numList1 = [1, 3, 5, 7];
    var numList2 = [3, 5];

    while (numList1.length != numList2.length) {
        var randNum = Math.floor(Math.random()*10);
        if (numList1.length>numList2.length) {
            numList2.push(randNum);
        } else {
            numList1.push(randNum);
        }
    }

    resultScriptElement.innerHTML = numList1.join(" ") + "<br>" + numList2.join(" ");
}


