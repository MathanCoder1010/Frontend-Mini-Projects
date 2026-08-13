const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);

    display.value = result;

    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;

    historyList.prepend(li);

  } catch {
    display.value = "Error";
  }
}