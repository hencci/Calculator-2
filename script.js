const numKeys = document.querySelectorAll('.numKey');
const opKeys = document.querySelectorAll('.opKey');
const clearKeys = document.querySelectorAll('.clearKey');
const equalTo = document.querySelector('#equal');

const display = document.querySelector('.display');
const lowerDisplay = document.querySelector('.lowerDisplay');
const upperDisplay = document.querySelector('.upperDisplay');

let firstNumber = null;
let secondNumber = null;
let operator = null;

function add(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(firstNumber, operator, secondNumber) {

}