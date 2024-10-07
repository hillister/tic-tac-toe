const gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    function getBoard(){
        return board
    }

    function addMarker(index, marker){
        if(index = ""){
            board[index] = marker;
        }
    }

    return {
        getBoard,
        addMarker
    }
})

const player = (function(name, marker) {
    return {name, marker}
})

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

