let a = +prompt("Введите первую цифру");
let b = +prompt("Введите вторую цифру");

function sum(a, b)         { return a + b; }

function difference(a, b)  { return a - b; }

function composition(a, b) { return a * b; }

function division(a, b)    { return a / b; }

console.log(`Сумма: ${sum(a, b)}`);
console.log(`Разность: ${difference(a, b)}`);
console.log(`Умножение: ${composition(a, b)}`);
console.log(`Деление: ${division(a, b)}`);