import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onLinkClick);

function createGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
    alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

console.log(galleryItems);

function onLinkClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const fullSizeItemLink = e.target.dataset.source;

  const instance = basicLightbox.create(` <img src="${fullSizeItemLink}">`);

  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();

      document.removeEventListener("keydown", e);
    }
  });
}