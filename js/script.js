// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

// Funzione che genera un numero casuale in un range.
function getRandomNum(minNum, maxNum) {
    return Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
}

//
let numbersList = [];
// Aggiungo 5 numeri randomici senza ripetizioni nell'array.
while (numbersList.length < 5) {
    let randomNumber = getRandomNum(1, 9999);
    if (!numbersList.includes(randomNumber)) {  // Se non è incluso(!) in numbersList(array)  
        numbersList.push(randomNumber);  // aggiungi il numero all'array.
    }
}
//
function getUserResponse() {
    let userResponseList = [];

    while (userResponseList.length < 5) {
        const userResponse = parseInt(prompt('Inserisci uno dei numeri che hai visto.'));
        if (!userResponseList.includes(userResponse)) {
            userResponseList.push(userResponse);
        }
    }
    return userResponseList  ;
}

// Funzione waiting che aspetta 30 secondi prima di cancellare dall'html la lista di numeri.
setTimeout(function() {
    numberOutputHtml.innerHTML = '';  // nascondo la lista di numeri sovracrivendola con una stringa vuota.
    // numberOutputHtml.className = 'hide';  // nascondo la lista di numeri aggingendo una classe e sfruttando css.
}, 30000)

const numberOutputHtml = document.getElementById('numbers-generated');
numberOutputHtml.innerHTML = numbersList;