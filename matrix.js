var n = 29
var matrix = []
var chance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 5]
for (var y = 0; y < n; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y][x] = chance[Math.floor(Math.random(chance.length))]
    }
}
module.exports = matrix
