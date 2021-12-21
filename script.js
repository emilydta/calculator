const display = document.getElementById("display");
const add = document.getElementById("+");
const subtract = document.getElementById("-");
const multiply = document.getElementById("*");
const divide = document.getElementById("/");
const clear = document.getElementById("c");
const equals = document.getElementById("Enter");
const numberButtons = document.querySelectorAll(".number");


let firstNumber = "";
let secondNumber = "";
let operator = "blank";
let total = "";


function stateAfterOperate() {
    firstNumber = total;
    secondNumber = "";
    operator = "blank";
    return display.innerText = total;
}

function clearButton() {
    firstNumber = "";
    secondNumber = "";
    operator = "blank";
    total = "";
    display.innerText = firstNumber + secondNumber;
}

function operate() {
    if (!secondNumber) {
        return;
    } else if (operator === "+") {
        return addButton();   
    } else if (operator === "-") {
        return subtractButton();
    } else if (operator === "x") {
        return multiplyButton();
    } else if (operator === "/") {
        return divideButton();
    } return;
}

function addButton() {
    if (!firstNumber) {
        return;
    }else if (!secondNumber && operator !== "+") {
        operator = "+";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber) {
        operator = "+";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "+") {
        total = parseInt(firstNumber) + parseInt(secondNumber);
        stateAfterOperate();
    }   
}

function subtractButton() {
    if (!firstNumber) {
        return;
    } else if (!secondNumber && operator !== "-") {
        operator = "-";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber) {
        operator = "-";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "-") {
        total = parseInt(firstNumber) - parseInt(secondNumber);
        stateAfterOperate();
    }   
}

function multiplyButton() {
    if (!firstNumber) {
        return;
    } else if (!secondNumber && operator !== "x") {
        operator = "x";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber) {
        operator = "x";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "x") {
        total = parseInt(firstNumber) * parseInt(secondNumber);
        stateAfterOperate();
    }   
}
function divideButton() {
    if (!firstNumber) {
        return;
    } else if (!secondNumber && operator !== "/") {
        operator = "/";
        return display.innerText = `${firstNumber} ${operator}`; 
    } else if (!secondNumber) {
        operator = "/";
        return display.innerText = `${firstNumber} ${operator}`;
    } else if (operator === "/") {
        total = parseInt(firstNumber) / parseInt(secondNumber);
        stateAfterOperate();
    }   
}


// Button Functionality

numberButtons.forEach(numberButton => { 
    numberButton.addEventListener("click", (e) => {
        if (total && firstNumber && !secondNumber && operator === "blank") {
            clearButton();
            firstNumber = firstNumber + `${e.target.value}`;
            display.innerText = firstNumber;
        } else if (operator == "blank") {
            firstNumber = firstNumber + `${e.target.value}`;
            display.innerText = firstNumber;
        } else if (operator !== "blank") {
            secondNumber = secondNumber + `${e.target.value}`;
            return display.innerText = `${firstNumber} ${operator} ${secondNumber}`;
        };
    });
});

add.addEventListener("click", () => addButton());
subtract.addEventListener("click", () => subtractButton());
multiply.addEventListener("click", () => multiplyButton());
divide.addEventListener("click", () => divideButton());
clear.addEventListener("click", () => clearButton());
equals.addEventListener("click", () => operate());


// Keyboard Functionality

window.addEventListener("keydown", function(e) {
    const numberPress = document.querySelector(`button[value="${e.key}"]`);
    if(!numberPress) return;
    if (total && firstNumber && !secondNumber && operator === "blank") {
        clearButton();
        firstNumber = firstNumber + `${e.key}`;
        display.innerText = firstNumber;
    } else if (operator == "blank") {
       firstNumber = firstNumber + `${e.key}`;
       display.innerText = firstNumber;
    } else if (operator !== "blank") {
        secondNumber = secondNumber + `${e.key}`;
        return display.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    }
});

window.addEventListener("keydown", function(e) {
    if(e.key !== "+") return;
    addButton(); 
});

window.addEventListener("keydown", function(e) {
    if(e.key !== "-") return;
    subtractButton(); 
});

window.addEventListener("keydown", function(e) {
    if(e.key !== "*") return;
    multiplyButton(); 
});

window.addEventListener("keydown", function(e) {
    if(e.key !== "/") return;
    divideButton(); 
});

window.addEventListener("keydown", function(e) {
    if(e.key !== "Enter") return;
    operate(); 
});

window.addEventListener("keydown", function(e) {
    if(e.key !== "c") return;
    clearButton(); 
});


