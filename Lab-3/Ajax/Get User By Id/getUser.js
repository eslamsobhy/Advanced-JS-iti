const userContainer = document.querySelector("article");
const inputField = document.querySelector("input");

function save() {
  const id = inputField.value;
  fetchData(id);
}

function fetchData(id) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://reqres.in/api/users/${id}`);
  request.send();

  request.addEventListener("load", function () {
    const { data } = JSON.parse(request.response);
    userContainer.innerHTML = `<img src=${data.avatar} alt="${data.first_name} image" />
                                <div class="user-name">${data.first_name} ${data.last_name}</div>`;

    userContainer.style.opacity = 1;
    console.log(data);
  });
}
