const userContainer = document.querySelector("article");
const inputField = document.querySelector("input");

function save() {
  const id = inputField.value;
  inputField.value = "";
  //   checking if the user didn't enter a user is
  if (!id) {
    throw "ERROR: Please enter the user id!";
  }
  //   checking if the user a entered a non-numerical value
  else if (!isFinite(id)) {
    throw "ERROR: The user ID must be a number!";
  }
  fetchData(id);
}

function fetchData(id) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://reqres.in/api/users/${id}`);
  request.send();

  request.addEventListener("load", function () {
    //   if the user is not found!
    if (this.status === 404) {
      throw "ERROR: The user is not found!";
    }
    const { data } = JSON.parse(request.response);
    userContainer.innerHTML = `<img src=${data.avatar} alt="${data.first_name} image" />
                                <div class="user-name">${data.first_name} ${data.last_name}</div>`;

    userContainer.style.opacity = 1;
    // console.log(data);
  });
}
