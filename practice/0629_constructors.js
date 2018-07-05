'use strict';

/* #1
  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей,
  необходимо передать как аргументы
  при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/

function User({name, age, friends, isActive}) {
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.isActive = isActive;
    this.getUserInfo = function() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
    }
}

let jack = new User({age: 25, name: 'Jack', friends: 50, isActive: true});
let alice = new User({name: 'Alice', age: 23, isActive: true, friends: 150})

jack.getUserInfo();
alice.getUserInfo();

/* #2
  Расставьте отсутствующие this
  в методах объекта store
*/

const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(manager) {
        this.managers.push(manager);

        console.log(this.managers);
    },
    removeManager(manager) {
        const idx = this.managers.indexOf(manager);

        this.managers.splice(idx, 1);

        console.log(this.managers);
    },
    getProducts() {
        console.log(this.products);

        return this.products;
    }
};

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
store.removeManager('mango'); // ['poly', ajax', 'chelsey']
store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

/*  #3
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({ login, password, type = "regular" }) { // function constructor
    this.login = login;
    this.password = password;
    this.type = type;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
        return this.password;
    };

    this.getAccountInfo = function() {
        return `
        Login: ${this.login},
        Pass: ${this.password},
        Type: ${this.type}`;
    };
}

const account = new Account({  // run to see how CRLFs are preserved in the output
    login: "Mango",
    password: "qwe123",
    type: "premium"
});

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'
console.log(account.changePassword("asdzxc")); // 'asdzxc'
console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
