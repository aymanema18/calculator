let input = document.querySelector(".input");
let value = [];
let numHolder = "";
let numbers = document.querySelectorAll(".number");
let add = document.querySelector(".add");
let divide = document.querySelector(".divide");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let equals = document.querySelector(".equals");
let result;
let check = [];
let flag = false;

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (!((+input.textContent^2).length > 10)) {

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
            if (value.length === 2 && !(value[2] in ["+", "-", "/", "*"])) {
                check.push(+input.textContent);
                check.push(operator.value);
                console.log(check);
                console.log(value);
                value.push(check[0])
                operate(value[0], value[2]);
                value.push(operator.value);
                check = [];
    
            }
            if (!(value.length > 0)) {
                value.push(+numHolder);
                value.push(operator.value);
                console.log(value);
                numHolder = "";
            }
            if (typeof value[0] !== "number") {
                value = [];
            }
            if (value.length === 1) {
                value.push(operator.value);
            }
            flag = true;
        }
    });
    
});
equals.addEventListener("click", () => {
    value.push(+numHolder);
    console.log(value);
    if (value.length === 3){
        if (typeof value[2] !== "number") {
            value[1] = value[2];
            value.pop();
            console.log(value);
        }
        if (value.length === 3) {
            operate(value[0], value[2]);
        }
        flag = true;
        value = [];
    }
    numHolder = "";
    console.log(value);
});
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (value.length === 2 && flag === true) {
            input.textContent = "";
            flag = false;
        }
        if(input.textContent.length < 11) {
            input.textContent = numHolder + number.value;
            numHolder = input.textContent;
            console.log(input.textContent);
        }
        console.log(value);
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
            result = toSubtract(num1, num2);
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
    value = [];
    value.push(result);
}

