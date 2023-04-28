import { setCookie, getCookie, deleteCookie, updateCookie } from "./index.js";

const nameInput = document.querySelector("input[name=username]");
const ageInput = document.querySelector("input[name=age]");
const colorInput = document.querySelector("#colorSelect");
const submitBtn = document.querySelector("button");

// console.log(nameInput, ageInput, genderInput, colorInput, submitBtn);

submitBtn.addEventListener("click", function () {
  const genderInput = document.querySelector("input[type=radio]:checked");
  const expDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
  setCookie("name", nameInput.value, expDate);
  setCookie("age", ageInput.value, expDate);
  setCookie("gender", genderInput.value, expDate);
  setCookie("color", colorInput.value, expDate);
  setCookie("count", 0, expDate);
  window.location.replace("http://127.0.0.1:5500/Lab-3/Cookies/welcome.html");
});
