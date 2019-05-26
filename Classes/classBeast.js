
var LivingCreature = require("./ClassSuper.js")
var random = require("../random.js");
module.exports = class Beast extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 20;
    }


    move() {
        super.move(0, 1, 2)
    }
    eat() {
        super.eat(2, grassEaterArr, 3)
    }
    mul() {
        var newCell = random(this.chooseCell(0, 1, 1));
        if (this.energy >= 25 && newCell) {
            var newBeast = new Beast(newCell[0], newCell[1], this.index);
            BeastArr.push(newBeast);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 20;
        }
    }
    die(i) {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            BeastArr.splice(i, 1);

        }

    }


}