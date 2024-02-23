console.log('ciao')
/*
    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const firstWord = prompt("inserisci la prima parola");
console.log(firstWord);

const secondWord = prompt("inserisci la seconda parola");
console.log(typeof secondWord);

if(firstWord == null){
    location.reload()
}else if(secondWord == null ){
    location.reload()
}

if(firstWord.leght > secondWord.lenght){
    console.log(firstWord);
    console.log(secondWord)
}else if (firstWord.length < secondWord.length){
    console.log(secondWord)
    console.log(firstWord);
}else{
    console.log("hanno la stessa lunghezza.")
}