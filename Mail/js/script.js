
const mails = ['elia@gmail.com', 'luca@gmail.com', 'milio@gmail.com']

let emailElement = document.querySelector('input[name="email"]')

let submitelement = document.querySelector('input[name="checker"]')
let emaillUser = ''

submitelement.addEventListener('click', function() { 
    emaillUser = emailElement.value
    
    if (emaillUser === mails[0] || emaillUser === mails[1] || emaillUser === mails[2]) {
        console.log('Accesso riuscito')
    } else {
        console.log('Accesso negato')
    }

    
    
})

//verificare che la mail sia nell'arrey dei registrati

// stamapre l'esito dell'operazione