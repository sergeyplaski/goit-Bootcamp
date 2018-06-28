let str = 'oko';
let str2 = 'test';
// split
// reverse
// join
// 1)Перевірити чи являється слово паліндромом (слово що читається справа на ліво і зліва на право однаково)
//
// 2)Зробити перевірку і вивести в консоль true or false

console.log(str === str.split('').reverse().join('')); // 'oko' true
console.log(str2 === str2.split('').reverse().join('')); // 'test' false