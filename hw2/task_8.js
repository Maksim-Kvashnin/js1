let val = +prompt("Введите цифру");
let pow = +prompt("Введите цифру степени");
let result = val;

function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else if (pow == 1) {
        return val;
    } else if (pow < 0) {
        return result /= power(val, pow * (-1) + 1);
    } else {
        return result *= power(val, pow - 1);
    }
}

console.log(power(val, pow));