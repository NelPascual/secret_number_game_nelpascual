let secretNumber = 0;
let attempts = 0;
let listNumbersDrawn = [];
let maximumNumber = 10;

function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('userValue').value);

    if(userNumber === secretNumber) {
        assignTextElement('p', `Acertaste el número en ${attempts} ${(attempts === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if(userNumber > secretNumber) {
            assignTextElement('p', 'El número secreto es menor.');
        } else {
            assignTextElement('p', 'El número secreto es mayor.');
        }
        attempts++;
        cleanBox();
    }
    return;
}

function generateSecretNumber() {
    let numberGenerated = Math.floor(Math.random() * maximumNumber) + 1;

    if(listNumbersDrawn.length == maximumNumber) {
        assignTextElement('p', 'Ya se sortearon todos los números posibles.');
    } else {
        if(listNumbersDrawn.includes(numberGenerated)) {
            return generateSecretNumber();
        } else {
            listNumbersDrawn.push(numberGenerated);
            return numberGenerated;
        }
    }
}

function cleanBox() {
    document.querySelector('#userValue').value = '';
}

function initialConditions() {
    assignTextElement('h1', 'Juego del Número Secreto');
    assignTextElement('p', `Indica un número del 1 al ${maximumNumber}`);
    secretNumber = generateSecretNumber();
    attempts = 1;
}

function restartGame() {
    cleanBox();
    initialConditions();
    document.querySelector('#restart').setAttribute('disabled', 'true');
}

initialConditions();