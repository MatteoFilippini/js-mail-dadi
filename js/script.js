/*
    MAIL
    Crea un array di email;
    Chiedi all’utente la sua email.
    controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.
 */

// creo l'array
const email = ['matteofilipppini8@gmail.com', 'lucagarda@gmail.com'];



// chiedo all'utente l'email
const userEmail = prompt('inserisci la tua email', 'matteofilipppini8@gmail.com');




// controllo se l'email è prsente
let result = email.indexOf(userEmail);
if (result >= 0) {
    console.log('Email presente nell array');
} else {
    console.log('Email NON presente nell array');
}




/*
    GIOCO DDEI DADI
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
    Stampare in console i tiri di dado e il risultato.
*/

const userNum = Math.round(Math.random() * 10);
console.log('utente: ', userNum);

const cpuNum = Math.round(Math.random() * 10);
console.log('computer: ', cpuNum);

if (userNum === cpuNum) {
    console.log('PAREGGIO');
} else if (userNum > cpuNum) {
    console.log('VITTORIA');
} else {
    console.log('SCONFITTA');
}

