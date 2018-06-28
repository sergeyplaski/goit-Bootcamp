/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях
  элементы массива.
*/

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax


/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
users.splice(0,1);
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
users.splice(users.length-1,1);
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
users.unshift('Mickey');
//users.splice(0,0,'Mike'); // also works
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.push('Lola', 'Rose');
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]