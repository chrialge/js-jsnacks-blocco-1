console.log('ciuao')
const containerCube = document.querySelector('.container')

// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente
for (let i = 0; i < 3; i++) {
    let valueCube = parseInt(prompt('inserisci un numero:'))
    const markup = `
    <div class="box" width="100px" height="100px" background-color="green">
        <span>${valueCube}</span>
    </div>
    `
    containerCube.insertAdjacentHTML('beforeend', markup)
    
}

