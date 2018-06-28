// ************** map() *************************
/*
let arrowNumbers = numbers.map(element => element*20);
console.log(arrowNumbers);
const addOne = arr.map(n => n + 1);
console.log(addOne); // [1, 3, 5]
*/

/*
// к значению массива добавим значение позиции этого числа
const numbers = [0, 2, 4, 6, 8, 10];
const flipFlop = numbers.map(function (element, index) {
    return element + index
});
console.log(flipFlop);
const flipFlop = numbers.map((element, index) => element + index);
console.log(flipFlop);

const addPosition = odd.map((n, i) => n + i);
console.log(addPosition); // [0, 3, 6, 9, 12, 15]
*/

// *************** filter() *********************

/*
let numbers = [1,2,3,4,5,6,7,8,9];
let filteredNumbers = numbers.filter(function(item) {
    if (item > 5)
        return item;
});

let filteredArr = numbers.filter(item => item > 5 ? item : null);
console.log(filteredArr);
*/

// ************* find() *********************

/*
const logins = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
let findLogin = logins.find(function (el) {
    return el === 'Newton';
});

let arrowFind = logins.find(el => el === 'Newton');

console.log(findLogin);
*/

// *********** every() **************************

// const money = [100, 500, 150, 250, 5]; //[true, true, false, true]
// const go1 = money.every(function (element) {
//     return element > 0;
// });
// console.log(go1); //true or false

// *********** some() **************************
/*
const money2 = [100, 500, 300, 250];
const go = money2.some(function (element) {
    return element >= 1000
});
console.log(go);
*/

// ************* sort () **********************

/*
let numbers2 = [4, 2, 5, 1, 3, 11];
numbers2.sort(function (a, b) {
    // if (a > b) {
    //     return -1 // sorts from max to min
    // } else {
    //     return 1
    // }
    return a - b; // sort from min to max
    return b - a; // sorts from max to min
});
console.log(numbers2);
*/

// code emulating SORT + GROUP BY in SQL:
/*
let arr = [
    {name: 'A', price: 500},
    {name: 'C', price: 700},
    {name: 'B', price: 800},
    {name: 'B', price: 50}
];

arr.sort(function (el1, el2) {
    return el1.name > el2.name;
}).sort(function (el1, el2) {
    if (el1.name === el2.name) {
        return el1.price > el2.price;
    }
});
console.log(arr);
*/

// ********** string sorting ****************
/*
const logins = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
logins.sort();
logins.sort().reverse();
console.log(logins);
*/

//

// ************* reduce() ******************
/*
const hoursWorkedPerWeek = [
    {day: 'M',number: 9},
    {day: 'T',number: 10},
    {day: 'W',number: 11},
    {day: 'T',number: 5},
    {day: 'F',number: 12}
];
// let sum = 0;
// for (let el of hoursWorkedPerWeek) {
//     sum +=el
// }
// console.log(sum);

let result = hoursWorkedPerWeek.reduce(function (acc, el) {
    return acc + el.number;
},0);
let arrResult = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number, 0);
console.log(result);
*/

/*
let superArr = [[10,9,4,8], [12,13,15,20], [22,26,29]];
// let flatArray = superArr.reduce((acc, arr) => acc.concat(arr), []);

let flatArray = superArr
    .reduce((acc, arr) => acc.concat(arr), [])
    .filter(el => el > 10)
    .sort((a,b) => a - b);
// IMPORTANT! -- remember to use a - b for numeric comparison, a > b for string comparison

console.log(flatArray);
*/


