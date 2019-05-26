var n = 29
 grassArr = [];
 grassEaterArr = [];
 BeastArr = [];
 BeastMasterArr = [];
 HunterArr = [];
 DestroyerArr = [];
 CastleArr = [];
var end = false
var side = 20;
var timer = 30
var Grass = require("./Classes/classGrass.js")
var GrassEater = require("./Classes/classGrassEater.js")
var Beast = require("./Classes/classBeast.js")
var BeastMaster = require("./Classes/classBeastMaster.js")
var Hunter = require("./Classes/classHunter.js")
var Castle = require("./Classes/classCastle.js")
var Destroyer = require("./Classes/classDestroyer.js")
var random = require("./random.js")

 matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 6, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 4, 5, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 6, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 6, 0, 0, 1, 0, 0, 1, 4, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 4, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 5, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 6, 0, 0, 1, 1, 1, 1, 1, 5],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 4, 1, 1],
    [0, 0, 0, 0, 4, 1, 0, 0, 4, 0, 0, 1, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [2, 0, 5, 0, 0, 1, 0, 1, 1, 2, 2, 1, 1, 1, 5, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
    ];
var n = 29

// var chance = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 5]
// for (var y = 0; y < n; y++) {
//     matrix[y] = []
//     for (var x = 0; x < n; x++) {
//         matrix[y][x] = chance[Math.floor(Math.random(chance.length))]
//     }
// }
var a = Math.floor(n / 2)
var b = Math.floor(n / 2)
// matrix[b][a] = 10
// var newcastle = new Castle(a, b, 10);
// CastleArr.push(newcastle);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function createObjects() {
    // matrix[Math.floor(random(n))][Math.floor(random(n))] = 6

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);

            }
            else if (matrix[y][x] == 3) {
                var beast = new Beast(x, y, 3);
                BeastArr.push(beast);
            }
            else if (matrix[y][x] == 4) {
                var beastmaster = new BeastMaster(x, y, 4);
                BeastMasterArr.push(beastmaster);
            }
            else if (matrix[y][x] == 5) {
                var hunter = new Hunter(x, y, 5);
                HunterArr.push(hunter);
            }
            else if (matrix[y][x] == 6) {
                var newdestroyer = new Destroyer(x, y, 6);
                DestroyerArr.push(newdestroyer);
            }
        }
    }
}

createObjects();
{
let sendData = {
    matrix: matrix,
    weather: "winter"
}
let seasonDate = 0;
function game() {
    seasonDate++;
    if(seasonDate<=6)
    {
        sendData.weather = "winter"
    }
    else if(seasonDate<=12)
    {
        sendData.weather = "summer"
    }
    else  
    {
        seasonDate = 0;
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die(i);
        HunterAppear();
    }
    for (var i in BeastArr) {
        BeastArr[i].move();
        BeastArr[i].eat();
        BeastArr[i].mul();

        BeastArr[i].die(i);
        BeastMasterAppear();
    }
    for (var i in BeastMasterArr) {
        BeastMasterArr[i].move();
        BeastMasterArr[i].getpets();
        BeastMasterArr[i].die(i);

    }
    for (var i in HunterArr) {
        HunterArr[i].move();
        HunterArr[i].kill();
        HunterArr[i].die(i);
    }
    

    if (grassEaterArr.length == 0 && HunterArr.length == 0 && BeastArr.length == 0 && BeastMasterArr.length == 0) {
        end = true;
    }

    io.sockets.emit("data", sendData);
}
// function spanel(){
//     grassArr = [];
//     grassEaterArr = [];
//     BeastArr = [];
//     BeastMasterArr = [];
//     HunterArr = [];
//     DestroyerArr = [];
//     CastleArr = [];
//     for (let x = 0; x < matrix.length; x++) {
//         for (let y = 0; y < matrix.length; y++) {
//          matrix[y][x]=0
//         }
//     }

// }

// io.on("connection,", function (socket){
//     socket.on("spanel",  spanel)
// }

// setInterval(game, 1000)




    
    

grassArr = [];
BeastArr = [];
BeastMasterArr = [];
HunterArr = [];
DestroyerArr = [];
CastleArr = [];


function BeastMasterAppear() {
    if (BeastMasterArr.length < 3 && BeastArr.length != 0) {

        var x = BeastArr[0].x;
        var y = BeastArr[0].y;
        BeastArr.shift();
        matrix[y][x] = 0;
        var newbeasrmaster = new BeastMaster(x, y, 4);
        BeastMasterArr.push(newbeasrmaster);
        matrix[y][x] = 4;
    }

}
function HunterAppear() {
    if (HunterArr.length < 3 && grassEaterArr.length != 0) {
        var x = grassEaterArr[0].x;
        var y = grassEaterArr[0].y;
        grassEaterArr.shift();
        matrix[y][x] = 0;
        var newhunter = new Hunter(x, y, 5);
        HunterArr.push(newhunter);
        matrix[y][x] = 5;

    }

}
function DestroyerAppear() {
    if (DestroyerArr.length == 0 && end == false) {
        timer -= 1;
        if (timer == 0) {
            timer = 30;
            var x = Math.floor(random(n));
            var y = Math.floor(random(n));
            while (matrix[y][x] >= 10) {
                x = Math.floor(random(n));
                y = Math.floor(random(n));
            }

            var newdestroyer = new Destroyer(x, y, 6);
            DestroyerArr.push(newdestroyer);
            matrix[y][x] = 6;
        }
    
    }
}

// var statistics = { };

// setInterval(function (){
//     statistics.xArr = grass.Arr.length
//     statistics.earr = grassEaterArr.length
//     statistics.earr = BeastArr.length
//     statistics.earr = BeastMasterArr.length
//     statistics.earr = HunterArr.length
//     statistics.earr = DestroyerArr.length
//     statistics.earr = CastleArr.length

//     fs.writeFile("statistics.json", JSON.stringify(statistics ))
// }

// )
// setInterval(game, 10)
}