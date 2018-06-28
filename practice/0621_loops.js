/*
    output power of 2 for every element of the array
*/

// let arr = [5, 10, 25, 68, 78, 95];
// for (let i = 0, max = arr.length; i < max; i++) {
//     console.log(Math.pow(arr[i], 2));
// }


/*
    Task:
    - ask user to enter the number of items,
    - for each item, prompt for its name;
    - store all items into array;
    - output all items
 */

// let cart = [];
// n = prompt('Сколько товаров вы хотите купить?');
// for (let i = 0; i < n; i++) {
//     cart.push(prompt('Введите название товара'));
// }
// console.log(n + ' покупок: ' + cart.join(', '));

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100.

  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
  либо не нажмёт кнопку Cancel.

  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод
  вроде строк 'qweqwe' в этой задаче необязательно.

  PS: используйте цикл do...while
*/

// let input = 0;
// do {
//     input = prompt('Введите число больше 100');
//     console.log(input);
// } while (+input <= 100 && input !== null);

/*
    Randomly select an element from the array
 */

// let students = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski',
//     'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk','Krasnoiarov',
//     'Rotman', 'Scryagin', 'Humenchuk'];
// let st = Math.floor(Math.random()*students.length);
// alert(students[st]);
/* NOTE: array.length is greater than the index of the last element by 1, so random*length works perfectly here!*/


/*Напишите скрипт, который выводит через console.log все
числа от min до max, с двумя исключениями:

    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'

- Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'

PS: используйте цикл for*/

    // const min = 1;
    // const max = 100;
    //
    // for (let i = min; i <= max; i++) {
    //     // if (i % 3 === 0) {
    //     //     console.log( i + ' - Fizz');
    //     // } else if (i % 5 === 0 && i % 3 !== 0) {
    //     //     console.log(i + ' - Buzz');
    //     // } else {
    //     //     console.log(i);
    //     // }
    //     // TETRARY:
    //     console.log(i % 3 === 0 ? i + ' - Fizz' : i % 5 === 0 && i % 3 !== 0 ? i + ' - Buzz' : i)
    // }

/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num,
  записывая эти числа в массив newArray.

  В результате в массиве newArray будут все подходяшие числа.

  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > num) {
//         newArray.push(numbers[i]);
//     }
// }
// console.log(newArray.join(', '));
//
// // newArray.length = 0; // clears the array
// newArray.splice(0); //clears the array
// for (let elem of numbers) {
//     if (elem > num) {
//         newArray.push(elem);
//     }
// }
// console.log(newArray.join(', '));

/*


  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.

  - Заканчивает запрашивать числа, как только посетитель введёт не число
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - После того как ввод был завершен, если массив не пустой,
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

const numbers = [];
let sum = 0;
let input = null;
let c = 0;

do {
    input = prompt('Введите число');
    numbers.push(+input);
    c++; //protection against the infinite loop
} while (input !== null && input.length > 0 && !isNaN(input) && c < 10);


//check if the last element is non-numeric
if (numbers.length > 0 && isNaN(numbers[numbers.length-1])) {
    numbers.pop();
}

for (let num of numbers) {
    sum += num;
}

console.log('Сумма: ' + sum);