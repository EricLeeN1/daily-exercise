window.onload = function () {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    var maps = new Array(15);
    for (let i = 0; i < 15; i++) {
        maps[i] = new Array(15);
        for (let j = 0; j < 15; j++) {
            maps[i][j] = 0;
        }
    }
    // 初始化棋盘
    let black = new Image();
    let white = new Image();
    let isBlack = true;
    let win = false;
    let blackChess = 2;
    let whiteChess = 1;

    black.src = "img/black.png";
    white.src = "img/white.png";


    function init() {
        ctx.strokeStyle = "#e1e1e1";
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                ctx.strokeRect(j * 20, i * 10, 20, 20);
            }
        }
    }

    init();
    canvas.onclick = function (event) {
        // let leftOffset = (screen.width - 600) / 2;
        // //点击canvas的坐标
        // let x = event.clientX-leftOffset,
        //     y = event.clientY-32;

        if (!win) {
            let x = event.offsetX,
                y = event.offsetY;
            let row, col;
            if (x % 40 >= 20) {
                row = parseInt(x / 40) + 1;
            } else {
                row = parseInt(x / 40);
            }
            if (y % 40 >= 20) {
                col = parseInt(y / 40) + 1;
            } else {
                col = parseInt(y / 40);
            }
            if (isBlack) {
                if (!maps[row][col]) {
                    ctx.drawImage(black, row * 20 - 10, col * 10 - 5, 18, 9);
                    maps[row][col] = blackChess;//黑
                    isBlack = !isBlack;
                    isWin(blackChess, row, col);
                } else {
                    alert('你不能在这下');
                }
            } else {
                if (!maps[row][col]) {
                    ctx.drawImage(white, row * 20 - 10, col * 10 - 5, 18, 9);
                    maps[row][col] = whiteChess;//白
                    isBlack = !isBlack;
                    isWin(whiteChess, row, col);
                } else {
                    alert('你不能在这下');
                }
            }
        } else {
            alert('已经分出胜负了');
        }
    };

    // @param 1白，2黑
    function isWin(t, row, col) {
        let orgrow = row,
            orgcol = col,
            total = 1;
        //垂直
        while ((col - 1 > 0 ) && (maps[row][col - 1] == t)) {
            total++;
            col--;
        }
        row = orgrow;
        col = orgcol;
        while ((col + 1 < 15) && (maps[row][col + 1] == t)) {
            col++;
            total++;
        }
        if (total >= 5) {
            if (t == 1) {
                alert("白棋赢了");
                win = true;
            } else {
                alert("黑棋赢了");
                win = true;
            }
        }
        //水平
        row = orgrow;
        col = orgcol;
        total = 1;
        while ((row - 1 > 0) && ((maps[row - 1][col] == t))) {
            row--;
            total++;
        }
        row = orgrow;
        col = orgcol;
        while ((row + 1 < 15) && (maps[row + 1][col] == t)) {
            row++;
            total++;
        }
        if (total >= 5) {
            if (t == 1) {
                alert("白棋赢了");
                win = true;
            } else {
                alert("黑棋赢了");
                win = true;
            }
        }
        //左下,右上
        row = orgrow;
        col = orgcol;
        total = 1;
        while ((row - 1 > 0 ) && (col + 1 < 15) && ((maps[row - 1][col + 1] == t))) {
            row--;
            col++;
            total++;
        }
        row = orgrow;
        col = orgcol;
        while ((row + 1 < 15) && (col - 1 > 0) && (maps[row + 1][col - 1] == t)) {
            row++;
            col--;
            total++;
        }
        if (total >= 5) {
            if (t == 1) {
                alert("白棋赢了");
                win = true;
            } else {
                alert("黑棋赢了");
                win = true;
            }
        }
        //左上,右下
        row = orgrow;
        col = orgcol;
        total = 1;
        while ((row - 1 > 0 ) && (col - 1 > 0) && ((maps[row - 1][col - 1] == t))) {
            row--;
            col--;
            total++;
        }
        row = orgrow;
        col = orgcol;
        while ((row + 1 < 15) && (col + 1 < 15) && (maps[row + 1][col + 1] == t)) {
            row++;
            col++;
            total++;
        }
        if (total >= 5) {
            if (t == 1) {
                alert("白棋赢了");
                win = true;
            } else {
                alert("黑棋赢了");
                win = true;
            }
        }
    }
};