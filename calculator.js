let register = "";
let operations = "";
let lastResult = "";

function clickedButton(value) {
  if (isNaN(parseInt(value))) {
    handleOperator(value);
  } else {
    handleNumber(value);
  }
}

function handleNumber(value) {
  console.log("handleNumber:" + value);
  // if user keyed in number after pressing equals button, clear the last result for new calculation
  if (lastResult.toString().length > 0) {
    lastResult = "";
  }

  register = register + value;
  console.log("handleNumber:register:" + register);
  renderDisplay(register);
}

function doCalculations() {
  return Function('"use strict"; return(' + operations + ");")();
}

function renderDisplay(value) {
  document.querySelector(".display").innerHTML = value;
}

function handleOperator(value) {
  console.log("handleOperator:" + value);
  switch (value) {
    case "+":
      addToOperationsQueue(value);
      break;
    case "−":
      addToOperationsQueue(value);
      break;
    case "×":
      addToOperationsQueue(value);
      break;
    case "÷":
      addToOperationsQueue(value);
      break;
    case "=":
      computeResult();
      break;
    case "←":
      backSpace();
      break;
    case "C":
      clearRegister();
      break;
  }
}

function convertSymbolToOperator(symbol) {
  switch (symbol) {
    case "+":
      return "+";
    case "−":
      return "-";
    case "×":
      return "*";
    case "÷":
      return "/";
    default:
      return "";
  }
}

function addToOperationsQueue(symbol) {
  console.log(
    "lastResult: " +
      lastResult +
      ", lastResult.length: " +
      lastResult.toString().length
  );
  if (lastResult.toString().length > 0) {
    operations += lastResult;
    lastResult = "";
    console.log("add last result: " + operations);
  }
  // store the current register to the operations string
  operations += register;
  // clear register
  register = "";
  operator = convertSymbolToOperator(symbol);
  let lastOperationsChar = operations.substr(-1);
  // if the last character of the operations string is an operator
  if (operations.length && isNaN(parseInt(lastOperationsChar))) {
    // override last operator with current operator
    operations = operations.slice(0, -1) + operator;
  } else {
    operations += operator;
  }

  console.log("addToOperationsQueue: " + operations);
}

function computeResult() {
  operations += register;
  register = doCalculations();
  //   clear the operations queue
  operations = "";
  renderDisplay(register);
  //   clear the register for next fresh calculation
  lastResult = register;
  register = "";
}

function clearRegister() {
  //  if user had pressed equals button prior to this, clear everything
  if (lastResult.toString().length > 0) {
    operations = "";
    lastResult = "";
  }
  register = "";
  renderDisplay("0");
}

function backSpace() {
  register = register.slice(0, -1);
  renderDisplay(register);
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      clickedButton(event.target.innerHTML);
    });
}

init();
