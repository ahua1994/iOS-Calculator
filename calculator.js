let reset = 0;
let value = 0;
let equations = ["5", "x", "5", "x", "5", "="];
let result = document.getElementById("result");
let equation = document.getElementById("equation");
equation.innerHTML = equations.join(" ");
value = 125;
result.innerHTML = String(value).length < 12 ? value : "Error";

function displayResult() {}

function pushToEquations() {}

function allClear() {
    result.innerHTML = 0;
    equation.innerHTML = "";
}
