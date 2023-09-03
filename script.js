let currentExpression = "";

// ... (existing functions) ...

function appendValue(value) {
  currentExpression += value;
  document.getElementById("result").value = currentExpression;
}

function clearResult() {
  currentExpression = "";
  document.getElementById("equation").textContent = ""; // Clear the equation display
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    const result = eval(currentExpression);
    document.getElementById("equation").textContent = currentExpression; // Display the equation
    document.getElementById("result").value = result;
    currentExpression = result.toString();
  } catch (error) {
    document.getElementById("equation").textContent = currentExpression; // Display the equation
    document.getElementById("result").value = "Error";
    currentExpression = "";
  }
}
