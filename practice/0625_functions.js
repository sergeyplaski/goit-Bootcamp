/*let test = 'global';
function local() {
    let test = 'local';

    function inner() {
        let test = 'inner';
        return test;
    }

    console.log(inner()); // returns 'inner'
    console.log(inner); // return function

    return test;
}

console.log(local());*/

// ****************************************

/*
function sumArg() {
    // console.log(arguments);
    // arguments = 1, 5, 9, 12, 1, 100;
    // return arguments;
    // console.log(arguments[1]);
    let arr = Array.from(arguments);
    console.log('Array arguments', arr);
    let sum = '';
    for (let item of arr) {
        sum += item + ' '; // some arguments may be strings or other non-numeric values
    }
    return sum;
}

//
console.log(sumArg(1, 5, 9, 12, 1, 100.56));
console.log(sumArg(5, 9));
console.log(sumArg('hello', 'world', 9)); */


// *************************************************

/*
function secretPassword() {
    let password = 'xh38sk';

    function guessPassword(guess) {
        if (guess === password) {
            return true;
        } else {
            return false;
        }
    }

    return guessPassword;
}

let passwordGame = secretPassword(); // function guessPassword() is written to a var passwordGame
console.log(passwordGame);
let tryOne = passwordGame('heyisthisit?');
let tryTwo = passwordGame('xh38sk');
console.log(tryOne);
console.log(tryTwo);
*/

// ********* closure *********

/*
function counter() {
    let count = 0;
    function increment() {
        count +=1;
        return count;
    }
    return increment;
}
let user1 = counter();
console.log(user1);
let first = user1();
let user2 = counter();
let user2First = user2();
let user2Second = user2();
let user2Third = user2();
let user2Fourth = user2();
console.log('first user counter',first);
console.log('second user counter',user2Fourth);
*/

// ********* IIFE - immediately involved function expression

/*
(function () {
    let x = 10;
    let y = 20;

    console.log(x);  // 10
    console.log(y);  // 20
})();
*/

// ********* factorial *****************

/*
let fact = (n) => n === 0 ? 1 : n < 0 ? n * fact(n + 1) : n * fact(n - 1); // for positive AND negative numbers

console.log(fact(3));
console.log(fact(-3));
*/


// ****** class tasks ************

// Написати функцiю що приймає аргументом строку формата '160px' і вертає строку формата '10rem'

/*
let rem = function(str) {
    if (str.endsWith('px')) {
        return `${parseFloat(str)/16}rem`;
    } else {
        return '';
    }
};

console.log(rem('160px')); // 10rem
console.log(rem('16px')); // 1rem
console.log(rem('80px')); // 5rem
console.log(rem('8px')); // 0.5rem
*/

// написати ф-ї що приймає 2 параметра (розмір елемента і розмір контейнера) і повертає розмір елемента в %

/*
let prc = (el, cont) => `${100*parseFloat(el)/parseFloat(cont)}%`;

console.log(prc('160px','1600px')); // 10%
console.log(prc('16px','1600px')); // 1%
console.log(prc('80px','1600px')); // 5%
console.log(prc('8px','1600px')); // 0.5%
*/

// ******* function that combines the two above
// if the last parameter unit is 'prc' then return arg1/arg2 in %
// if 'rem' then convert arg1 from px to rem

/*
let convert = (...args) => args[args.length-1] === 'prc' ? `${100*(parseFloat(args[0])/parseFloat(args[1]))} %` :
   `${parseFloat(args[0])/16}rem`;


console.log(convert('160px', 'rem')); // 10rem
console.log(convert('16px', 'rem')); // 1rem
console.log(convert('80px', 'rem')); // 5rem
console.log(convert('8px', 'rem')); // 0.5rem

console.log(convert('160px','1600px', 'prc')); // 10%
console.log(convert('16px','1600px', 'prc')); // 1%
console.log(convert('80px','1600px')); // 5%
console.log(convert('8px','1600px')); // 0.5%
*/

// *****************************************************

// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.

let exchange = function(from, to, amt) {
    let USDUAH = 26;
    let USDEUR = 0.85;
    let EURUAH = 29;
    let EURUSD = 1.17;
    let UAHUSD = 0.0385;
    let UAHEUR = 0.0329;

    return function () {
        let currencyList = ['USD','EUR', 'UAH'];
        let from = prompt('Enter currency to be echanged: (USD/EUR/UAH)');
        let FROM = from.toUpperCase();
        if (!currencyList.includes(FROM))
            return `Invalid currency entered : ${from}`;

        let to = prompt('Enter currency you want to receive: (USD/EUR/UAH)');
        let TO = to.toUpperCase();
        if (!currencyList.includes(TO))
            return `Invalid currency entered : ${to}`;

        let amt = parseFloat(prompt('Enter amount to echange'));
        return (amt < 0 ? 'Invalid amount entered' : `${amt} ${FROM} = ${amt * eval(FROM + TO)} ${TO}`);
    };
};

let convert = exchange(); // always initialize function enclosure
alert(convert());