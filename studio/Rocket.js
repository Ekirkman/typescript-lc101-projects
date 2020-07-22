"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        var itemMass = 0;
        for (var i = 0; i < items.length; i++) {
            itemMass += items[i].massKg;
        }
        return itemMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var mass = 0;
        mass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return mass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
