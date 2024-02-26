//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero

console.log('ciao') 
let sNumber = prompt('dammi un numero di 4 cifre: ');
console.log(typeof sNumber);
let sum = 0;
let array =[]
const lenght = sNumber.length;
for (let i =0; i < lenght; i++){
    const element = sNumber[i]
    array.push(element)
    sum += Number(element)
    console.log(array, sum);
}

