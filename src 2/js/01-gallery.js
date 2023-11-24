import { galleryItems } from './gallery-items.js';

function createGallery () {
    const galleryList = document.querySelector('.gallery');

    const galleryMarkup = galleryItems.map(
        ({original, preview, description}) =>
        `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `
    )
    .join('');

galleryList.innerHTML = galleryMarkup;
};

function handleImageClick(event) {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
        const imageUrl = event.target.dataset.source;
        const instance = basicLightbox.create(`
        <img src="${imageUrl}" alt="${event.target.alt}">`);
        instance.show();
    }
}

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', handleImageClick);

createGallery();

console.log(galleryItems);
