const display = document.getElementById("display");
//const total = document.getElementById("total");
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



let firstNumber = "";
let secondNumber = "";
let operator = "blank";
let total = 0;


function operate() {
    if (operator === "+") {
        total = parseInt(firstNumber) + parseInt(secondNumber);
        operator = "blank";
        firstNumber = total;
        secondNumber = "";
        return display.innerText = total;
    } else if (operator === "-") {
        return subtractButton(firstNumber, secondNumber);
    }
    return;
}


function addButton() {
    if (secondNumber != true) {
        operator = "+";
        return display.innerText = `${firstNumber} ${operator}`;
    } else 
        total = parseInt(firstNumber) + parseInt(secondNumber);
        return display.innerText = total;
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
    firstNumber = "";
    secondNumber = "";
    display.innerText = firstNumber + secondNumber;
}

function sevenButton() {
    if (operator == "blank") {
       firstNumber = firstNumber + "7";
       display.innerText = firstNumber;
    } else if (operator !== "blank") {
        secondNumber = secondNumber + "7";
        return display.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    }
}

function eightButton() {
    if (operator == "blank") {
        firstNumber = firstNumber + "8";
        display.innerText = firstNumber;
     } else if (operator !== "blank") {
         secondNumber = secondNumber + "8";
         return display.innerText = `${firstNumber} ${operator} ${secondNumber}`;
     }
}

seven.addEventListener("click", () => sevenButton());
eight.addEventListener("click", () => eightButton());
add.addEventListener("click", () => addButton());
clear.addEventListener("click", () => clearButton());
equals.addEventListener("click", () => operate());


    