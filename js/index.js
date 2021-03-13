const ratesDetails = document.querySelectorAll('.rates__details');
const ratesDetailsSVG = document.querySelectorAll('.rates__details svg');
const detailsText = document.querySelectorAll('.rates-details__text');
const ratesItem = document.querySelectorAll('.rates__item');

ratesDetails.forEach((div, index) => {
  div.addEventListener('click', function () {
    detailsText[index].classList.toggle('is-active');
    ratesItem[index].classList.toggle('is-active');
    ratesDetailsSVG[index].classList.toggle('is-active');
  });
});

const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
burgerMenu.addEventListener('click', function () {
  nav.classList.toggle('is-active');
  burgerMenu.classList.toggle('is-active');
});
