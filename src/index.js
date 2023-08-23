import { createMarkup } from './create-markup.js';
// import { fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';
// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notiflix.Notify.init({
  width: '400px',
  position: 'left-top',
  fontSize: '18px',
});

import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '38926821-b8c8002029c81a405b7f36852';

const BASE_URL = 'https://pixabay.com/api/';

const refs = {
  formSearch: document.querySelector('#search-form'),
  inputSearch: document.querySelector('#searchQuery'),
  btnLoadMore: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
};

let page = 1;
let galleryItem;

function fetchPhoto(searchQuery, page) {
  // key - твій унікальний ключ доступу до API.
  // q - термін для пошуку. Те, що буде вводити користувач.
  // image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
  // orientation - орієнтація фотографії. Постав значення horizontal.
  // safesearch - фільтр за віком.Постав значення true.

  axios.defaults.params = {
    key: API_KEY,
    q: encodeURIComponent(searchQuery),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  };

  return axios.get(BASE_URL);
}

refs.formSearch.addEventListener('submit', async event => {
  event.preventDefault();
  page = 1;
  const searchStr = refs.inputSearch.value;
  refs.gallery.innerHTML = '';
  refs.btnLoadMore.classList.add('hidden');
  console.log('search', searchStr);
  try {
    const { data } = await fetchPhoto(searchStr, page);
    //console.log('data', data);

    if (data.total !== 0) {
      Notiflix.Notify.success(`Hooray! We found ${data.total} images.`);
      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      refs.btnLoadMore.classList.remove('hidden');

      galleryItem = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      // const { height: cardHeight } = document
      //   .querySelector('.gallery')
      //   .firstElementChild.getBoundingClientRect();

      // window.scrollBy({
      //   top: cardHeight * 2,
      //   behavior: 'smooth',
      // });
    } else {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  } catch (error) {
    console.log(error.message);
    Notiflix.Notify.failure('Fetch error');
  }
});

refs.btnLoadMore.addEventListener('click', async () => {
  page += 1;
  console.log('Clic load more');
  const searchStr = refs.inputSearch.value;
  try {
    const { data } = await fetchPhoto(searchStr, page);

    if (page <= Math.ceil(data.total / 40)) {
      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      galleryItem.refresh();

      // const { height: cardHeight } = document
      //   .querySelector('.gallery')
      //   .firstElementChild.getBoundingClientRect();

      // window.scrollBy({
      //   top: cardHeight * 2,
      //   behavior: 'smooth',
      // });
    } else {
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
      refs.btnLoadMore.classList.add('hidden');
    }
  } catch (error) {
    // hideLoader();
    // showError();
    console.log(error.message);
    Notiflix.Notify.failure('Fetch error');
  }
});
//example from site
// 	var API_KEY = '38926821-b8c8002029c81a405b7f36852';
//   var URL =
//     'https://pixabay.com/api/?key=' +
//     API_KEY +
//     '&q=' +
//     encodeURIComponent('red roses');
//   $.getJSON(URL, function (data) {
//     if (parseInt(data.totalHits) > 0)
//       $.each(data.hits, function (i, hit) {
//         console.log(hit.pageURL);
//       });
//     else console.log('No hits');
//   });
