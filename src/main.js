

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

const searchFormEl = document.querySelector(".js-search-form");
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();
  
  const loader = document.querySelector(".loader");
  loader.classList.remove('is-hidden');
  
  const searchedValue = searchFormEl.elements.user_query.value;
  if (!searchedValue.trim()) {
    loader.classList.add('is-hidden');
    return;  
  }

  fetchPhotos(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: 'topRight',
        });
        galleryEl.innerHTML = ''; 
        return;
      }
      
      const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
      galleryEl.innerHTML = galleryCardsTemplate;

      new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      searchFormEl.reset();
    })
    .catch(err => {
      iziToast.error({
        message: "Something went wrong. Please try again later.",
        position: 'topRight',
      });
      console.error(err);
      galleryEl.innerHTML = ''; 
    })
    .finally(() => {
      loader.classList.add('is-hidden'); 
    });
};

searchFormEl.addEventListener("submit", onSearchFormSubmit);