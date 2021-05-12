const tdElements = document.querySelectorAll("td");

console.log(tdElements);

let result = 0,
  num1 = 0,
  num2 = 0,
  operation = "+";

function calculatorCompute() {
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num2 - num1;
      break;
    case "/":
      result = num2 / num1;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      break;
  }
  num1 = 0;
  num2 = 0;
  operation = "+";
  monitor.innerHTML = result;
}

function setOperation(char) {
  if (num1 == 0) {
    if (result) {
      num2 = result;
      operation = char;
    } else if (num2) {
      operation = char;
    }
  } else {
    if (num2) {
      calculatorCompute();
      num2 = result;
      operation = char;
      num1 = 0;
    } else {
      num2 = num1;
      operation = char;
      num1 = 0;
    }
  }
  result = 0;
}

tdElements.forEach((element) =>
  element.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "C":
        result = 0;
        num1 = 0;
        num2 = 0;
        operation = "+";
        monitor.innerHTML = num1;
        break;
      case "+/-":
        num1 = num1 * -1;
        monitor.innerHTML = num1;
        break;
      case "+":
        setOperation("+");
        break;
      case "-":
        setOperation("-");
        break;
      case "/":
        setOperation("/");
        break;
      case "*":
        setOperation("*");
        break;
      case "=":
        calculatorCompute();
        break;
      case ".":
        decimal = true;
        break;
      default:
        num1 = num1 * 10 + parseInt(e.target.innerHTML);

        monitor.innerHTML = num1;
        result = 0;
        break;
    }
  })
);
