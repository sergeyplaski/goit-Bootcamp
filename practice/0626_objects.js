/*
let user = {
    id: 123456789,
    private: {
        login: 'user256',
        pwd: 'password',
        phone: '123-456-7890',
    },
    public: {
        name: 'Bob',
        age: 52,
        gender: 'M',
        avatarURL: '../img/avatar256.png',
    }
};

function showPrivateVal(obj, prop1, prop2) {
    return obj[prop1][prop2];
}

console.log(showPrivateVal(user, 'private', 'phone'));
*/

// **************************

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     getName: function () {
//         return hotel.name;
//     },
//     getCapacity() {
//         return hotel.capacity;
//     },
//     getStars: () => hotel.stars,
    //
    // changeCapacity(value) {
    //   hotel.capacity += value;
    // },
    // createKey(value) {
    //     hotel.address = value
    // }
// };

// *******************************

/*
const first = {name: 'Tony'};
const last = {lastName: 'Stark'};
//
// Object.assign(first, last); // copies first and last object contents into object first and references it
const copy = Object.assign({}, first, last); // creates a new empty object + copies first and last objects into it
// console.log(person);
//
console.log(first);
console.log(last);
console.log(copy);  // { {name: 'Tony'}, {lastName: 'Stark'} }
*/

// *******************************

/*
const a = {x: 1, y: 2};
const b = {x: 0, z: 3};
//
// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}
const c = {
    ...a,
    ...b,
    // a, b --> x: 0, y: 2, z: 3
    //b, a --> x: 1, z: 3, y: 2
};
console.log(c);
*/

// ********** for-in loop ****************

/*
const hotel = {
    name : "Resort Hotel",
    stars: 5,
    capacity: 100,
};

  // Перебор ключей key объекта hotel
  for (let key in hotel) {
      console.log(`Key = ${key}, value = ${hotel[key]}`)
  }
*/

// the correct use of this loop (to avoid accessing properties/methods of the parent object)
/*
const hotel = {
    name : "Resort Hotel",
    stars: 5,
    capacity: 100,
};
// console.log(hotel);
for (const key in hotel) {
    let hasKey = hotel.hasOwnProperty(key);
    if (hasKey) {
        console.log('Value: ', hotel[key]);
    }
}
// console.log(hotel);
*/

/*
const hotel = {
    name : "Resort Hotel",
    stars: 5,
    capacity: 100,
};

  const keys = Object.keys(hotel);
  const values = Object.values(hotel);
  const entries = Object.entries(hotel);
  console.log(keys);
  console.log(values);
  console.log(entries);
*/

// ******** object destructurization **********

/*
// Объявим переменные и присвоим им значения из объекта
// const { name, stars, status ,capacity } = hotel;
// console.log(name);

const hotel = {
    name: "Resort Hotel",
    stars: 5,
    capacity: 100,
};
//
const {name = "hotel", stars = 3, status = "empty"} = hotel;

console.log(name);
console.log(stars);
console.log(status);
*/

// *******  dest function **************
let dog = {
    name: 'Mango',
    age: 5,
    isHappy: true,
};

// function showObjVal(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.isHappy);
// }

// the above can be re-written:
/*
function showObjVal({name, age, isHappy}) {
    // console.log(name);
    // console.log(age);
    // console.log(isHappy);
    return `dog name is ${name} age is ${age} happy ${isHappy}`;
}
console.log(showObjVal(dog));
*/

// ******** array destructurization **********

/*
// dest arr
let strNum = ['one', 'two', 'three'];
let [a, b, c, d] = strNum;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

/*
let numb = [5, 10, 20];

function showArrVal(arr) {
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
}

function showArrVal([a, b, c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}

showArrVal(numb);
*/

/*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

/*
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

user.mood = 'happy';
user.hobby = 'javascript';
delete user.premium;

// for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// for (let key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }

for (let entry of Object.entries(user)) {
    console.log(entry.join(': '));
}
*/

// ******* NOT PART OF THE CLASS ACTIVITY *****

/*
let a = () => b();
let b = () => c();
let c = () => {console.trace(); return 'test';};
console.log(a());
*/


// ****************************************
/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
};

/*
let max = 0;
let name = '';
for (let key in tasksCompleted) {
    if (tasksCompleted[key] > max) {
        max = tasksCompleted[key];
        name = key;
    }
}
console.log(`${name} has completed ${max} tasks`);
*/

// now using spread operator:
/*
let values = Object.values(tasksCompleted); // array of values
// console.log(Math.max(...values)); // use spread operator - converts array of values to a (list ?) of array elements

let users = Object.keys(tasksCompleted); // array of values
let maxTasks = Math.max(...values);
let winner = users[values.indexOf(maxTasks)]; // values.indexOf(val) returns index of the element with value val in the values array
console.log(`The winner is ${winner} with ${maxTasks} completed tasks`);
*/
// NOTE: this finds the first user in case 2 persons completed equal number of tasks which is max #

// **********************************

/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

/*
let countProps = (obj) => Object.keys(obj).length;

// Вызовы функции для проверки
console.log(
    countProps({})
); // 0

console.log(
    countProps({a: 1, b: 3, c: 'hello', d: 'asdfgj'})
); // 3
*/

// // add the elements of an existing array into a new array
// let certsToAdd = ['Algorithms', 'Front End'];
// let certifications = ['Web Design', ...certsToAdd,'Data Visualization', 'APIs', 'Information Security'];
// console.log(certifications);

// // pass elements of an array as arguments to a function
// function addThreeNumbers(x, y, z) {
//     console.log(x + y + z)
// }
//
// variant #1
// let salary = [100, 200, 500, 800];
// addThreeNumbers(salary[0],salary[1],salary[2]);
// variant #2
// let salary = [100, 200, 500, 800];
// let [a, b, c] = salary;
// addThreeNumbers(a, b, c)
// variant #3
// let salary = [100, 200, 500, 800];
// console.log(addThreeNumbers(...salary));
// console.log(addThreeNumbers(100, 200, 500, 800));

// // copy arrays
// let arr = [1, 2, 3];
// let arr2 = arr;

// let arr = [1, 2, 3];
// let arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);
//
//
// // concatenate arrays
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // let arr3 = arr1.concat(arr2);
// arr1 = ["BootCamp",...arr2,...arr1];
// // console.log(arr3);
// console.log(arr1);

// **********************************

/*
let arr1 = [1,2,3];
let arr2 = arr1;  // assignment by ref
arr2.push(4);
console.log(arr1);

arr1 = [...arr2, 'zero', ...arr1]; // concatenates and rearranges the arrays, re-writes arr1
console.log(arr1);
*/

// ******* rest operator **************


// REST: condense multiple elements into an array
function multiply(multiplier,...theArgs) {
    console.log('multiplier', multiplier);
    console.log('theArgs', theArgs);
}

 multiply(2, 1, 2, 3, 8, 9);
