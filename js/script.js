
//  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 

// Chiedo all'utente il numeroi di km che vuole percorrere

let userKm = parseInt( prompt('Gentile utente, quanti km vuole percorrere ?') );

// Chiedo all'utente la sua eta
let userAge = parseInt(prompt("Gentile utente, qual'è la sua eta ?") );

// Prezzo scontato  del 20% per i minorenni
const priceMinor = 0.16; 

// Prezzo scontato del 40% per gli over 65 
const PriceAdult = 0.12;

// Prezzo del Viaggio 


// Calcolo prezzo totale del viaggio per i minorenni e over 65



if (userAge < 18 ) {
    priceMinor = 'prezzo del biglietto per i minorenni';
     
}

else if ( userAge > 65 ) {
     priceAdult = 'prezzo del biglietto per gli over 65';
}

