'use strict';

// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
// };
//
// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canSwim = true;

// let dog = {
//     canBark: true,
//     canSwim: true,
// };
//
// let buldog = {
//     canSluna: true,
//     canJump: false,
// };

// console.log('animal',animal);
// console.log('dog',dog);
// console.log(dog.canBark);
// console.log(dog.canEat);
// console.log(buldog);

// let dog = Object.create(null);
// dog.age = 25;
// console.log(dog);

// [[Prototype]] це запис __proto__ в специфікації ECMAScript

/*
let animal = {
    canEat: true,
    canSleep: true,
    canWalk: true,
};
let dog = Object.create(animal);
dog.age = 25;
dog.canBark = true;
dog.canSwim = true;

// console.log('animal',animal);
console.log('dog',dog);
console.log('dog proto',dog.__proto__);

function Human(name, age) {
    // this ={}
    // Human.prototype = {}
    this.name = name;
    this.age = age;
    // return this
}
// Human.prototype.hello = 'Hello Max';
Human.prototype.eat = function () {
    console.log(`${this.name} can eat`);
};
Human.prototype.great = function () {
    console.log(`Hello my name is ${this.name}`);
};
Human.prototype.friends = ['Jack', 'Ravshan', 'Nasalnika', 'Bambucha'];

let max = new Human('Max',12);
max.great();
// console.log(max.__proto__ === Human.prototype);
// max.__proto__.test = 'test';
// console.log('Max proto', max.__proto__);
console.log('human.prototype',Human.prototype);
let jane = new Human('Jane', 25);
jane.friends.pop();
console.log(jane.friends);
console.log(max.friends);
console.log(jane);
console.log(max);
max.great();
max.eat();
*/

// ********** PROTOTYPE DETAILS *********************

const Hero = function (name, level) {
    // this = {}
    // Hero.prototype = {}
    this.name = name;
    this.level = level;
};

Hero.prototype.greet = function () {
    console.log(`Hello, I'm ${this.name}`);
};

//   const Alister = new Hero('Alister', 1);
// Alister.greet();

//   /*
//     Warrior class, extends Hero
//   */
const Warrior = function (name, level, weapon) {
    // this = {}
    // Warrior.prototype = {}
    // Hero.prototype = {}
    Hero.call(this, name, level);
    this.weapon = weapon;
    // {name, level, weapon,}

};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
    console.log(`${this.name} attacks with an ${this.weapon}.`);
};

const Swordman = function (name, level, weapon, ability) {
    Warrior.call(this, name, level, weapon);
    this.ability = ability;
};

Swordman.prototype = Object.create(Warrior.prototype);
Swordman.prototype.constructor = Swordman;
Swordman.prototype.rush = function () {
    console.log(`Attack aaaaaaaaaaahhhhhhhhhhhh!!!!!!!`);
};
Swordman.prototype.fatal = function () {
    console.log(`You are dead`);
};
let archibald = new Swordman('Archi', 5, 'sword', '100 gram');

// archibald.rush();
console.log(archibald);
console.log(Swordman.prototype);

// ****************** CLASSES **********************

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} can eat`);
    }

    great() {
        console.log(`Hello my name is ${this.name}`);
    }
}

class Warrior extends Human {
    constructor(name, age, weapon) {
        super(name, age);
        this.weapon = weapon;
    }

    attack() {
        console.log(`Attack ${this.name}`);
    }
}

class Knight extends Warrior {
    constructor(name, age, weapon, horse) {
        super (name, age, weapon);
        this.horse = horse;
    }

    static showMoney(){
        console.log(`${this.name} have many golden coins`);
    }

    move() {
        console.log(`${this.horse} move`);
    }
}


let lanselot = new Knight('Lanselot', 25, 'Sword', 'Plotva');
lanselot.move();
lanselot.attack();
lanselot.eat();
Knight.showMoney();