'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////

const displayCountry = function (data, className = '') {
  const currencies = data.currencies;
  const currencyName = Object.values(currencies)[0].name;
  const currencySymbol = Object.values(currencies)[0].symbol;

  const languages = data.languages;
  const firstLanguage = Object.values(languages)[0];

  const html = `        
  <article class="country ${className}">
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
};

//вызов AJAX для получения данных о стране
const getCountryAndBorderCountries = function (countryName) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request1.send();
  request1.addEventListener('load', function () {
    const [data1] = JSON.parse(this.responseText);
    console.log(data1);
    //отображение страны
    displayCountry(data1);

    //получаем соседние страны, чначала первую
    const [firstNEigbour] = data1.borders;
    if (!firstNEigbour) return;

    //вызов AJAX для получения данных о соседней стране
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${firstNEigbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      displayCountry(data2, 'neighbour');
    });
  });
};

getCountryAndBorderCountries('belarus');
