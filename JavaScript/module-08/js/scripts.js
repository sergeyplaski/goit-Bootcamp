'use strict';

/************ gallery items ************/
const galleryItems = [
    { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
];

class Gallery {
    constructor({items, parentNode, defaultActiveItem}) {
        console.log(items);
        /************ fullview ****************/
        const fullviewHTML = `<div class="fullview">
            <img src=${items[0].fullview} alt=${items[0].alt}>
            </div>`;
        parentNode.innerHTML = fullviewHTML;
    }
}




/******** create an instance of Gallery ************/
new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 1
});