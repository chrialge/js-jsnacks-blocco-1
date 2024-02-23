/*
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
*/

console.log("ciao");

const nameUser = prompt("qualle il tuo nome");

const listInvitation =[
    "giamarco",
    "fernando",
    "francesco",
    "colombo",
    "domenico",
    "carlo"

];
let trovato = false;

for (let i = 0; i < listInvitation.length; i++) {
    if(nameUser == listInvitation[i]){
        trovato = true;
        break;
    }
}

if(trovato==true){
    alert('puoi partecipare')
}else{
    alert('non puoi partecipare')
}