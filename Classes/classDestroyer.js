
var random = require("../random.js");

module.exports = class Destroyer {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;
        this.points = 0
        this.timer = 30;
        this.away = false

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
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] <= 9) {


                found.push(this.directions[i]);


            }

        }
        return found;
    }
    move() {
        var newCell = random(this.chooseCell(2));


        if (newCell && matrix[newCell[1]][newCell[0]] <= 9) {

            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 0;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    this.points -= 1;
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    this.points += 4;
                    break;
                }
            }
            for (var i in BeastArr) {
                if (newX == BeastArr[i].x && newY == BeastArr[i].y) {
                    BeastArr.splice(i, 1)
                    this.points += 6;
                    break;
                }
            }
            for (var i in BeastMasterArr) {
                if (newX == BeastMasterArr[i].x && newY == BeastMasterArr[i].y) {
                    BeastMasterArr.splice(i, 1)
                    this.points += 16;
                    break;
                }
            }
            for (var i in HunterArr) {
                if (newX == HunterArr[i].x && newY == HunterArr[i].y) {
                    HunterArr.splice(i, 1);
                    this.points += 20;
                    break;
                }
            }
        }

        matrix[this.y][this.x] = 0;
        matrix[newY][newX] = this.index;
        this.y = newY;
        this.x = newX;
        this.destroy();
        this.energy--;

        this.return();

    }

    return() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            CastleArr[0].points = this.points
            DestroyerArr.splice(0, 1)


        }
    }

    destroy() {
        var newCell = this.chooseCell(3);


        if (newCell) {
            for (var i in newCell) {

                var newX = newCell[i][0];
                var newY = newCell[i][1];

                matrix[newY][newX] = 0;


                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        this.points -= 1;
                        break;
                    }
                }
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        this.points += 4;
                        break;
                    }
                }
                for (var i in BeastArr) {
                    if (newX == BeastArr[i].x && newY == BeastArr[i].y) {
                        BeastArr.splice(i, 1)
                        this.points += 6;
                        break;
                    }
                }
                for (var i in BeastMasterArr) {
                    if (newX == BeastMasterArr[i].x && newY == BeastMasterArr[i].y) {
                        BeastMasterArr.splice(i, 1)
                        this.points += 16;
                        break;
                    }
                }
                for (var i in HunterArr) {
                    if (newX == HunterArr[i].x && newY == HunterArr[i].y) {
                        HunterArr.splice(i, 1);
                        this.points += 20;
                        break;
                    }
                }
            }
        }
    }
}



