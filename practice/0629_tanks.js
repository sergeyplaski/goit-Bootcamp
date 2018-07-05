/*
Написати об'єкт tank який буде мати такі властивості і методи.
1) coordinate 10 координати Х
2)CoordinateY 10 координати по У
3) life 100 здоровя
4) ammunition 5  кількість патронів
5) engineStatus true статус двигуна
6) moveToX(x) рухається до точки х
6) moveToY(у) рухається до точки у
7) fireTo(x, y) стріляє в точку х, у
8) canFire() перевірка чи є патрони
9) checkHealth() перевірка чи є неповне здоров'я
10) heal(x) додає здоровя
11) checkEngine() перевірка статусу двигуна
12) repairEngine() починка двигуна
13) showCoordinate() показує координати танка
14)  name імя гравця
15) color
*/

/*
let tank = {
    coordinates: [X = 10, Y = 10],
    life: 100,
    ammo: 5,
    engineStatus: true,
    name: 'Player 1',
    color: 'red',
    moveToX(x) { tank.engineStatus ? tank.coordinates[0] += x : null },
    moveToY(y) { tank.engineStatus ? tank.coordinates[1] += y : null },
    moveTo(x,y) {tank.engineStatus ? (tank.coordinates[0] += x, tank.coordinates[1] += y) : null},
    fireTo(x,y) {
        console.log(tank.canFire() ? (console.log('BOOM!'), tank.ammo -= 1) : 'out of ammo!');
    },
    canFire() { return tank.checkHealth() && tank.ammo > 0 },
    checkHealth() { return tank.life > 0},
    heal(x) {
        !tank.engineStatus ? tank.engineStatus = true : null;
        tank.life <= 100 ? tank.life += x : null;
        },
    checkEngine() {
        !tank.checkHealth() ? tank.engineStatus = false : null;
        return tank.engineStatus;
        },
    repairEngine() { tank.engineStatus = true },
    showCoordinates() {
        //alert(`X = ${tank.coordinates[0]}, Y = ${tank.coordinates[1]}`);
        console.log(tank.coordinates);
        },
};
*/

/*
let tank = {
    coordinates: [X = 10, Y = 10],
    life: 100,
    ammo: 5,
    engineStatus: true,
    name: 'Player 1',
    color: 'red',
    moveToX(x) { this.engineStatus ? this.coordinates[0] += x : null },
    moveToY(y) { this.engineStatus ? this.coordinates[1] += y : null },
    moveTo(x,y) {this.engineStatus ? (this.coordinates[0] += x, this.coordinates[1] += y) : null},
    fireTo(x,y) { console.log(this.canFire() ? (console.log('BOOM!'), this.ammo -= 1) : 'out of ammo!') },
    canFire() { return this.checkHealth() && this.ammo > 0 },
    checkHealth() { return this.life > 0},
    heal(x) {
        !this.engineStatus ? this.engineStatus = true : null;
        this.life <= 100 ? this.life += x : null;
    },
    checkEngine() {
        !this.checkHealth() ? this.engineStatus = false : null;
        return this.engineStatus;
    },
    repairEngine() { this.engineStatus = true },
    showCoordinates() {
        //alert(`X = ${this.coordinates[0]}, Y = ${this.coordinates[1]}`);
        console.log(this.coordinates);
    },
};
*/

// with constructor:

function Tank(coordinates, player, color) {
    this.coordinates = coordinates;
    this.life = 100;
    this.ammo = 5;
    this.engineStatus = true;
    this.name = player;
    this.color = color;
    this.moveToX = function(x) { this.engineStatus ? this.coordinates[0] += x : null };
    this.moveToY = function(y) { this.engineStatus ? this.coordinates[1] += y : null };
    this.moveTo = function(x,y) {this.engineStatus ? (this.coordinates[0] += x, this.coordinates[1] += y) : null};
    this.fireTo = function(x,y) { console.log(this.canFire() ? (console.log('BOOM!'), this.ammo -= 1) : 'out of ammo!') };
    this.canFire = function() { return this.checkHealth() && this.ammo > 0 };
    this.checkHealth = function() { return this.life > 0};
    this.heal = function(x) {
        !this.engineStatus ? this.engineStatus = true : null;
        this.life <= 100 ? this.life += x : null;
    };
    this.checkEngine = function() {
        !this.checkHealth() ? this.engineStatus = false : null;
        return this.engineStatus;
    };
    this.repairEngine = function() { this.engineStatus = true },
    this.showCoordinates = function() {
        //alert(`X = ${this.coordinates[0]}, Y = ${this.coordinates[1]}`);
        console.log(this.coordinates);
    };
}

let tank1 = new Tank([10,10], 'Player 1', 'red');
let tank2 = new Tank([15,15], 'Player 2', 'blue');
let tank3 = new Tank([25,25], 'Player 3', 'green');

console.log(tank1);
tank1.moveTo(20, 20);
tank1.showCoordinates();
for (i = 0; i < 6; i++) tank1.fireTo(70,70);

// tank1.engineStatus = false;
// tank1.life -= 50;
// console.log(tank1);
//
// tank1.life -= 50;
// console.log(tank1);
// tank1.repairEngine();
console.log(tank1);
