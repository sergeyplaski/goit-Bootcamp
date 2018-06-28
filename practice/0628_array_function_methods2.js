const scientists = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// 1) отримати масив вчених що народилися в 19 ст
console.log(scientists.filter(sc => sc.year > 1800 && sc.year < 1901));

// 2) знайти суму років скільки прожили всі вченні
console.log(scientists.reduce((totalAge, sc) => totalAge + (sc.passed - sc.year), 0));

// 3) Відсортувати вчених по алфавіту
 console.log(scientists.sort((sc1, sc2) => sc1.first > sc2.first)); // sort(a>b) for string sort

// 4) Відсортувати вчених по даті народження
console.log(scientists.sort((sc1, sc2) => sc1.year - sc2.year)); // sort(a-b) for numeric sort

// 5) Відсортувати вчених по кількості прожитих років
console.log(scientists.sort((sc1, sc2) => (sc1.passed - sc1.year) - (sc2.passed - sc2.year)));

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
console.log(scientists.filter(sc => sc.year > 1400 && sc.year < 1701));

// 7) Знайти вченого який родився саме пізніше.
let years = scientists.map(sc => sc.year);
console.log( scientists.find(sc => sc.year === Math.max(...years)) );
// NOTE: another way is to sort years and return the last element, but it's much slower with large arrays

// 8) Знайти рік народження Albert Einstein
console.log(scientists.find(sc => sc.last === 'Einstein').year);

// 9) Знайти вчених прізвище яких починається на літеру С
console.log(scientists.filter(sc => sc.last >= 'C' && sc.last < 'D'));
// OR
console.log(scientists.filter(sc => sc.last[0] === 'C'));

// 10) Видалити з масива всіх вчених імя яких починається на A
console.log(scientists.filter(sc => sc.first[0] !== 'A'));