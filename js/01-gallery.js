import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join("");
galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const largeImageUrl = event.target.parentNode.href;

    const instance = basicLightbox.create(
      `<img src="${largeImageUrl}" alt="Велике зображення">`
    );

    instance.show();
  }
});
