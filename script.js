const gameBoard = (function () {
    let board = [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ];

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

//game logic

const gamePlay = (function () {

    function checkWin(board, marker){
        winningCombo = [    
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]  
        ]   
    
        for(combo in winningCombo){
            if (gameBoard[combo[0]]){
                return true
            } else {
                return false
            }
        }

    }
})