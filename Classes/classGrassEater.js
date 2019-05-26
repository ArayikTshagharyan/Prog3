
var LivingCreature = require("./ClassSuper")
var random = require("../random.js");
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 5;
    }


    move() {
        super.move(0, 0, 1);
    }
    eat() {
        super.eat(1, grassArr, 2)
    }
    mul() {
        var newCell = random(super.chooseCell(0, 0, 1));

        if (this.energy >= 8 && newCell) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 5;
        }
    }
    die(i) {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            grassEaterArr.splice(i, 1);

        }

    }
}




