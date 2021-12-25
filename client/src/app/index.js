import "../style/main.scss";
import axios from "axios";

const passwordInput = document.getElementById("password");
const getPasswordBtn = document.getElementById("getPassword");

let appValue = 0;
let password = "";

passwordInput.addEventListener("input", (e) => {
  appValue = e.target.value;
});

getPasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendData(appValue);
  if (appValue > 0) {
    setTimeout(() => {
      passwordInput.value = password;
    }, 500);
  }
});

function sendData(value) {
  axios
    .get(`http://localhost:8000/password?num=${value}`)
    .then((response) => (password = response.data));
}
