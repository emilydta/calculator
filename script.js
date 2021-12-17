const display = document.getElementById("display");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const addButton = document.getElementById("plus");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subtractButton = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const multiplyButton = document.getElementById("multiply");
const equals = document.getElementById("equals");
const zero = document.getElementById("zero");
const cancel = document.getElementById("cancel");
const divideButton = document.getElementById("divide");

let calculatorDisplayValue = 0000;

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(operator, firstNumber, secondNumber) {}

function sevenButton(number) {
    number = 7;
    console.log(number);
    return number;
}

seven.addEventListener("click", () => sevenButton());


