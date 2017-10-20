function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function exponent(num1, num2) {
    return Math.pow(num1, num2);
}

function greaterThan(num1, num2) {
    return num1 > num2;
}

function lessThan(num1, num2) {
    return num1 < num2;
}

function equalTo(num1, num2) {
    return num1 === num2;
}

function highest(arr) {
    let highest = arr[0]
    arr.forEach((i) => {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    })
    return highest;
}

function lowest(arr) {
    let lowest = arr[0]
    arr.forEach((i) => {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    })
    return lowest;
}

function isMultiple(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}