// import { fetchBreeds } from './cat-api.js';
// import { fetchCatByBreed } from './cat-api.js';

import axios from 'axios';

axios.defaults.headers.common['key'] = '38926821-b8c8002029c81a405b7f36852';

const BASE_URL = 'https://pixabay.com/api/';

const refs = {
  searchForm: document.querySelector('#searchForm'),
  inputSearch: document.querySelector('searchQuery'),
  btnSearch: document.querySelector('#btnSearch'),
};

export function fetchPhoto(searchQuery) {
  // key - твій унікальний ключ доступу до API.
  // q - термін для пошуку. Те, що буде вводити користувач.
  // image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
  // orientation - орієнтація фотографії. Постав значення horizontal.
  // safesearch - фільтр за віком.Постав значення true.

  const params = new URLSearchParams({
    image_type: photo,
    orientation: horizontal,
    safesearch: true,
  });

  return axios.get(
    `${BASE_URL}?q=${encodeURIComponent(searchQuery)}&${params}`
  );
}

refs.btnSearch.addEventListener('click', () => {
  const searchStr = refs.inputSearch;
  console.log('search', searchStr);
//   fetchPhoto(searchStr)
//     .then(({ data }) => {
//       console.log('data', data);
//     })
//     .catch(err => {
//       hideLoader();
//       showError();
//       console.log(err.message);
//     });
  //console.log('element', index);
});

// export function fetchCatByBreed(breedId) {
//   const SEARCH_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
//   return axios.get(SEARCH_URL); }

//через fetch
//   return fetch(SEARCH_URL).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });

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
