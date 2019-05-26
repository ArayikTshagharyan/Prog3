
var random = require("../random.js");
module.exports = class LivingCreature {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
        this.remember
    }
    getNewCoordinates(count) {
        var arr = []
        this.directions = []
        for (var i = -count; i <= count; i++) {
            for (var j = -count; j <= count; j++) {
                if (j != 0 || i != 0) {
                    arr = [];
                    arr[0] = this.x + i
                    arr[1] = this.y + j
                    this.directions.push(arr)
                }
            }
        }
    }
    chooseCell(ch1, ch2, size) {
        this.getNewCoordinates(size)
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch1 || matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move(ch1, ch2, size) {
        var newCell = random(this.chooseCell(ch1, ch2, size));
        if (newCell) {
            matrix[this.y][this.x] = this.remember;
            var newX = newCell[0];
            var newY = newCell[1];
            this.remember = matrix[newCell[1]][newCell[0]]


            matrix[newY][newX] = this.index;
            this.y = newY;
            this.x = newX;
            this.energy--;
        }
    }

    eat(cell, arr, en) {
        var newCell = random(this.chooseCell(cell, cell, 1));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            for (var i in arr) {
                if (newX == arr[i].x && newY == arr[i].y) {
                    arr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
            this.energy += en;
        }

    }

}
