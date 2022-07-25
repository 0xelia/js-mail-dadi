let numbers = [11, 22, 32, 43, 56, 21, 53, 75, 54]
let lastNumber = (numbers.length - 1)
let numberStop = (numbers.length - 5)

console.log('valore indice ultimo elemento: ' + lastNumber)

for (let i = lastNumber; i >= numberStop; i--) {
    console.log(numbers[i])
} 

