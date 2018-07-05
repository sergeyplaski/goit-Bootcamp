'use strict';

/* 1)
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// solution using prototype:
/*
function Account(login, email, friendsCount) {
    this.login = login;
    this.email = email;
    this.friendsCount = friendsCount;
}

Account.prototype.getAccountInfo = function() {
    return `login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`;
};
*/


// solution using classes:
/*
class Account {
    constructor(login, email, friendsCount) {
        this.login = login;
        this.email = email;
        this.friendsCount = friendsCount;
    }

    getAccountInfo() {
        return `login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`;
    };
}

let vasya = new Account('Vasya', 'vasya@test.com', 1000);
let john = new Account('John Doe', 'grg@test.org', 100);
let jane = new Account('Jane Shmoe', 'jane@test.net', 150);

console.log(vasya.getAccountInfo());
console.log(john.getAccountInfo());
console.log(jane.getAccountInfo());
*/

/* 2)
  Напишите функцию-конструктор StringBuilder.

  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/

// solution using prototype
/*
function StringBuilder(string = "") {
    this.value = string;
}

StringBuilder.prototype.append = function(str) {
  this.value += str;
};

StringBuilder.prototype.prepend = function(str) {
    this.value = str + this.value;
};

StringBuilder.prototype.showValue = function() {
    console.log(this.value);
};

StringBuilder.prototype.pad = function(str) {
    this.prepend(str);
    this.append(str);
};
*/

// solution using classes:
/*
class StringBuilder {
  constructor(string = "") {
      this.value = string;
  }

  append(str) {
      this.value += str;
  };

    prepend(str) {
        this.value = str + this.value;
    };

    pad(str) {
        this.prepend(str);
        this.append(str);
    };

    showValue() {
        console.log(this.value);
    };
}

// check results:
const myString = new StringBuilder('.');

myString.append('^');
myString.showValue(); // '.^'

myString.prepend('^');
myString.showValue(); // '^.^'

myString.pad('=');
myString.showValue(); // '=^.^='
*/


/* 3)
  Создайте класс Car с указанными полями и методами.
*/

class Car {
    constructor(maxSpeed) {
            // speed - для отслеживания текущей скорости, изначально 0.
        this.speed = 0;

            // maxSpeed - для хранения максимальной скорости
        this.maxSpeed = maxSpeed;

            // running - для отслеживания заведен ли автомобиль,
            // возможные значения true или false. Изначально false.
        this.running = false;

            // distance - содержит общий киллометраж, изначально с 0
        this.distance = 0;
    }

    turnOn() {
        // Добавьте код для того чтобы завести автомобиль
        // Просто записывает в свойство running значание true
        this.running = true;
    }

    turnOff() {
        // Добавьте код для того чтобы заглушить автомобиль
        // Просто записывает в свойство running значание false
        this.running = false;
    }

    accelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
        if (spd <= this.maxSpeed) {
            this.speed = spd;
        }
    }

    decelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
        if (spd >= 0 && spd <= this.maxSpeed) {
            this.speed = spd;
        }
    }

    drive(hours) {
        // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
        // но только в том случае если машина заведена!
        if (this.running) {
            this.distance = this.speed * hours;
        }
    }

    // display all property values of Car object:
    showStatus() {
        for (let key in this) {
            if (this.hasOwnProperty(key))
                console.log(`${key}: ${this[key]}`);
        }
    }

/* 4)
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.

  Использование будет выглядеть следующим образом:

  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);

  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, running: ${car.running}, distance: ${car.distance}`);
    }
}

let mycar = new Car(200);
mycar.turnOn();
//mycar.showStatus();
console.log(mycar);

mycar.accelerate(100);
mycar.drive(5);
// mycar.showStatus();
console.log(mycar);

Car.getSpecs(mycar);