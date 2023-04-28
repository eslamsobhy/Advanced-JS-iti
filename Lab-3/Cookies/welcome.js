import { setCookie, getCookie, deleteCookie, updateCookie } from "./index.js";
let count = parseInt(getCookie("count"));

let nameSpan = document.querySelector("p span:first-child");
let countSpan = document.querySelector("p span:last-child");

// console.log(nameSpan, countSpan);

window.addEventListener("load", function () {
  setCookie("count", count + 1, new Date(), Date.now() + 1000 * 60 * 60 * 24);
  document
    .querySelector("img")
    .setAttribute("src", `./images/${getCookie("gender")}.png`);
  nameSpan.style.color = getCookie("color");
  countSpan.style.color = getCookie("color");

  nameSpan.innerHTML = getCookie("name");
  countSpan.innerHTML = getCookie("count");
});
