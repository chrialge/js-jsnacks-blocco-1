// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
console.log('ciao')


let valuePrompt
let sum = [];
/*

for(i = 0; i < 6; i++){
        let number = parseInt(prompt('inserisci un numero'));
    if (number % 2 != 0) {
        sum += number
    }
}
console.log(sum)

 */
let i = 0;
while (i < 6) {
    
    let number = parseInt(prompt('inserisci un numero'));
    if (number % 2 != 0) {
        sum += number
    }

    i++

}
console.log(sum)
