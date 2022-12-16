// Variables declaration

let firstNumber = 0;
let secondNumber = 0;

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


number1Button.addEventListener("click", function() {
    getNumber(firstNumber, 1);
});

/* number2Button.addEventListener("click", e => {
    firstNumber = 1;
    console.log(e.currentTarget.value)
})  */










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