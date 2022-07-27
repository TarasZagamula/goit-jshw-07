import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galeryBox = document.querySelector(`.gallery`);
const newGallery = createGallery(galleryItems);


galeryBox.insertAdjacentHTML(`afterbegin`, newGallery);
galeryBox.addEventListener(`click`, onImgClick);

function createGallery(gryItems) {
    return gryItems.reduce((acc, item) => {
    return acc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`      
}, "")      
};

function onImgClick(evt) {
  evt.preventDefault();
    if (evt.target.classList.contains(`gallery__image`)) {
        const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" 
        width="800"
        height="600">`)
      instance.show();
      window.addEventListener(`keydown`, deletedModalWindow);
    }
};

function deletedModalWindow(evt) {
  let modal = document.querySelector(`.basicLightbox`)
  if (evt.code === `Escape`) {
    modal.remove()
  }
};
// console.log(newGallery)
