import axios from 'axios';

axios.defaults.headers.common['key'] = '38926821-b8c8002029c81a405b7f36852';

const BASE_URL = `https://api.thecatapi.com/v1/breeds`;

const params = new URLSearchParams({
  _limit: limit,
  _page: page,
});

export function fetchPhoto() {
  return axios.get(BASE_URL);

  //через fetch
  //   return fetch(BASE_URL, {
  //     headers: {
  //       'x-api-key': API_KEY,
  //     },
  //   }).then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //
  return response.json();
  //   });
}

export function fetchCatByBreed(breedId) {
  const SEARCH_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios.get(SEARCH_URL);

  //через fetch
  //   return fetch(SEARCH_URL).then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     return response.json();
  //   });
}

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
