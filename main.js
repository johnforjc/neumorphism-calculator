const tdElements = document.querySelectorAll("td");

let result = 0,
  num1 = 0,
  num2 = 0,
  operation = "",
  temp = "0",
  decimal = true,
  positif = true;

// showing on monitor
function showOnMonitor() {
  monitorNumber.innerHTML = positif ? temp : "-" + temp;
  monitorOperation.innerHTML = operation;
}

// resetAll for C function
function resetAll() {
  (result = 0), (num1 = 0), (num2 = 0), (operation = ""), (temp = "0"), (decimal = true), (positif = true);
}

// computational logic
function calculatorCompute() {
  if (num1 == 0 && num2 == 0) {
    return;
  }
  if (num2 == 0) {
    num2 = parseFloat(temp);
  }
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      if (num2 == 0) {
        // Setting output and showing
        temp = "Error";
        operation = "";
        showOnMonitor();

        // reset all value
        num1 = 0;
        num2 = 0;
        decimal = true;
        positif = true;
        temp = "0";
        return;
      }
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      break;
  }

  // reset all value and show it
  num1 = 0;
  num2 = 0;
  operation = "";
  decimal = true;
  positif = true;
  temp = result;
  showOnMonitor();
  temp = "0";
}

// Set operation
function setOperation(char) {
  if (!positif) temp = "-" + temp;
  if (result) {
    num1 = result;
  } else if (num1 == 0) {
    num1 = parseFloat(temp);
    console.log(temp);
  } else if (num2 == 0) {
    num2 = parseFloat(temp);
    console.log(temp);
  } else if (num1 && num2) {
    calculatorCompute();
  }
  operation = char;
  monitorOperation.innerHTML = operation;
  temp = "0";
  decimal = true;
  positif = true;
}

// add event listener for each table
tdElements.forEach((element) =>
  element.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "C":
        resetAll();
        showOnMonitor();
        break;
      case "+/-":
        positif = !positif;
        if (!positif) temp = monitorNumber.innerHTML;
        showOnMonitor();
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
        if (decimal) {
          temp += e.target.innerHTML;
          decimal = !decimal;
          showOnMonitor();
        }
        break;
      default:
        temp = temp === "0" ? e.target.innerHTML : temp + e.target.innerHTML;
        result = 0;
        showOnMonitor();
        break;
    }
  })
);
