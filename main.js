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
  const body = document.getElementsByTagName('body')[0];

  switch (currentPos) {
    case 'right':
      btnBoxElem.style.justifyContent = 'flex-start';
      btnBoxElem.setAttribute('data-position', 'left');
      body.setAttribute('class', 'theme-1')
      break;
    case 'left':
      btnBoxElem.style.justifyContent = 'center';
      btnBoxElem.setAttribute('data-position', 'center');
      body.setAttribute('class', 'theme-2')
      break;
    case 'center':
      btnBoxElem.style.justifyContent = 'flex-end';
      btnBoxElem.setAttribute('data-position', 'right');
      body.setAttribute('class', 'theme-3')
      break;
    default:
      break;
  }
};

document.getElementById('toggle-btn').addEventListener('click', toggleInput);