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
