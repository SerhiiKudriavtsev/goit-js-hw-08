// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

onsole.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const items = galleryItems.map(({ preview, original, description }) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="#${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `}).join('');
  
gallery.insertAdjacentHTML("afterbegin", items);
  
gallery.addEventListener('click', onImgClick);

const instance = basicLightbox.create(`<img src="">`,
  {
    onShow: instance => {
      window.addEventListener('keydown', keyDown);
    },
    onClose: instance => {
      window.addEventListener('keydown', keyDown);
    }
  });

function onImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}

function keyDown(event) {
  if (event.key === 'Escape') { 
    instance.close();
    return;
  }
}
