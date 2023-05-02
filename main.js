"use strict";

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

// BUTTON ==============================================

const toggleInput = () => {
  const inputElem = document.getElementById('toggle-input');
  const btnBoxElem = document.getElementById('toggle-btn');
  const currentPos = btnBoxElem.getAttribute('data-position');

  switch (currentPos) {
    case 'right':
      btnBoxElem.style.justifyContent = 'flex-start';
      btnBoxElem.setAttribute('data-position', 'left');
      break;
    case 'left':
      btnBoxElem.style.justifyContent = 'center';
      btnBoxElem.setAttribute('data-position', 'center');
      break;
    case 'center':
      btnBoxElem.style.justifyContent = 'flex-end';
      btnBoxElem.setAttribute('data-position', 'right');
      break;
    default:
      break;
  }
};

document.getElementById('toggle-btn').addEventListener('click', toggleInput);