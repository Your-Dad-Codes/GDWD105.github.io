console.log ('HI')

let answer = document.getElementById('answer');

function twoPlusTwo() {
    answer.innerHTML = 2 + 2;
}
function multiply(n1, n2) {
    answer.innerHTML = n1 * n2;
}

function divide(n1, n2) {
    answer.innerHTML = n1 / n2;
}

function multiplyTwoNumbers() {
    let firstNumber = document.getElementById('FirstNumber');
    let secondNumber = document.getElementById('SecondNumber');
    let solve = firstNumber.value * secondNumber.value;
    answer.innerHTML = solve;
}