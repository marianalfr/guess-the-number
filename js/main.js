'use strict';

let inputNumber = document.querySelector('#input-number');
const buttonTry = document.querySelector('#btn-try');
let textHint = document.querySelector('#hint');
const textAttemps = document.querySelector('#attempts');

function getRandomNumber(max) {
   return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

function guessNumber(){
    let numberValue = parseInt(inputNumber.value);

    if (numberValue > randomNumber){
        textHint.innerHTML = 'Demasiado alto...';
    }
    if (numberValue < randomNumber){
        textHint.innerHTML = 'Demasiado bajo...';
    }
    if (numberValue === randomNumber){
        textHint.innerHTML = `¡Bien hecho! ¡Has acertado en el intento número ${clicks}!.`;
    }
    if (numberValue < 1 || numberValue > 100){
        textHint.innerHTML = 'El número debe estar entre 1 y 100.';
    }
}

let clicks = 0;

function onClick() {
    clicks += 1;
    textAttemps.innerHTML = `Llevas ${clicks} intentos.`;
    console.log(clicks);

    guessNumber();
};



console.log('El número aleatorio es el ' + randomNumber + '.');
buttonTry.addEventListener('click', onClick);



