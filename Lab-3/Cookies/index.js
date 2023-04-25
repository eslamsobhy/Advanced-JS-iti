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
  if (!isFound(cookieKey)) throw `ERROR: Cookie (${cookieKey}) is not found!`;
  var cookieData = document.cookie;
  var keys = cookieData.split(";");
  var cookie = keys.filter((key) => key.includes(cookieKey));
  var value = cookie[0].trim().split("=")[1];
  return value;
}

function isFound(cookieKey) {
  var cookieData = document.cookie;
  if (!cookieData.includes(cookieKey)) {
    return false;
  }
  return true;
}

function deleteCookie(cookieKey) {
  if (!cookieKey) throw `ERROR: Please enter the cookie key!`;
  if (!isFound(cookieKey)) throw `ERROR: ${cookieKey} cookie is not found!`;
  let expDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
  document.cookie = `${cookieKey}=blah blah; expires=${expDate}`;
}

var expDate = new Date(2023, 3, 26);
setCookie("youssef", 25);
setCookie("name", "Eslam Sobhy", expDate);
setCookie("age", 24, expDate);

console.log(getCookie("youssef"));

console.log(isFound("age"));

deleteCookie("youssef");
