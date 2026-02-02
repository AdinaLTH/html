let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let result = document.querySelector('#result');
let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let multyBtn = document.querySelector('#multy');
let dividBtn = document.querySelector('#divid');

addBtn.onclick = addFunc;
subBtn.onclick = subFunc;
multyBtn.onclick = multyFunc;
dividBtn.onclick = dividFunc;

function addFunc() {
  let a_result = Number(num1.value) + Number(num2.value);
  result.value = a_result;
}

function subFunc() {
  let sb_result = num1.value - num2.value;
  result.value = sb_result;
}

function multyFunc() {
  let mt_result = num1.value * num2.value;
  result.value = mt_result;
}

function dividFunc() {
  let div_result = num1.value / num2.value;
  result.value = div_result;
}