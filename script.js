let input = document.querySelector(".input");
let value = [];
let numHolder = "";
let operaHolder = "";
let numbers = document.querySelectorAll(".number");
let add = document.querySelector(".add");
let divide = document.querySelector(".divide");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let equals = document.querySelector(".equals");
let result;
let check = [];
let flag = false;
let ans;
let dotArray = [];
let index;

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (ans === +input.textContent) {
            value.push(ans);
        } else {
            value.push(+numHolder);
        }
        if (value.length === 3 && value[0] === 0 && value[1] === "-" && typeof value[2] === "number") {
            value[0] = +(value[1] + value[2]);
            value.pop();
            value.pop();
            
        }
        operaHolder = operator.value;
        value.push(operaHolder);

        if (!((+input.textContent^2).length > 10)) {

            if (value.length === 3){
                if (value[2] in ["+", "-", "/", "*"] && value[1] in ["+", "-", "/", "*"]) {
                    value[1] = value[2];
                    value[2].pop();
                    console.log(value);
                }
                if (value.length === 3) {
                    operate(value[0], value[2], value[1]);
                }
            }
            if (value.length === 4 && ["+", "-", "/", "*"].includes(operaHolder)) {
                check.push(+input.textContent);
                check.push(operaHolder);
                console.log(check);
                console.log(value);
                value.push(check[0])
                operate(value[0], value[2], value[1]);
                value.push(operaHolder);
                check = [];
    
            }
            if (!(value.length > 0)) {
                value.push(+numHolder);
                value.push(operaHolder);
                console.log(value);

                numHolder = "";
            }
            if (typeof value[0] !== "number") {
                value = [];
            }
            if (value.length === 1) {
                value.push(operaHolder);
            }
            flag = true;
            numHolder = "";
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
            operate(value[0], value[2], value[1]);
        }
        flag = true;
        value = [];
    }
    numHolder = "";
    console.log(value);
    ans = +input.textContent;
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
            if (numHolder.toString().split("").includes(".")) {
                dotArray = numHolder.toString().split("");
                index = numHolder.toString().split("").indexOf(".");
                if (dotArray[index + 2]) {
                    numHolder = dotArray.slice(0, index + 2).join("");
                } else {
                    numHolder = dotArray.join("");
                }
            }
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
function operate(num1, num2, operator) {
    switch (operator){
        case "+":
            result = toAdd(num1, num2);
            if (result.toString().split("").length >= 10) {
                if (result === 1000000000) {
                    result = "1e+9";
                } else if (result <= -999999) {
                    result = NaN;
                } else if (result > 1000000000) {
                    result = Infinity;
                }
            }
            input.textContent = result;
            break;
        case "-":
            result = toSubtract(num1, num2);
            if (result === 1000000000) {
                result = 1e+9;
            } else if (result <= -999999) {
                result = NaN;
            } else if (result > 1000000000) {
                result = Infinity;
            }
            input.textContent = result;
            break;
        case "*": 
            result = toMultiply(num1, num2);
            if (result === 1000000000) {
                result = 1e+9;
            } else if (result <= -999999) {
                result = NaN;
            } else if (result > 1000000000) {
                result = Infinity;
            }
            input.textContent = result;
            break;
        case "/": 
            result = toDivide(num1, num2);
            if (result === 1000000000) {
                result = 1e+9;
            } else if (result <= -999999) {
                result = NaN;
            } else if (result > 1000000000) {
                result = Infinity;
            }
            input.textContent = result;
            break;
    }
    if (result.toString().split("").includes(".")) {
        dotArray = result.toString().split("");
        index = result.toString().split("").indexOf(".");
        if (dotArray[index + 2]) {
            result = dotArray.slice(0, index + 2).join("");
        } else {
            result = dotArray.join("");
        }
        input.textContent = result;
    }
    value = [];
    value.push(result);
}

