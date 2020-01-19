let a = +prompt("Введите первую цифру");
let b = +prompt("Введите вторую цифру");
let operation = prompt("Введите знак операции ( +, -, *, / )");


function sum(a, b) { return a + b;}

function difference(a, b) { return a - b;}

function composition(a, b) { return a * b;}

function division(a, b) { return a / b;}

function mathOperation(a, b, operation) {
    switch (operation) {
        case "+": console.log(sum(a, b));
        break;
        case "-": console.log(difference(a, b));
        break;
        case "*": console.log(composition(a, b));
        break;
        case "/": console.log(division(a, b));
    }
}

mathOperation(a, b, operation);