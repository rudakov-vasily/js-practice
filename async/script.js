'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////

const getCountryData = function (countryName) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const currencies = data.currencies;
    const currencyName = Object.values(currencies)[0].name;
    const currencySymbol = Object.values(currencies)[0].symbol;

    const languages = data.languages;
    const firstLanguage = Object.values(languages)[0];

    const html = `        
  <article class="country">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👨‍👩‍👧‍👦</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
    <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('canada');
getCountryData('russia');
getCountryData('germany');
