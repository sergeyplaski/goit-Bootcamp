'use strict';

/*
  1. Модифицируйте готовую функцию createPostCard() из задания
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
    чтобы она принимала объект post с данными для заполнения полей
    в карточке.

  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает
    массив DOM-элементов всех постов.

  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

// function that takes an a post object and returns
// a new post node created from that object
// @param: {post}
// @returns: [HTMLElement]
function createPostCard(post) {
    const card = document.createElement('div');
    card.classList.add('post');

    const image = document.createElement('img');
    image.classList.add('post__image');
    image.setAttribute('src', post.img);
    image.setAttribute('alt', 'post image');
    card.append(image);

    const h2 = document.createElement('h2');
    h2.classList.add('post__title');
    h2.textContent = post.title;
    card.append(h2);

    const text = document.createElement('p');
    text.classList.add('post__text');
    text.textContent = post.text;
    card.append(text);

    const link = document.createElement('a');
    link.classList.add('button');
    link.setAttribute('href', post.link);
    link.textContent = 'Read more';
    card.append(link);

    return card;
}

// function that takes an array of post objects and returns
// a document fragment that contains post nodes created from its elements
// @param: {post}[]
// @returns: [DocumentFragment]
function createCards(arrPosts) {
    if (arrPosts.length < 1) return null;
    let frag = document.createDocumentFragment();
    for (let post of arrPosts) {
        frag.append(createPostCard(post));
    }
    return frag;
}

// append all posts in the body
let cards = createCards(posts);
document.body.append(cards);
