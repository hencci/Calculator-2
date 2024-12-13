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
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return minus(firstNumber, secondNumber);
        case 'x':
            return multiply(firstNumber, secondNumber);
        case '÷':
            return divide(firstNumber, secondNumber);
        default:
            return null;
    }
}

numKeys.forEach((numKey) => {
    numKey.addEventListener("click", (e) => {
        const value = e.target.innerText;
        //Removes the leading zero on the display
        if (lowerDisplay.innerText === "0" && value !== ".") {
            lowerDisplay.innerText = value;
        }
        else {
            lowerDisplay.innerText += value;
        }
    })
})

opKeys.forEach((opKey) => {
    opKey.addEventListener("click", (e) => {
        if (firstNumber !== null && operator !== null && lowerDisplay.innerText !== "") {
            //Converts into a floating-point number
            secondNumber = parseFloat(lowerDisplay.innerText);
            const result = operate(firstNumber, operator, secondNumber);
            lowerDisplay.innerText = result;
            firstNumber = result;
        }
        else {
            firstNumber = parseFloat(lowerDisplay.innerText);
        }
        operator = e.target.innerText;
        upperDisplay.innerText = `${firstNumber} ${operator}`;
        lowerDisplay.innerText = "";
    })
})

equalTo.addEventListener("click", () => {
    if (firstNumber !== null && operator !== null) {
        secondNumber = parseFloat(lowerDisplay.innerText);
        const result = operate(firstNumber, operator, secondNumber);
        upperDisplay.innerText = `${firstNumber} ${operator} ${secondNumber} =`
        lowerDisplay.innerText = result;
        firstNumber = null;
        operator = null;
    }
})

clearKeys.forEach(clearKey => {
    clearKey.addEventListener("click", clearEntry);
})

function clearEntry(e) {
    if (e.target.id === "clear") {
        lowerDisplay.innerText = "";
        upperDisplay.innerText = "";
        firstNumber = null;
        secondNumber = null;
        operator = null;
    }
    else if (e.target.id === "clearEntry") {
        lowerDisplay.innerText = "";
    }
    else if (e.target.id === "backspace") {
        lowerDisplay.innerText = lowerDisplay.innerText.slice(0, -1);
    }
}