const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");

function generateColor() {
  const randomColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

  colorBox.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor.toUpperCase();
}

function copyColor() {
  navigator.clipboard.writeText(colorCode.textContent);
  alert("Color code copied!");
}

generateColor();