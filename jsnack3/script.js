// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.
console.log("ciao"
)
let valuePrompt
let sum = 0
for (let i = 0; i <= 10; i++) {

    valuePrompt = Number(prompt('inserisci un numero'));
   if(isNaN(valuePrompt)){
    alert('devi solo mettere numeri')
    location.reload()
   }
    sum += valuePrompt
    console.log(sum);
}
document.documentElement.innerHTML += `la somma dei tuoi numeri e: ${sum}`;
let valuePromptIndex 
let sumIndex = 0
let index = 0
while( index <= 10) {

    valuePromptIndex = Number(prompt('inserisci un numero'));
   if(isNaN(valuePromptIndex)){
    alert('devi solo mettere numeri')
    location.reload()
   }
    sumIndex += valuePromptIndex
    console.log(sumIndex);
    index++
}
document.documentElement.innerHTML += `la somma dei tuoi numeri e: ${sumIndex}`;

