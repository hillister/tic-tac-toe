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
        if(board[index] === ""){
            board[index] = marker;
        }
    }

    return {
        getBoard,
        addMarker
    }
})();

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
    
        for(const combo of winningCombo){
            if (
                board[combo[0]] === marker &&
                board[combo[1]] === marker &&
                board[combo[2]] === marker
            ){
                return true
            } 
        }

        return false
    }

    currentPlayer = player1;
    while (true) {
        console.log(gameBoard.getBoard());

        index = prompt('Choose a space..');

        gameBoard.addMarker(index, currentPlayer.marker)

        if(checkWin(gameBoard.getBoard(), currentPlayer.marker)){
            console.log(`${currentPlayer.name} wins!`);
            break
        } 

        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
})();

//UI

const displayUI = function (){
    function renderBoard() {
        const boardConatiner = document.getElementById("gameBoard");

        for(let i = 0; i < 9; i++){
            const button = document.createElement("button");
            button.textContent = "";
            button.setAttribute('data-index', i);
            button.addEventListener("click", handleClick);
            boardConatiner.appendChild(button);
        }
    }

}