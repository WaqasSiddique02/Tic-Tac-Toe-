var gameover= new Audio('assets/sounds/Game Over.wav');

var turn="X";
var move=0;

function changeTurn(){
    move++;

    if (checkWin()) {
        $("h2").text("Player " + turn + " Wins!");
        gameover.play();
        return ;
    }

    if(turn==="X"){
        $("h2").text("Player Two's Turn");
        turn= "O";
    }

    else{
        $("h2").text("Player One's Turn");
        turn= "X";
    }

    if(move===9){
        $("h2").text("Draw!!!");
        gameover.play();
    }
}

function checkWin(){
    var winCombos=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];

    for (var i = 0; i < winCombos.length; i++) {
        var combo = winCombos[i];
        var a = $(".container:nth-child(" + combo[0] + ") .box-text").text();
        var b = $(".container:nth-child(" + combo[1] + ") .box-text").text();
        var c = $(".container:nth-child(" + combo[2] + ") .box-text").text();

        if (a === b && b === c && a !== "") {
            return true; 
        }
    }

    return false;
}


$(".container").click(function(){
    var placeClicked = $(this);
    var boxText = placeClicked.find(".box-text");

    if (boxText.text() !== "") {
        return; 
    }

    boxText.text(turn);
    changeTurn();
});
