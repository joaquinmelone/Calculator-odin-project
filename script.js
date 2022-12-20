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

const screen = document.querySelector("#result-screen");

// Creates the calculator's numbers in the DOM

for(let i = 0; i < 10; i++) {
    numberButtons[i] = document.querySelector(`#num${i}`);
}

// Calculator's buttons

const deleteButton = document.querySelector("#delete-button");
const acButton = document.querySelector("#ac-button");

const addButton = document.querySelector("#add-operator");
const substractButton = document.querySelector("#substract-operator");
const multiplyButton = document.querySelector("#multiply-operator");
const divideButton = document.querySelector("#divide-operator");
const floatButton = document.querySelector("#float-operator");

const resultButton = document.querySelector("#final-result");

// Creates the eventListeners for the numbers
 
for(let i = 0; i < 10; i++) {
    numberButtons[i].addEventListener("click", function() {
        if (operationState === false) {
            firstNumber = getNumber(firstNumber, i);
            screen.textContent = `${firstNumber}`;
        }

        else if (operationState === true){
            secondNumber = getNumber(secondNumber, i);
            screen.textContent = `${secondNumber}`;
        }
    })
}


deleteButton.addEventListener("click", () => {


    if (operationState === false && (firstNumber >= -9 && firstNumber < 10)) {
        firstNumber = 0;
        screen.textContent = `${firstNumber}`;
    }

    else if (operationState === false && (firstNumber > 9 || firstNumber < -9)) {
        firstNumber = removeNumber(firstNumber);
        screen.textContent = `${firstNumber}`;
    }

    else if (operationState === true && (secondNumber >= -9 && secondNumber < 10)) {
        secondNumber = 0;
        screen.textContent = `${secondNumber}`;
    }

    else if (operationState === true && (secondNumber > 9 || secondNumber < -9)){
        secondNumber = removeNumber(secondNumber);
        screen.textContent = `${secondNumber}`;
    }

    
})

acButton.addEventListener("click", () => {
    firstNumber = 0;
    secondNumber = 0;

    screen.textContent = `${firstNumber}`;
})


// Operators

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



// Result


resultButton.addEventListener("click", function() {
    firstNumber = operate(operatorUsed, firstNumber, secondNumber);
    operationState = false;
    screen.textContent = `${firstNumber}`; 
    secondNumber = 0;
})



// Functions

function add(a, b) {
    let tempNumber = (a + b) * 100;
    return tempNumber = (Math.round(tempNumber)) / 100;
}

function substract(a, b) {
    let tempNumber = (a - b) * 100;
    return tempNumber = (Math.round(tempNumber)) / 100;
}

function multiply(a, b) {
    let tempNumber = (a * b) * 100;
    return tempNumber = (Math.round(tempNumber)) / 100;
}

function divide(a, b) {
    let tempNumber = (a / b) * 100;
    return tempNumber = (Math.round(tempNumber)) / 100;
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

function removeNumber(storedNumber) {
    storedNumber = storedNumber.toString();
    storedNumber = storedNumber.slice(0, -1);

    number = parseFloat(storedNumber);

    return number;
}