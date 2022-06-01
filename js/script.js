
//  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 

// Chiedo all'utente il numero di km che vuole percorrere

const userKm = parseInt( prompt('Gentile utente, quanti km vuole percorrere ?') );

// Chiedo all'utente la sua eta
const userAge = parseInt(prompt("Gentile utente, qual'è la sua eta ?") );

// Prezzo scontato  del 20% per i minorenni
const priceMinor = ( 0.21 * 20 / 100);

// Prezzo scontato del 40% per gli over 65 
const priceAdult = ( 0.21 * 40 /100);

// Prezzo totale del viaggio 
let totalPrice = 0.21 * userKm;

// Calcolo prezzo totale del viaggio per i minorenni e over 65

if (userAge < 18 ) {
  totalPrice = totalPrice - totalPrice * priceMinor;
     
}

else if ( userAge > 65 ) {
  totalPrice = totalPrice - totalPrice * priceAdult;
}

// Stampoo in Pagina
document.getElementById('usermessage').innerHTML='Il prezzo del biglietto del treno è di  ' + totalPrice.toFixed(2);
