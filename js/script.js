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

// creo un array vuoto per i numeri che verranò generati dalla macchina.
let numbersList = [];
// creo l'elemento in cui verranò mostrati i numeri.
const numberOutputHtml = document.getElementsByClassName('numbers-generated')[0];
// Aggiungo 5 numeri randomici senza ripetizioni nell'array.
while (numbersList.length < 5) {
    const randomNumber = getRandomNum(1, 9999);
    if (!numbersList.includes(randomNumber)) {  // Se non è incluso(!) in numbersList(array)  
        numbersList.push(randomNumber);  // aggiungi il numero all'array.
    }
}

for (let i = 0; i < numbersList.length; i++) {
    numberOutputHtml.innerHTML += numbersList[i] + ' ';
}

// Funzione waiting che aspetta 30 secondi prima di cancellare dall'html la lista di numeri.
setTimeout(function() {
    numberOutputHtml.innerHTML = '';  // nascondo la lista di numeri sovracrivendola con una stringa vuota.
    // numberOutputHtml.className = 'hide';  // nascondo la lista di numeri aggingendo una classe e sfruttando css.
    
    let correctAnswers = 0;
    let userNumbers = [];
    
    setTimeout(function() {

        for (let i = 0; i < 5; i++) {
            const userResponse = parseInt(prompt('Inserisci uno dei numeri che hai appena visto.'));

            if (numbersList.includes(userResponse) && !userNumbers.includes(userResponse)) {
                correctAnswers++;
            }
            userNumbers.push(userResponse);
        }
        alert('numeri indovinati: ' + correctAnswers);
    }, 500);
}, 29500);