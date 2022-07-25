//chiedere il numero di elementi dell array

//generare tanti numeri random quanti il numero richiesto dall'utente

//restituire gli ultimi 5 elementi

let numberElement = document.querySelector('input[name="number"]')
let extractElement = document.querySelector('input[name="exstract"]')


let number = 0

let sumbitElement = document.querySelector('input[type="submit"]')
sumbitElement.addEventListener('click', function() {

    number = numberElement.value
    let arrayLength = (parseInt(number))
    let numberStop = extractElement.value

    if (arrayLength <= 0) {
        alert('Inserire un numero superiore ad 0')
        numberElement.value = ''
    }

    let array = []

    for (i = arrayLength; i > 0; i-- ) {
        array.push(Math.floor(Math.random(i)*100))
    }

    console.log(array)
})





// let lastNumber = (numbers.length - 1)
// let numberStop = (numbers.length - 5)

// console.log('valore indice ultimo elemento: ' + lastNumber)

// for (let i = lastNumber; i >= numberStop; i--) {
//     console.log(numbers[i])
// } 

