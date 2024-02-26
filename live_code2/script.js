/*
gestione delle stringhe:

chiedi all'utente di inserire una frase.
scrivi un programma che individua la aprola piu lunga nella frase e la stampa
*/

let myInputElement = document.getElementById("name");
myInputElement.addEventListener('change', function(){

    let myWord = myInputElement.value;
    let words = myWord.split(" ");

    let flagContatore = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        let contatore;
        if(words[flagContatore].length < words[i].length){
            flagContatore = i;
        }
    }

    alert('la parola piu lunga e ' + words[flagContatore] + `${words[flagContatore].length}`)
})