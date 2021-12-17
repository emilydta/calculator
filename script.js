const display = document.getElementById("display");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const add = document.getElementById("add");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subtract = document.getElementById("subtract");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const multiply = document.getElementById("multiply");
const equals = document.getElementById("equals");
const zero = document.getElementById("zero");
const clear = document.getElementById("clear");
const divide = document.getElementById("divide");

let calculatorDisplayValue = "";
display.innerText = calculatorDisplayValue;

function operate(operator, firstNumber, secondNumber) {}

function addButton(firstNumber, secondNumber) {
    return console.log(firstNumber+secondNumber);
}

function subtractButton(firstNumber, secondNumber) {
    return firstNumber-secondNumber;
}

function multiplyButton(firstNumber, secondNumber) {
    return firstNumber*secondNumber;
}

function divideButton(firstNumber, secondNumber) {
    return firstNumber/secondNumber;
}

function clearButton() {
    calculatorDisplayValue = "";
    display.innerText = calculatorDisplayValue;
}

function sevenButton(number) {
    number = 7;
    console.log(number);
    calculatorDisplayValue = calculatorDisplayValue + "7";
    display.innerText = calculatorDisplayValue;
}

function eightButton(number) {
    number = 8;
    console.log(number);
    calculatorDisplayValue = calculatorDisplayValue + "8";
    display.innerText = calculatorDisplayValue;
}

seven.addEventListener("click", () => sevenButton());
eight.addEventListener("click", () => eightButton());
add.addEventListener("click", () => addButton());
clear.addEventListener("click", () => clearButton());


