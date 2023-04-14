const dropDown = document.querySelector("select");

const request = new XMLHttpRequest();
request.open("GET", "https://reqres.in/api/users");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(request.response);
  const users = data.data;
  users.forEach((user) => {
    console.log(user);
    const option = `<option value=${user.id}>${user.first_name} ${user.last_name}</option>`;
    dropDown.insertAdjacentHTML("beforeend", option);
  });
  //   console.log(users);
});
