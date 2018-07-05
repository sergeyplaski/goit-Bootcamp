'use strict';

// call apply bind

// *********** call() ******************

const hotel = {
    name: 'Resort Hotel',
};
const hotel2 = {
    name: 'Four Seasons Hotel',
};

const hotel3 = {
    name: 'Super 8 Hotel',
};


function showName(name) {
    console.log(`${name} stays in ${this.name}`);
}
showName.call(hotel3, 'Tony');  // calls showName() with context hotel3

// **************** apply() *****************

showName.apply(hotel, ['Tony', 'Morocco']);
// showName.apply(hotel2,['Tony', 'Magadan']);
// showName.apply(hotel3,['Tony', 'Paris','Zhmerynka']);

// call - list of parameters with comma
// apply - list of parameters: Array

// ************** bind() ***********************
const boundShowName = showName.bind(hotel);
boundShowName(); // context = hotel


// ********* CONSTRUCTORS *****************

/*
const mick = {  // object mick
    name: 'Mick',
    modules: 3,
    learn(theme) {
        this.modules += 1;
        return `Student ${this.name} passed ${theme}`;
    }
};


const jane = {  // object jane
    name: 'Jane',
    modules: 5,
    learn(theme) {
        this.modules += 1;
        return `Student ${this.name} passed ${theme}`;
    }
};
*/

// constructor
function Student(name, modules ) {
    // this = {}
    this.name = name;
    this.modules = modules;
    this.learn = function (theme) {
        this.modules += 1;
        return `Student ${this.name} passed ${theme}`;
    };
    this.isActive = true
    // {
    // name: nameArg,
    // modules: modulesArg,
    // learn: func,
    // isActive: true
    // }
    // return this
}

const mick = new Student('Mick', 5); // {}
const jane = new Student("Jane", 3);
console.log(mick);
console.log(jane);

function User(setting) { // obj with settings
    this.age = setting.age;
    this.name = setting.name;
    this.isActive = setting.isActive;
    this.isPremium = setting.isPremium;
    this.likesCount = setting.likesCount;

    this.showLikes = function () {
        return this.likesCount;
    }
}

//
const jack = new User({age: 25,name: 'Jack',isActive: true,isPremium: true,likesCount: 500});
const mike = new User({name: 'Mike',age: 30,likesCount: 150,isActive: false,isPremium: true}); // parameters are in different order, but still works
console.log(jack);
console.log(mike);

// constructor with default parameter of the function
function UserD({age, name, isActive = false, isPremium = false, likesCount = 0}) {
    this.age = age;
    this.name = name;
    this.isActive = isActive;
    this.isPremium = isPremium;
    this.likesCount = likesCount;

    this.showLikes = function () {
        return this.likesCount;
    }
}
//
const juke = new UserD ({age: 25,name: 'Juke', isPremium: true});