// Variables declaration

let numberButtons = [];

let firstNumber = 0;
let secondNumber = 0;


// Checks if an operator has been clicked, so we can start storing the new numbers into the secondNumber instead of the first one

let operationState = false;
let floatState = false;

// Checks the operation that is going to be made

let operatorUsed = "";

// DOM handling

for(let i = 0; i < 10; i++) {
    numberButtons[i] = document.querySelector(`#num${i}`);
}

const addButton = document.querySelector("#add-operator");
const substractButton = document.querySelector("#substract-operator");
const multiplyButton = document.querySelector("#multiply-operator");
const divideButton = document.querySelector("#divide-operator");
const floatButton = document.querySelector("#float-operator");

const resultButton = document.querySelector("#final-result");

for(let i = 0; i < 10; i++) {
    numberButtons[i].addEventListener("click", function() {
        if (operationState === false) {
            firstNumber = getNumber(firstNumber, i);
        }

        else if (operationState === true){
            secondNumber = getNumber(secondNumber, i);
        }
    })
}




addButton.addEventListener("click", () => {
    operationState = true;
    operatorUsed = "add";
})

substractButton.addEventListener("click", () => {
    operationState = true;
    operatorUsed = "substract";
})

multiplyButton.addEventListener("click", () => {
    operationState = true;
    operatorUsed = "multiply";
})

divideButton.addEventListener("click", () => {
    operationState = true;
    operatorUsed = "divide";
})

floatButton.addEventListener("click", () => {
    floatState = true;
})



resultButton.addEventListener("click", function() {
    firstNumber = operate(operatorUsed, firstNumber, secondNumber);
    secondNumber = 0;
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
    if (operator === "add") {
        return add(a,b);
    }

    else if (operator === "substract"){
        return substract(a,b);
    }

    else if (operator === "multiply"){
        return multiply(a,b);
    }

    else if (operator === "divide"){
        return divide(a,b);
    }
}

function getNumber(storedNumber, newNumber) {
    if (floatState === true) {
        storedNumber = storedNumber.toString();
        storedNumber += `.${newNumber}`;

        number = parseFloat(storedNumber);
        floatState = false;

        return number;
    }

    else {
        storedNumber = storedNumber.toString();
        storedNumber += newNumber;

        number = parseFloat(storedNumber);

        return number;
    }
    
}