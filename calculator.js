let equation = document.querySelector(".equation");
let result = document.querySelector(".result");
let buttons = document.querySelector(".buttons");

let operands = ["+", "-", "x", "÷", "/", "*"];
let currentEquation = [];
let current = [];

buttons.addEventListener("click", (e) => {
    let btnType = e.target.classList;

    if (btnType.contains("num") && current.length < 7) {
        if (current.length == 1 && current[0] == 0) current = [];
        current.push(e.target.textContent);
    } else if (btnType.contains("oper")) {
        if (currentEquation.length == 0 && current.length != 0) {
            currentEquation[0] = current.join("");
        } else if (currentEquation.length == 2) {
            if (operands.includes(currentEquation[1])) {
                if (current.length == 0) {
                    currentEquation.pop();
                } else {
                    equation.textContent = eval(
                        currentEquation.join(" ") + current.join("")
                    );
                    trunc();
                    currentEquation[0] = equation.textContent;
                }
            }
        }
        getOperand(e);
        equation.textContent = currentEquation
            .join(" ")
            .replace("/", "÷")
            .replace("*", "x");
        current = [];
    } else if (btnType.contains("decimal") && !current.includes(".")) {
        if (current.length != 0) current.push(".");
    } else if (btnType.contains("clear")) {
        equation.textContent = "";
        result.textContent = "";
        currentEquation = [];
        current = [];
    } else if (btnType.contains("sign") && !current[0] == 0) {
        current[0] = parseInt(current[0]) * -1;
    } else if (btnType.contains("equals")) {
        equation.textContent = eval(
            currentEquation.join(" ") + current.join("")
        );
        trunc();
        currentEquation[0] = equation.textContent;
        current = [];
    }
    result.textContent = current.length == 0 ? "0" : current.join("");
});

function trunc() {
    equation.textContent =
        equation.textContent.length > 14
            ? equation.textContent.slice(0, 14)
            : equation.textContent;
}

function getOperand(e) {
    currentEquation[1] =
        e.target.textContent == "÷"
            ? "/"
            : e.target.textContent == "x"
            ? "*"
            : e.target.textContent;
}
