const display = document.querySelector('#current-operand');

let currentOperand = '0';
let previousOperand = null;
let operator = null;
let waitingForOperand = false;

function updateDisplay() {
  display.textContent = currentOperand;
}

function appendNumber(value) {
  if (waitingForOperand) {
    currentOperand = value === '.' ? '0.' : value;
    waitingForOperand = false;
  } else if (value === '.' && currentOperand.includes('.')) {
    return;
  } else {
    currentOperand = currentOperand === '0' && value !== '.' ? value : currentOperand + value;
  }
  updateDisplay();
}

function calculate(left, right, selectedOperator) {
  if (selectedOperator === '+') return left + right;
  if (selectedOperator === '-') return left - right;
  if (selectedOperator === '×') return left * right;
  if (selectedOperator === '÷') return right === 0 ? 'Error' : left / right;
  return right;
}

function chooseOperator(nextOperator) {
  const inputValue = Number(currentOperand);
  if (Number.isNaN(inputValue)) return;

  if (operator && !waitingForOperand) {
    const result = calculate(previousOperand, inputValue, operator);
    currentOperand = String(result);
    previousOperand = result === 'Error' ? null : Number(result);
    updateDisplay();
  } else {
    previousOperand = inputValue;
  }

  operator = nextOperator;
  waitingForOperand = true;
}

function compute() {
  if (operator === null || waitingForOperand) return;
  const result = calculate(previousOperand, Number(currentOperand), operator);
  currentOperand = String(result);
  previousOperand = null;
  operator = null;
  waitingForOperand = true;
  updateDisplay();
}

function clearCalculator() {
  currentOperand = '0';
  previousOperand = null;
  operator = null;
  waitingForOperand = false;
  updateDisplay();
}

function deleteDigit() {
  if (waitingForOperand || currentOperand === 'Error') return clearCalculator();
  currentOperand = currentOperand.length > 1 ? currentOperand.slice(0, -1) : '0';
  updateDisplay();
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.number !== undefined) appendNumber(button.dataset.number);
    if (button.dataset.operator) chooseOperator(button.dataset.operator);
    if (button.dataset.action === 'equals') compute();
    if (button.dataset.action === 'clear') clearCalculator();
    if (button.dataset.action === 'delete') deleteDigit();
  });
});
