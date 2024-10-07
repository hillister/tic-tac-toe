const gameBoard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    //get the board
    function getBoard(){
        return board
    }

    //add marks to board
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

console.log(gameBoard)