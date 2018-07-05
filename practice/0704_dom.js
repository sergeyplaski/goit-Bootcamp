'use strict';

// old
/*
console.log(document.getElementsByClassName('text'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementById('title'));
*/

// new
/*
let title = document.querySelector('#title'); // first element having class 'item'
let li = document.querySelectorAll('.item');  // all elements having class 'item'
*/

// classList

/*
const text = document.querySelector('.text');
console.log(text);
*/

// if the selected element has more than one class:
/*
console.log(text.classList); // returns pseudo-array of all classes applied to the selected element
console.log(text.classList.contains('par')); // not includes() because ths is a pseudo-array

text.classList.add('big');
console.log(text.classList);
console.log(text.classList.contains('big'));
title.classList.add('small');
console.log(title.classList);
text.classList.remove('big');
console.log(title.classList.contains('big'));
text.classList.toggle('big');
console.log(title.classList.contains('big'));
*/

// attr

// const a = document.querySelector('a');
// console.log(a);
// console.log(a.hasAttribute('href'));
// console.log(a.getAttribute('href'));
// a.setAttribute('title', 'super link');
// a.setAttribute('id', 'link-one');
// console.log(a);
// console.log(a.attributes);
// a.removeAttribute('title');
// console.log(a.attributes);
// console.log(a.href);
// console.log(a.title);
// console.log(a.title = 'test');

// add element


/*
const title = document.createElement('title');
title.textContent = 'I am created from JS';
let container = document.querySelector('head');
container.appendChild(title);

const h1 = document.createElement('h1'); // creates element <h1>
h1.textContent = 'I am created from JS';  // contents of <h1>
h1.classList.add('red'); // apples class='red' to <h1>
container = document.querySelector('div'); // select element <div>
container.appendChild(h1); // inserts <h1> as the last element inside container
// console.log(h1);
// document.querySelector('div').innerHTML = title;
// console.log(h1.classList);

const h2 = document.createElement('h2');
h2.textContent = 'h2 test';
h2.classList.add('green');

const article = document.querySelector('article');
container.insertBefore(h1, article); // inserts <h1> element before <article>
article.after(h1); // inserts <h1> after </article>
article.before(h2); // inserts <h2> before <article>, simplified insertBefore

container.append(title); // adds title as a last child element of a container, same as appendChild()

article.replaceWith(h1); // replaces <article> element with <h1>
*/


// inner.HTML

/*
const div = document.querySelector('div');
console.log(div);
div.innerHTML = '<h2>Hello World!</h2>';
div.innerHTML += '<h3>Hello World!</h3>';

let root = document.querySelector('body');
const frag = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    frag.append(box);
}
root.append(frag);
*/

// using string instead of DocumentFragment
/*
let str = '';
for (let i = 0; i< 100; i++) {
    str += '<div class="box"></div>'
}
root.innerHTML = str;
*/


// ************** insertAdjuacentHTML() ********************

const ul = document.querySelector('ul');
const text1 = '<li class="red">beforebegin</li>';
const text2 = '<li class="red">afterend</li>';
const text3 = '<li class="red">afterbegin</li>';
const text4 = '<li class="red">beforeend</li>';
ul.insertAdjacentHTML('beforebegin', text1); // перед
ul.insertAdjacentHTML('afterend', text2); // після
ul.insertAdjacentHTML('afterbegin', text3); // всередині спочатку
ul.insertAdjacentHTML('beforeend', text4); // всередині вкінці

// *************** cloneNode() **************************

/*
const article = document.querySelector('article');
const newarticle = article.cloneNode(true);
// false - clones <article> with all attributes but without internal content
// true - clones with internal content
console.log(newarticle);
*/

