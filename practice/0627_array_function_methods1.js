// Модуль 5 - Дополнительные задания
// http://fecore.net.ua/javascript/pages/tasks/module-05.html


// ************** TASK 1 ****************
/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/

/*
const findGreaterThan = (num, arr) => {
    const result = [];

    for (let i = 0, max = arr.length; i < max; i += 1) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    return result;
};
*/

/*
function findGreaterThen(num, arr) {
    return arr.filter(item => item > num);
}
*/

/*
let findGreaterThen = (num, arr) => arr.filter(item => item > num);

console.log( findGreaterThen(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
console.log( findGreaterThen(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
console.log( findGreaterThen(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
*/

/*
  Функция multiplyBy принимает два аргумента - число и массив.
  Возвращает массив все значения которого умножены на число.
*/

/*
const multiplyBy = (num, arr) => {
    let result = [];

    for (let i = 0, max = arr.length; i < max; i += 1) {
        result.push(arr[i] * num);
    }

    return result;
};
*/

/*
let multiplyBy = (num, arr) => arr.map(item => item * num);

console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
*/


/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/

/*
function summAllNumbers(...args) {
    let accumulator = 0;

    for (let i = 0, max = args.length; i < max; i += 1) {
        accumulator += args[i];
    }

    return accumulator;
}
*/

/*
let summAllNumbers = (...args) => args.reduce((acc, item) => acc + item, 0);

console.log( summAllNumbers(1, 2, 3) ); // 6
console.log( summAllNumbers(1, 2, 3, 4) ); // 10
console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
*/

/*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/

/*
const findEvery = (num, arr) => {
    for (let i = 0, max = arr.length; i < max; i += 1) {
        if (arr[i] < num) {
            return false;
        }
    }

    return true;
};
*/

/*
let findEvery = (num, arr) => arr.every(item => item >= num);

console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
*/


// *********** TASK 2 **************
/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого ключа из arr.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

/*
let getPropValues = (arr, prop) => arr.map(elem => elem[prop]);

const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

// Вызовы функции для проверки
console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
*/


// *********** TASK 3 **************
/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

/*
const users = [
    { name: 'Mango', inactiveDays: 15, isActive: true },
    { name: 'Poly', inactiveDays: 8, isActive: false },
    { name: 'Ajax', inactiveDays: 32, isActive: false },
    { name: 'Chelsey', inactiveDays: 85, isActive: true }
];

let setGuestState = (guests, period) => guests.map(elem => elem.inactiveDays > period ? {...elem, isActive: false} : {...elem, isActive: true});

// Вызовы функции для проверки
console.log(
    setGuestState(users, 10)
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(
    setGuestState(users, 20)
); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(
    setGuestState(users, 50)
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
*/

// MY NOTES:
// IMPORTANT! map() here is a clean function, it doens NOT alter the array users;
// That is because we return a newly created object (observe {...elem, isActive}

// The following variation is NOT a clean function as it alters the original array:
/*
function setGuestState(guests, period) {
    return guests.map(elem => elem.inactiveDays > period ? elem.isActive = false : elem.isActive = true);
}
*/


// ************* TASK 4 ***************************
/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

/*
const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

let getActiveGuests = (users) => users.filter(elem => elem.isActive? elem : null);

// Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
*/


// *************  TASK 5 **************************
/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

/*
const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

let getGuestsOlderThan = (users, maxage) => users.filter(elem => elem.age > maxage);

// Вызовы функции для проверки
console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
console.log(getGuestsOlderThan(guests, 55)); // []
*/

// *************  TASK 6 **********************
/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

/*
const guests = [
    { id: 1, name: 'Mango', age: 20 },
    { id: 2, name: 'Poly', age: 18 },
    { id: 3, name: 'Ajax', age: 30 },
    { id: 4, name: 'Chelsey', age: 45 }
];

// function getGuestById(guests, id) {
//     return guests.find(function(elem) {
//         return elem.id === id;
//     });
// }

let getGuestById = (users, id) => users.find(elem => elem.id === id);

// Вызовы функции для проверки
console.log(
    getGuestById(guests, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
    getGuestById(guests, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
    getGuestById(guests, 5)
); // undefined
*/


// ******** TASK 7 *******************
/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/
/*
const order = {
    bread: 10,
    apples: 25,
    chicken: 60,
    milk: 15,
    cheese: 40
};

// classic syntax
// let orderTotal = Object.values(order).reduce(function (total, elem) {
//     return total + elem;
// }, 0);
// console.log(orderTotal); // 150

// short arrow function
let orderTotal = (order) => Object.values(order).reduce((total, elem) => total + elem, 0);
console.log(orderTotal(order)); // 150
*/


// ************ TASK 9 ****************
/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/

/*
const guestsA = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: false },
    { name: "Ajax", isActive: true }
];

const guestsB = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: true },
    { name: "Ajax", isActive: true }
];
*/

// classic syntax
/*
function allGuestsActive(guests) {
    return guests.every(function(elem) {
        return elem.isActive;
    })
}
*/

// with arrow functions:
/*
let allGuestsActive = (guests) => guests.every(elem => elem.isActive);

// Вызовы функции для проверки
console.log(allGuestsActive(guestsA)); // false

console.log(allGuestsActive(guestsB)); // true
*/


// *************  TASK 8 **********************
/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
};

const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
};

const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
};

// MY NOTES:
// classic syntax
// order.keys is an array of item names in the order
// we use map() to walk through the item names
// orderObj[elem] is quantity of that item in the order obj
// prodObj[elem] is price of that item in the products obj

function getTotalPrice(prodObj, orderObj) {
    let orderItems = Object.keys(orderObj);  // array of item names in the order
    let orderTotalsByItem = orderItems.map(function(elem) {  // qty * price for each order item
        return (orderObj[elem] * prodObj[elem]);
    });
    return orderTotalsByItem.reduce(function(total, item_total) {  // add up item totals
        return total + item_total;
    }, 0)
}
// Вызовы функции для проверки
console.log(getTotalPrice(products, orderA)); // 140
console.log(getTotalPrice(products, orderB)); // 130


// now let's simplify with arrow functions
let getTotalPriceA = (prodObj, orderObj) => Object.keys(orderObj)
        .map(elem => orderObj[elem] * prodObj[elem])
        .reduce((total, item_total) => total + item_total, 0);

// Вызовы функции для проверки
console.log(getTotalPriceA(products, orderA)); // 140
console.log(getTotalPriceA(products, orderB)); // 130
