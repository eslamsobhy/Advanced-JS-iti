function setCookie(cookieKey, cookieValue, expDate) {
  if (!cookieKey || !cookieValue) {
    throw "ERROR: Can't set the cookie without the key or the value!";
  }
  document.cookie = expDate
    ? `${cookieKey}=${cookieValue}; expires=${expDate}`
    : `${cookieKey}=${cookieValue}`;
}

var expDate = new Date("4-25-2023");
setCookie("name", "Eslam Sobhy", expDate);
setCookie("age", 24, expDate);
