const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const message = document.getElementById("message");

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  const allChars = upper + lower + numbers + symbols;

  let password = "";

  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  const length = parseInt(lengthSlider.value);

  for(let i = password.length; i < length; i++){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  passwordField.value = password;

  message.textContent = "Strong password generated";
}

function copyPassword(){

  if(passwordField.value === "") return;

  navigator.clipboard.writeText(passwordField.value);

  message.textContent = "Password copied to clipboard";
}

generatePassword();