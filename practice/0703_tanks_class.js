'use strict';

class Tank {
    constructor(coordinates, player, color) {
        //properties
        this.coordinates = coordinates;
        this.life = 100;
        this.ammo = 5;
        this.engineStatus = true;
        this.name = player;
        this.color = color;
    }

    //methods
    moveToX(x) { this.engineStatus ? this.coordinates[0] += x : null };
    moveToY(y) { this.engineStatus ? this.coordinates[1] += y : null };
    moveTo(x, y) { this.engineStatus ? (this.coordinates[0] += x, this.coordinates[1] += y) : null};
    fireTo(x, y) { console.log(this._canFire() ? (console.log('BOOM!'), this.ammo -= 1) : 'out of ammo!') };
    _canFire() { return this._checkHealth() && this.ammo > 0 };
    _checkHealth() { return this.life > 0};
    heal(x) {
        !this.engineStatus ? this.engineStatus = true : null;
        this.life <= 100 ? this.life += x : null;
    };
    _checkEngine() {
        !this._checkHealth() ? this.engineStatus = false : null;
        return this.engineStatus;
    };
    repairEngine() { this.engineStatus = true; };

    showCoordinates() {
        //alert(`X = ${this.coordinates[0]}, Y = ${this.coordinates[1]}`);
        console.log(this.coordinates);
    }
}

let tank1 = new Tank([10,10], 'Player 1', 'red');
let tank2 = new Tank([15,15], 'Player 2', 'blue');
let tank3 = new Tank([25,25], 'Player 3', 'green');

console.log(tank1);
tank1.moveTo(20, 20);
tank1.showCoordinates();
for (let i = 0; i < 6; i++) tank1.fireTo(70,70);

// tank1.engineStatus = false;
// tank1.life -= 50;
// console.log(tank1);
//
// tank1.life -= 50;
// console.log(tank1);
// tank1.repairEngine();
console.log(tank1);
