


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

