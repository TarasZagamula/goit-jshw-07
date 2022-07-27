import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryBox = document.querySelector(`.gallery`);
const newGallery = createGallery(galleryItems);


galeryBox.insertAdjacentHTML(`afterbegin`, newGallery);

function createGallery(gryItems) {
    return gryItems.reduce((acc, item) => {
        return acc +
`<a class="gallery__item" href="${item.original}">
  <img
  class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
</a>`      
}, "")      
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,

});
