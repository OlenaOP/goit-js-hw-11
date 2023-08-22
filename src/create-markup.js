// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.

export function createMarkup(array) {
  return array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<a href="${largeImageURL}" class="gallery-link">
    <div class="gallery-item" >
  <img src="${webformatURL}" alt="${tags}" class="gallery-image" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes </b><br>${likes}
    </p>
    <p class="info-item">
      <b>Views </b><br>${views}
    </p>
    <p class="info-item">
      <b>Comments </b><br>${comments}
    </p>
    <p class="info-item">
      <b>Downloads </b><br>${downloads}
    </p>
  </div>
</div>
</a>`;
      }
    )
    .join('');
}
