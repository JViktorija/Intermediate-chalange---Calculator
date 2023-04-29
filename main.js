"use strict";
console.log("main.js");

function appendToResult(value) {
  let resultElement = document.getElementById("result");
  if (value === "del") {
    resultElement.value = resultElement.value.slice(0, -1);
  } else {
    resultElement.value += value;
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function reset() {
  clearResult();
}

function calculate() {
  let result = document.getElementById("result").value;
  let answer = eval(result);
  document.getElementById("result").value = answer;
}
