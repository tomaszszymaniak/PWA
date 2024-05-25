//const - dekrlaracja zmiennej stałej
//# - odwołanie do identyfikatora elementu html - atrybutu id
//. - odwołanie do klasy elementu html - atrybutu id
const userName = document.querySelector('input#username');
const email = document.querySelector('input#email');
const password1 = document.querySelector('input#pass1');
const password2 = document.querySelector('input#pass2');
const resetButton = document.querySelector('.reset');
const sendButton = document.querySelector('.send');

function showOrHideErrorMessage(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
}

function checkPasswords () {
    if (password1.value != password2.value) {
        showOrHideErrorMessage(password2, 'Hasła są różne');
    } else {
        showOrHideErrorMessage(password2, '');
    }
}

function checkInputsLength(input, minLength) {
    if (input.value.length < minLength) {
        showOrHideErrorMessage(input, `Pole ${input.previousElementSibling.innerText.toLowerCase().replace(':', '')} powinno zawierać minimum ${minLength} znaków`);
    } else {
        showOrHideErrorMessage(input, '');
    }
}

function checkEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!(regex.test(email.value))) {
        showOrHideErrorMessage(email, 'Adres email nieprawidłowy');
    } else {
        showOrHideErrorMessage(email, '');
    }
}

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    //funkcje walidujące formularz
    checkPasswords();
    checkInputsLength(userName, 5);
    checkInputsLength(password1, 8);
    checkEmail(email);
});

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
});
