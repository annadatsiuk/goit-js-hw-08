import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const listItemsMarkup = createListItemsMarkup(galleryItems);
list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
    return items
        .map(
            (item) =>
                `
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>`
        )
        .join("");
}
new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});
