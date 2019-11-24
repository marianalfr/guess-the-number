'use strict';

let inputNumber = document.querySelector('#input-number');
const buttonTry = document.querySelector('#btn-try');
let textHint = document.querySelector('#hint');
const textAttemps = document.querySelector('#attempts');
const buttonReset = document.querySelector('#btn-reset');
const winModal = document.querySelector('#win');
const buttonReplay = document.querySelector('#btn-play');
const winAttempt = document.querySelector('#win-attempt');

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
        textHint.innerHTML = `¡Bien hecho!, ¡has acertado en el intento número ${clicks+1}!.`;
        showWinModal();
    }
    if (numberValue < 1 || numberValue > 100){
        textHint.innerHTML = 'El número debe estar entre 1 y 100.';
    }
    if (inputNumber.value === ''){
        textHint.innerHTML = '¡Vamos, introduce un número!.';
    }
}

let clicks = 0;

function onClick() {
    guessNumber();
    if (inputNumber.value === ''){
        clicks = clicks;
    } else {
        clicks += 1;
        textAttemps.innerHTML = `Llevas ${clicks} intentos.`;
        console.log(clicks);
    }
};

function onEnter(e){
    if (e.keyCode === 13){
        event.preventDefault();
        buttonTry.click();
    }
}

function clearOnReset(){
    textHint.innerHTML = '🤖 Venga, ¡vamos allá de nuevo!. 🤖';
    textAttemps.innerHTML = `Volvemos a empezar.`;
    clicks = 0;
}

function showWinModal(){
    winModal.classList.remove('hidden');
    winAttempt.innerHTML = `¡Has acertado en el intento número ${clicks+1}`;
}

function replay(){
    winModal.classList.add('hidden');
    buttonReset.click();
}



console.log('El número aleatorio es el ' + randomNumber + '.');
buttonTry.addEventListener('click', onClick);
inputNumber.addEventListener('keydown', onEnter);
buttonReset.addEventListener('click', clearOnReset);
buttonReplay.addEventListener('click', replay);


