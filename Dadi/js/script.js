
let submitElement = document.querySelector('input[name="play"]')
let playerNumber = 0
let botNumber = 0

submitElement.addEventListener('click', function() {
    playerNumber = (Math.floor(Math.random()*6) + 1)
    botNumber = (Math.floor(Math.random()*6) + 1)

    console.log( 'Il tuo numero --> ' + playerNumber, 'IL numero del bot --> ' + botNumber)
    if (playerNumber > botNumber) {
        console.log('Complimenti! Hai vinto!')
    } else if (playerNumber < botNumber) {
        console.log('Peccato! Ha vinto il bot')
    } else {
        console.log('Pareggio! Riprova')
    }
})