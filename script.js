function setup() {
    var socket = io();
    var side = 29;
    var matrix = []
    var n = 29
    castle = loadImage('img/Castle.png');
    grassImg = loadImage('img/grass.png')
    beastImg = loadImage('img/Beast.png')
    grassEaterImg = loadImage('img/grasseater.png')
    hunterImg = loadImage('img/hunter.png')
    beastmasterImg = loadImage('img/beastmaster.png')
    destroyerImg = loadImage('img/destroyer.png')

    socket.on("data", drawCreatures);
    function drawCreatures(data) {
        matrix = data.matrix;
        season = data.weather
        createCanvas(n * side, n * side);
        background(120, 120, 120);
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    if (season == "winter") {
                        rect(x * side, y * side, side, side);
                        image(grassImg, x * side, y * side, side, side)
                    }
                    else  {
                        (season == "summer")
                        rect(x * side, y * side, side, side);
                        image(grassImg, x * side, y * side, side, side)
                    }
                }
                 if (matrix[y][x] == 2) {
                    fill("orange");
                    rect(x * side, y * side, side, side);
                    image(grassEaterImg, x * side, y * side, side, side)
                }

                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                    image(beastImg, x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 4) {
                    fill(100, 50, 130);
                    rect(x * side, y * side, side, side);
                    image(beastmasterImg, x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 5) {
                    fill("White");
                    rect(x * side, y * side, side, side);
                    image(hunterImg, x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 10) {
                    fill("darkcyan");
                    rect(x * side, y * side, side, side);
                    image(castle, x * side, y * side, side, side)
                }

                else if (matrix[y][x] == 6) {
                    fill(20, 20, 20);
                    rect(x * side, y * side, side, side);
                    image(destroyerImg, x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 0) {
                    fill(50, 50, 50);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == undefined) {
                    matrix[y][x] = 0
                }
            }
        }

    }
}


// io.on("connection", function (socket) {
//     socket.on("spanel")
// });

// io.on("connection", function (socket) {
//     socket.on("potorik")
// });

// io.on("connection", function (socket) {
//     socket.on("xot")
// });

// io.on("connection", function (socket) {
//     socket.on("xotaker")
// });