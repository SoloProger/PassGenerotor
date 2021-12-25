import "../style/main.scss";

const passwordInput = document.getElementById("password");
const getPasswordBtn = document.getElementById("getPassword");

getPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    passwordInput.value = "Hello";
})