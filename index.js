"use strict";

const factorialInput = document.querySelector(".form-control");
const result = document.querySelector("#result");
const isNumber = /^-?\d+$/;
const alert = document.querySelector(".alert");
alert.style.display = "none";

const getFactorial = (factorial) => {
    const baseCase = factorial === 0 || factorial === 1;
    return baseCase ? 1 : factorial * getFactorial(factorial - 1);
};

const init = () => {
    const initValue = (factorialInput.value = 5);
    result.textContent = getFactorial(initValue);
};

init();

factorialInput.addEventListener("input", () => {
    const factorial = factorialInput.value;
    alert.style.display = isNumber.test(factorial) ? "none" : "block";
    console.clear();
    result.textContent = getFactorial(factorial);
});
