/*
  1) Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

const isObjectEmpty = obj => Object.keys(obj).length === 0;

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
); // true

console.log(
    isObjectEmpty({a: 1})
); // false

console.log(
    isObjectEmpty({a: 1, b: 2})
); // false


/*
  2) Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

let countTotalSalary = obj => Object.values(obj).reduce((total, salary) => total + salary, 0);

// Вызовы функции для проверки
console.log(
    countTotalSalary({})
); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80
    })
); // 330

/*
  3) Напишите функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа,
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
];

let getAllPropValues = (arr, prop) => arr.some(user => !user.hasOwnProperty(prop)) ? [] : arr.map(user => user[prop]);

// Вызовы функции для проверки
console.log(
    getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
    getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
    getAllPropValues(users, 'active')
); // []


/*
4) Написати функцію що видає фінальний результат в гольфі
function golfScore(par, strokes) приймає 2 аргумента
par - кількість ударів що дозволено, strokes - реальна кількість ударів
Потрібно порівняти strokes з такими критеріями:

1 дасть "Hole-in-one!"
strokes <= par -2 дасть "Eagle"
strokes == par -1 дасть "Birdie"
strokes == par дасть "Par"
strokes == par +1 дасть "Bogey"
strokes == par +2 дасть "Double Bogey"
Все інше "Go Home!"
*/

// switch-case solution:
// remember to use switch (true) and eclose case conditions in ()!
/*
function golfScore(par, strokes) {
    switch (true) {
        case (strokes === 1):
            return 'Hole-in-one!';
        case (strokes <= par -2):
            return 'Eagle';
        case (strokes === par -1):
            return 'Birdie';
        case (strokes === par):
            return 'Par';
        case (strokes === par +1):
            return 'Bogey';
        case (strokes === par +2):
            return 'Double Bogey';
        default:
            return 'Go Home!';
    }
}
*/

// ternary operator solution
let golfScore = (par, strokes) =>
    strokes === 1 ? 'Hole-in-one!' :
    strokes <= par -2 ? 'Eagle' :
    strokes === par -1 ? 'Birdie' :
    strokes === par ? 'Par' :
    strokes === par +1 ? 'Bogey' :
    strokes === par +2 ? 'Double Bogey' :
    'Go Home!';

//Перевірка
console.log(golfScore(4, 7)); // "Go Home!"
console.log(golfScore(2, 1)); //"Hole-in-one!"
console.log(golfScore(5, 4)); //"Birdie"



