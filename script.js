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


let firstNumber = "";
let secondNumber = "";
let operator = "blank";
let total = "";


function operate() {
    if (!secondNumber) {
        return;
    } else if (operator === "+") {
        total = parseInt(firstNumber) + parseInt(secondNumber);
        operator = "blank";
        firstNumber = total;
        secondNumber = "";
        return display.innerText = total;
    } else if (operator === "-") {
        total = parseInt(firstNumber) - parseInt(secondNumber);
        operator = "blank";
        firstNumber = total;
        secondNumber = "";
        return display.innerText = total;
    } else if (operator === "x") {
        total = parseInt(firstNumber) * parseInt(secondNumber);
        operator = "blank";
        firstNumber = total;
        secondNumber = "";
        return display.innerText = total;
    } else if (operator === "/") {
        total = parseInt(firstNumber) / parseInt(secondNumber);
        operator = "blank";
        firstNumber = total;
        secondNumber = "";
        return display.innerText = total;
    } return;
}


function addButton() {
    if (!secondNumber && operator === "-") {
        operator = "+";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber && operator === "x") {
        operator = "+";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber && operator === "/") {
        operator = "+";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber) {
        operator = "+";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "+") {
        total = parseInt(firstNumber) + parseInt(secondNumber);
        firstNumber = total;
        secondNumber = ""
        operator = "blank";
        return display.innerText = total;
    }   
}

function subtractButton() {
    if (!secondNumber && operator === "+") {
        operator = "-";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber && operator === "x") {
        operator = "-";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber && operator === "/") {
        operator = "-";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber) {
        operator = "-";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "-") {
        total = parseInt(firstNumber) - parseInt(secondNumber);
        firstNumber = total;
        secondNumber = ""
        operator = "blank";
        return display.innerText = total;
    }   
}

function multiplyButton() {
    if (!secondNumber && operator === "-") {
        operator = "x";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber && operator === "+") {
        operator = "x";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber && operator === "/") {
        operator = "x";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber) {
        operator = "x";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "x") {
        total = parseInt(firstNumber) * parseInt(secondNumber);
        firstNumber = total;
        secondNumber = ""
        operator = "blank";
        return display.innerText = total;
    }   
}
function divideButton() {
    if (!secondNumber && operator === "-") {
        operator = "/";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber && operator === "x") {
        operator = "/";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber && operator === "+") {
        operator = "/";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (!secondNumber) {
        operator = "/";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "/") {
        total = parseInt(firstNumber) / parseInt(secondNumber);
        firstNumber = total;
        secondNumber = ""
        operator = "blank";
        return display.innerText = total;
    }   
}

function clearButton() {
    firstNumber = "";
    secondNumber = "";
    operator = "blank";
    total = "";
    display.innerText = firstNumber + secondNumber;
}

function sevenButton() {
    if (total != false && firstNumber !== false && secondNumber !== true && operator === "blank") {
        clearButton();
        firstNumber = firstNumber + "7";
        display.innerText = firstNumber;
    } else if (operator == "blank") {
       firstNumber = firstNumber + "7";
       display.innerText = firstNumber;
    } else if (operator !== "blank") {
        secondNumber = secondNumber + "7";
        return display.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    }
}

function eightButton() {
    if (total != false && firstNumber !== false && secondNumber !== true && operator === "blank") {
        clearButton();
        firstNumber = firstNumber + "8";
        display.innerText = firstNumber;
    } else if (operator == "blank") {
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
subtract.addEventListener("click", () => subtractButton());
multiply.addEventListener("click", () => multiplyButton());
divide.addEventListener("click", () => divideButton());
clear.addEventListener("click", () => clearButton());
equals.addEventListener("click", () => operate());


    