/*
Gioco di indovinello:
Genera un numero casuale compreso tra 1 e 100. 
Chiedi all'utente di indovinare il numero. Dopo ogni tentativo, fornisci un suggerimento se il numero inserito è maggiore o minore del numero segreto. Fornisci anche il numero totale di tentativi effettuati.
*/

let number = Math.floor(Math.random() * 100) + 1; 
console.log(number);

let numberTentativ = 0;
let trovato = true;
do{

    const numberUser = parseInt(prompt('inserisci un numero tra 1 e 100: '));
    if (number > numberUser) {
        alert(`il numero che hai dato e minore, e il tuo ${numberTentativ} tentativo`);
        
    } else if(number < numberUser){
        alert(`il tuo numero che hai dato e maggiore, e il tuo ${numberTentativ} tentativo `);
        
    }else{
        alert(`il tuo numero e uguale a quello nosto, hai indovinato al tuo ${numberTentativ} tentativo `);
        trovato = false;
        location.reload(30);
    };
    
    numberTentativ++;

} while(trovato == true);

