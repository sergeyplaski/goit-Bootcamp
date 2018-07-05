'use strict';

// ***********  GETTERS AND SETTERS *****************
/*
class User {
    constructor(name, surname) {
        // this.name = name;
        // this.surname = surname;
        // private
        this._name = name;
        this._surname = surname;
    }

    getFullName() {
        return `${this._name} ${this._surname}.`
    }

    // getFullName() {
    //     return `${this.name} ${this.surname}.`
    // }

    // // getter
    //
    get name() {
        return this._name;
    }
    //
    // //
    // // get surname() {
    // //     return this._surname;
    // // }
    // // // setter
    // //
    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }
    //
    // set setName(name) {
    //     this._name = name;
    // }
    //
    // //
    // get age() {
    //     return this._age;
    // }
}
*/


// ***********  EXCERCISES ***************

// #1
// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щою всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

class Worker {
    constructor(settings) {
        this._name = settings.name;
        this._surname = settings.surname;
        this._rate = settings.rate;
        this._days = settings.days;
    }

    get salary() {
        return this.rate * this.days;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get rate() {
        return this._rate;
    }

    set rate(val) {
        this._rate = val;
    }

    get days() {
        return this._days;
    }

    set days(val) {
        this._days = val;
    }
}

let matr = new Worker({name: 'Kit', surname: 'Matroskin', rate: 100, days: 25});
let pet = new Worker({name: 'Petryk', surname: 'P\'yatochkyn', rate: 75, days: 20});

console.log(`${matr.name} ${matr.surname}: ${matr.salary}`);
console.log(`${pet.name} ${pet.surname}: ${pet.salary}`);

pet.rate = 100;
console.log(`${pet.name} ${pet.surname}: ${pet.salary}`);

// #2
// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor(name, surname, yearIn) {
        super(name, surname);
        this._yearIn = yearIn;
    }

    get course() {
        const today = new Date;
        // console.log(today);
        return today.getFullYear() - this._yearIn;
    }

    get FullInfo() {
        return `${super.getFullName()}, ${this.course}`; // super.super for grandfather's method
    }
}

let vasya = new Student('Vasya', 'Petrenko', 2015);
console.log(vasya.course);
console.log(vasya.FullInfo);