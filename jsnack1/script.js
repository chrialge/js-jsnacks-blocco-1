/* 
    l'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
*/
const firstNumber = Number(prompt("Inserisci il primo numero"));

const secondNumber = Number(prompt("Inserisci il secondo numero"));


if(firstNumber > secondNumber){
    console.log(firstNumber)
}else if(firstNumber < secondNumber){
    console.log(secondNumber)
}else{
    console.log("sono due numeri pari");
}