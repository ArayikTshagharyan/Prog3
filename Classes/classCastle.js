
var random = require("../random.js");



module.exports = class Castle {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.g = 0
        this.index = index;
        this.points = 0
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
    chooseCell(size) {


        this.getNewCoordinates(size);
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                found.push(this.directions[i]);


            }

        }
        return found;
    }
    grow() {

        if (this.points >= 50) {
            this.g += Math.floor((this.points / 50))
            var newCell = this.chooseCell(this.g);


            if (newCell) {
                for (var i in newCell) {

                    var newX = newCell[i][0];
                    var newY = newCell[i][1];




                    for (var i in grassArr) {
                        if (newX == grassArr[i].x && newY == grassArr[i].y) {

                            grassArr.splice(i, 1);
                            matrix[newY][newX] = 0
                            break;
                        }
                    }
                    for (var i in grassEaterArr) {
                        if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            matrix[newY][newX] = 0

                            break;
                        }
                    }
                    for (var i in BeastArr) {
                        if (newX == BeastArr[i].x && newY == BeastArr[i].y) {
                            BeastArr.splice(i, 1)
                            matrix[newY][newX] = 0
                            break;
                        }
                    }
                    for (var i in BeastMasterArr) {
                        if (newX == BeastMasterArr[i].x && newY == BeastMasterArr[i].y) {
                            BeastMasterArr.splice(i, 1)
                            matrix[newY][newX] = 0
                            break;
                        }
                    }
                    for (var i in HunterArr) {
                        if (newX == HunterArr[i].x && newY == HunterArr[i].y) {
                            HunterArr.splice(i, 1);
                            matrix[newY][newX] = 0
                            break;
                        }
                    }
                    matrix[newY][newX] = 10;
                }
            }
            this.points = 0
        }
        else if (this.points <= -50 && this.g >= 0) {

            this.points = 0
            var newCell = this.chooseCell(this.g);


            if (newCell) {
                for (var i in newCell) {

                    var newX = newCell[i][0];
                    var newY = newCell[i][1];

                    matrix[newY][newX] = 0;

                }
            }
            this.g -= 1
            var newCell = this.chooseCell(this.g);


            if (newCell) {
                for (var i in newCell) {

                    var newX = newCell[i][0];
                    var newY = newCell[i][1];

                    matrix[newY][newX] = 10;

                }
            }

        }

    }
}