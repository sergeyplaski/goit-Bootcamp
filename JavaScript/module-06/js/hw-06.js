'use strict';

/*
  Сеть фастфудов предлагает несколько видов гамбургеров.

  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)

  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)

  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

// use this method of writing the menu:
const menu = {
    size: {
        small: {
            name: 'small',
            price: 100,
            calories: 100,
        },
        large: {
            name: 'large',
            price: 250,
            calories: 350,
        }
    },
    stuffing: {
        cheese: {
            name: 'cheese',
            price: 15,
            calories: 20,
        },
        salad: {
            name: 'salad',
            price: 20,
            calories: 5,
        },
        meat: {
            name: 'meat',
            price: 35,
            calories: 15,
        }
    },
    topping: {
        spice: {
            name: 'spice',
            price: 10,
            calories: 0,
        },
        sauce: {
            name: 'sauce',
            price: 15,
            calories: 5,
        }
    }
};

// not needed as we can access the objects directly, but can be used for readability
/*
const MENU_SIZE_LARGE = menu.size.large;
const MENU_SIZE_SMALL = menu.size.small;
const MENU_STUFFING_CHEESE = menu.stuffing.cheese;
const MENU_STUFFING_SALAD = menu.stuffing.salad;
const MENU_STUFFING_MEAT = menu.stuffing.meat;
const MENU_TOPPING_SPICE = menu.topping.spice;
const MENU_TOPPING_SAUCE = menu.topping.sauce;
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */
    constructor(size, stuffing) {
        if (arguments.length < 2) {
            return `Error: both size and stuffing arguments are required when creating object ${this}`;
        }

        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
    }

    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping) {
        if (this._toppings.includes(topping)) {
            return `You already have ${topping} on your hamburger!`;
        } else {
            this._toppings.push(topping);
            console.log(' #added topping: ', topping);
        }
    }

    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
        if (this._toppings.includes(topping)) {
            this._toppings = this._toppings.filter(val => val !== topping); // remember: filter() returns the altered array
            console.log(' #removed topping: ', topping);
        } else {
            console.log(`Can't remove ${topping} - you haven't ordered it on your hamburger`);
        }
    }

    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */
    get toppings() {
        return this._toppings;
    }

    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */
    get size() {
        return this._size;
    }

    /**
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */
    get stuffing() {
        return this._stuffing;
    }

    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    get price() {
        return Hamburger.SIZES[this.size].price
            + Hamburger.STUFFINGS[this.stuffing].price
            + this.toppings.map(item => Hamburger.TOPPINGS[item].price).reduce((total, price) => total + price, 0);
    }

    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */
    get calories() {
        return Hamburger.SIZES[this.size].calories
            + Hamburger.STUFFINGS[this.stuffing].calories
            + this.toppings.map(item => Hamburger.TOPPINGS[item].calories).reduce((total, cal) => total + cal, 0);
    }
}

/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/

// static properties of the Hamburger class
// can be accessed ONLY from the Class itself
// not created/available in each instance of the class
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

// note the syntax for the keys with []
// accessing objects: Hamburger.SIZES[key]
// returns object retrieved from the menu object
Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: menu.size.small,
    [Hamburger.SIZE_LARGE]: menu.size.large,
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: menu.stuffing.cheese,
    [Hamburger.STUFFING_SALAD]: menu.stuffing.salad,
    [Hamburger.STUFFING_MEAT]: menu.stuffing.meat,
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: menu.topping.spice,
    [Hamburger.TOPPING_SAUCE]: menu.topping.sauce,
};


/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(' #created new burger ', hamburger);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calories);

// Сколько стоит?
console.log("Price: ", hamburger.price);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log('Our burger now:', hamburger);
// А сколько теперь стоит?
console.log("Price with sauce and spice: ", hamburger.price);
console.log("Calories with sauce and spice: ", hamburger.calories);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.price);
console.log("Calories with sauce: ", hamburger.calories);
/*
  🔔 Обратите внимание на такие моменты:
    	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
    		другой код, а класс живет в изоляции от мира

    	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
		чтобы нельзя было создать объект, не указав их

    	✔️ необязательные (добавка) добавляем через методы

    	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")

    	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.

    	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
      		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
		логично в тот момент, когда это потребуется, а не заранее.
*/