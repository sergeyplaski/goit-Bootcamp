// let a = Symbol('a');
// let b = Symbol('a');
// console.log(a === b);

// let x = 10;
// console.log(typeof x);

// q = confirm('Are you sure?');
// q2 = prompt('How old are you?');
// console.log(q);
// console.log(q2);

// let a =10;
// let b = 20;
// let c = '30';
// console.log(typeof (a + b + c), a + b + c);

// let a = 2.1;
// let b = 2.55;
// let c = a * b;
// console.log('c = ', c);
// let d = c.toFixed(3);
// console.log(d);

// let name = prompt('Enter your name');
// let age = prompt('Enter your age');
// console.log(`My name is ${name}, I am ${age}`);

// let a = 'qwertyuiop';
// let b = 'asdfghjkl';
// let c = 'zxcvbnm';
// console.log(`${b[5]}${a[2]}${b[8]}${b[8]}${a[8]} ${a[1]}${a[8]}${a[3]}${b[8]}${b[2]}`);

// console.log('hello'.toUpperCase());

let b = 'Hello';
 console.log(b.indexOf('l')); //2
// console.log(b.indexOf('r'));
// console.log(b.repeat(5));

console.log(b[b.indexOf('e')]); //e

// NaN peculiar behavior
let a = 'abc';
console.log(+a); // NaN
console.log(a > 0); // NaN <> anything --> false

let b = '';
console.log(+b); // 0