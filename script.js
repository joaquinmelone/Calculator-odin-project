// Variables declaration

let firstNumber = 0;
let secondNumber = 55;


// Checks if an operator has been clicked, so we can start storing the new numbers into the secondNumber instead of the first one

let operationState = false;

// Checks the operation that is going to be made

let operatorUsed = "";

// DOM handling

const number1Button = document.querySelector("#num1");
const number2Button = document.querySelector("#num2");
const number3Button = document.querySelector("#num3");
const number4Button = document.querySelector("#num4");
const number5Button = document.querySelector("#num5");
const number6Button = document.querySelector("#num6");
const number7Button = document.querySelector("#num7");
const number8Button = document.querySelector("#num8");
const number9Button = document.querySelector("#num9");

const addButton = document.querySelector("#add-operator");

const resultButton = document.querySelector("#final-result");


number1Button.addEventListener("click", function() {
    getNumber(firstNumber, 1);
})

addButton.addEventListener("click", () => {
    operationState = true;
    operatorUsed = "add";
})

resultButton.addEventListener("click", function() {
    firstNumber = operate(operatorUsed, firstNumber, secondNumber);
})








function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function getNumber(storedNumber, newNumber) {
    storedNumber = storedNumber.toString();
    storedNumber += newNumber;

    firstNumber = parseInt(storedNumber);

    return firstNumber;
}