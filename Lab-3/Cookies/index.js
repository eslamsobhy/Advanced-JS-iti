function setCookie(cookieKey, cookieValue, expDate) {
  if (!cookieKey || !cookieValue) {
    throw "ERROR: Can't set the cookie without the key or the value!";
  }
  document.cookie = expDate
    ? `${cookieKey}=${cookieValue}; expires=${expDate}`
    : `${cookieKey}=${cookieValue}`;
}

function getCookie(cookieKey) {
  if (!cookieKey) throw "ERROR: Please enter the cookie key as a parameter!";
  var cookieData = document.cookie;
  var keys = cookieData.split(";");
  var cookie = keys.filter((key) => key.includes(cookieKey));
  if (!cookie.length) throw `ERROR: Cookie (${cookieKey}) is not found!`;
  var value = cookie[0].trim().split("=")[1];
  return value;
}

var expDate = new Date(2023, 3, 26);
setCookie("youssef", 25);
setCookie("name", "Eslam Sobhy", expDate);
setCookie("age", 24, expDate);

console.log(getCookie("youssef"));
