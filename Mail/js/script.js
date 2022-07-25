
const mails = ['elia@gmail.com', 'luca@gmail.com', 'milio@gmail.com']

let emailElement = document.querySelector('input[name="email"]')

let submitelement = document.querySelector('input[name="checker"]')
let emaillUser = ''
let currenMail

submitelement.addEventListener('click', function() { 
    emaillUser = emailElement.value
    
    for (i = 0; i < mails.length; i++) {
        currenMail = mails[i]

        if (currenMail === emaillUser) {
            currenMail = true
        } 
    }

    if (currenMail) {
        console.log('mail trovata')
    } else {
        console.log('mail non trovata')
    }
})
