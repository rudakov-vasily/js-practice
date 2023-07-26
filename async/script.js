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

// //вызов AJAX для получения данных о стране
// const getCountryAndBorderCountries = function (countryName) {
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request1.send();
//   request1.addEventListener('load', function () {
//     const [data1] = JSON.parse(this.responseText);
//     console.log(data1);
//     //отображение страны
//     displayCountry(data1);

//     //получаем соседние страны, чначала первую
//     const [firstNEigbour] = data1.borders;
//     if (!firstNEigbour) return;

//     //вызов AJAX для получения данных о соседней стране
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${firstNEigbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       displayCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndBorderCountries('belarus');

// const getCountryAndBorderCountries = function (countryName) {
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request1.send();

// const request = fetch('https://restcountries.com/v3.1/name/russia');

// const getCountryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       displayCountry(data[0]);
//       const firstNeighbour = data[0].borders[0];

//       if (!firstNeighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => displayCountry(data[0], 'neighbour'))
//     .catch((e) => console.log(`somebody catch${e}`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('russia');
// });

// const displayCountryByGPS = function (lat, lng) {
//   fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(`you are in ${data.address.country}`);

//       getCountryData(`${data.address.country}`);
//     });
// };

// displayCountryByGPS(35.756, 139.256);
// displayCountryByGPS(48.857, 2.358);
// displayCountryByGPS(40.708, -74.051);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('this is a magic!...');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('you are a winner!');
//     } else {
//       reject(new Error('you are a looser!...'));
//     }
//   }, 3000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((e) => console.error(e))
//   .finally(() => console.log('END'));

// const imageContainer = document.querySelector('.images');
// console.log(imageContainer);

// const wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// };

// let currentImage;

// const createImageElement = function (imagePath) {
//   return new Promise(function (resolve, reject) {
//     const imgEl = document.createElement('img');
//     imgEl.src = imagePath;

//     imgEl.addEventListener('load', function () {
//       imageContainer.append(imgEl);
//       resolve(imgEl);
//     });

//     imgEl.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };

// createImageElement('img/image1.jpg')
//   .then((imgEl) => {
//     currentImage = imgEl;
//     console.log('1 img load');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('img/image2.jpg');
//   })
//   .then((imgEl) => {
//     currentImage = imgEl;
//     console.log('2 img load');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('img/image3.jpg');
//   })
//   .then((imgEl) => {
//     currentImage = imgEl;
//     console.log('3 img load');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch((e) => console.error(e));

const getCountryData = async function (countryName) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  const data = await response.json();
  console.log(data[0]);
  displayCountry(data[0]);
};

getCountryData('russia');
