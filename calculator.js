// let equations = [];

let result = document.getElementById("result");
// let equation = document.getElementById("equation");
// let numbers = document.getElementsByClassName("num");
// let equals = document.querySelector(".equals");
// let clear = document.querySelector(".clear");

// for (let number of numbers) {
//     number.addEventListener("click", function () {
//         equations.push(number.textContent);
//         console.log(number.textContent);
//         equation.innerHTML = equations.join(" ");
//     });
// }

// clear.addEventListener("click", allClear);
// equals.addEventListener("click", calculate);

// function calculate() {
//     equation.textContent = equations.join(" ") + " = ";
//     result.innerHTML = eval(equations.join(""));
//     equations = [];
// }

// function allClear() {
//     result.innerHTML = 0;
//     value = 0;
//     equation.innerHTML = "";
//     equations = [];
// }
let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    console.log(e.target);
});
