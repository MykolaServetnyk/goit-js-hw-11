'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import fetchImages from './js/pixabay-api';
import renderPhotoList from './js/render-functions';

const searchForm = document.getElementById('search-form');
const inputField = document.querySelector('.searchInput');
const galleryEl = document.querySelector('.image-gallery');

function clearGallery() {
    galleryEl.innerHTML = '';
}

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userInput = inputField.value.trim();

    if (!userInput) {
        console.warn('Please enter a search query before submitting.');
        return;
    }

    clearGallery();
    const loader = document.createElement('div');
    loader.classList.add('loader');

    fetchImages(userInput)
        .then(images => {
            loader.remove();
            renderPhotoList(images, galleryEl);
        })
        .catch(error => {
            loader.remove();
            console.log('error');
        });
});




