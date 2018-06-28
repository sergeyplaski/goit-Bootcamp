// let firstArray = [1, 2, 3];
// let secondArray = new Array(5, 6, 7, 8);
// let summer = ['June', 'July', 'August'];

// const arr = [];
// console.log(typeof arr);

// let a = [1,2,3];
// a.push(10,11);
// let b = [7,8];
// a.push(b);
// console.log(a);

// slice and splice
let x;
let arr = [1,5,9,8,7,10];


x = arr.splice(1, 3);
console.log(arr); // [1,7,10]
console.log(x); // [5,9,8]

//insert a,b beginning at 4th element, replacing 0 elements:
let arr2 = [1,2,3,4,5,6];
x = arr2.splice(4,0,'a','b');
console.log(arr2); // [1,2,3,4,'a','b',5,6]

// replace 4th and 5th elements:
let arr3 = [1,2,3,4,5,6];
x = arr3.splice(3,2,'a','b');
console.log(arr3); // [ 1, 2, 3, 'a', 'b', 6 ]
console.log(x); // [ 4, 5 ]
