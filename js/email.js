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

