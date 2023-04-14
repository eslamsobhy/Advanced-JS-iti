const dropDown = document.querySelector("select");
const usersContainer = document.querySelector("article");

const request = new XMLHttpRequest();
request.open("GET", "https://reqres.in/api/users");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(request.response);
  const users = data.data;
  users.forEach((user) => {
    // console.log(user);
    const option = `<option value=${user.id}>${user.first_name} ${user.last_name}</option>`;
    dropDown.insertAdjacentHTML("beforeend", option);
  });
  //   console.log(users);

  //   displaying the selected user
  dropDown.addEventListener("change", function () {
    if (this.value != -1) {
      var user = users.find((user) => user.id == this.value);
      usersContainer.innerHTML = `<img src=${user.avatar} alt="${user.first_name} image" />
                                  <div class="user-name">${user.first_name} ${user.last_name}</div>`;

      usersContainer.style.opacity = 1;
    } else {
      usersContainer.style.opacity = 0;
    }
  });
});
