let input = document.querySelector(".input");
let value = [];
let numbers = document.querySelectorAll(".number");
let add = document.querySelector(".add");
let divide = document.querySelector(".divide");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let equals = document.querySelector(".equals");
let result;
let check;

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (!(value.length > 0)) {
            value.push(+input.textContent);
            value.push(operator.value);
            console.log(value);
        }
        if (typeof value[0] !== "number") {
            value = [];
        }
        if (value.length === 3){
            if (value[2] in ["+", "-", "/", "*"]) {
                value[1] = value[2];
                value[2].pop();
                console.log(value);
            }
            if (value.length === 3) {
                operate(value[0], value[2]);
            }
        }
    });
    
});
equals.addEventListener("click", () => {
    value.push(+input.textContent);
    if (value.length === 3){
        if (value[2] in ["+", "-", "/", "*"]) {
            value[1] = value[2];
            value[2].pop();
            console.log(value);
        }
        if (value.length === 3) {
            operate(value[0], value[2]);
        }
    }
});
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(input.textContent.length < 11) {
            input.textContent += number.value;
            console.log(input.textContent);
        }
    })
})





function toAdd(num1, num2) {
    return num1 + num2;
}
function toSubtract(num1, num2) {
    return num1 - num2;
}
function toMultiply(num1,num2) {
    return num1 * num2;
}
function toDivide(num1, num2) {
    return num1 / num2;
}
function operate(num1, num2) {
    switch (value[1]){
        case "+":
            result = toAdd(num1, num2);
            input.textContent = result;
            break;
        case "-":
            result = tosSubtract(num1, num2);
            input.textContent = result;
            break;
        case "*": 
            result = toMultiply(num1, num2);
            input.textContent = result;
            break;
        case "/": 
            result = toDivide(num1, num2);
            input.textContent = result;
            break;
    }
}

