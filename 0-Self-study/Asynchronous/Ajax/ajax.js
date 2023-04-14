"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

function getCountryData(countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.response);
    //   console.log(data.languages[Object.keys(data.languages)[0]]);
    const lang = Object.entries(data.languages)[0][1];
    const currency = Object.keys(data.currencies)[0];
    // console.log(data);

    const html = `
          <article class="country">
            <img class="country__img" src=${data.flags.png} alt=${
      data.flags.alt
    } />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${lang}</p>
              <p class="country__row"><span>💰</span>${currency}</p>
            </div>
          </article>
      `;

    countriesContainer.insertAdjacentHTML("beforeend", html);

    countriesContainer.style.opacity = 1;
  });
}

getCountryData("egypt");
getCountryData("brazil");
getCountryData("japan");
getCountryData("spain");
getCountryData("arg");
getCountryData("south korea");

// console.log(request);
