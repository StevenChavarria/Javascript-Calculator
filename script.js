const Fieldnumber1 = document.querySelector('.Fieldnumber1');
const Fieldnumber2 = document.querySelector('.Fieldnumber2');
const result = document.querySelector('.result');


function add() {
    let number1 = Number(Fieldnumber1.value);
    let number2 = Number(Fieldnumber2.value);
    Fieldnumber1.value = '';
    Fieldnumber2.value = '';
    result.textContent = 'Result: ' + (number1 + number2);
}

function subtract() {
    let number1 = Number(Fieldnumber1.value);
    let number2 = Number(Fieldnumber2.value);
    Fieldnumber1.value = '';
    Fieldnumber2.value = '';
    result.textContent = 'Result: ' + (number1 - number2);
}

function multiply() {
    let number1 = Number(Fieldnumber1.value);
    let number2 = Number(Fieldnumber2.value);
    Fieldnumber1.value = '';
    Fieldnumber2.value = '';
    result.textContent = 'Result: ' + (number1 * number2);
}

function divide() {
    let number1 = Number(Fieldnumber1.value);
    let number2 = Number(Fieldnumber2.value);
    Fieldnumber1.value = '';
    Fieldnumber2.value = '';
    result.textContent = 'Result: ' + (number1 / number2);
}
