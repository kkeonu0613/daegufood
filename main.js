const priceSort = document.querySelector('.container__price');
const menuSort = document.querySelector('.container__menu');
const placeSort = document.querySelector('.container__place');
const randomSort = document.querySelector('.container__random');

const price = document.querySelector('#price');
const menu = document.querySelector('#menu');
const place = document.querySelector('#place');
const random = document.querySelector('#random');

price.addEventListener('click', function () {
    priceSort.classList.add('active');
    menuSort.classList.remove('active');
    placeSort.classList.remove('active');
    randomSort.classList.remove('active');
    hideMap();
});

menu.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.add('active');
    placeSort.classList.remove('active');
    randomSort.classList.remove('active');
    hideMap();
});

place.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.remove('active');
    placeSort.classList.add('active');
    randomSort.classList.remove('active');
    hideMap();
});

random.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.remove('active');
    placeSort.classList.remove('active');
    randomSort.classList.add('active');
    showMap();
});

function hideMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'none';
}

function showMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'block';
}

window.addEventListener('DOMContentLoaded', function () {
    hideMap();
});
