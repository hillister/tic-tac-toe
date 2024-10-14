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

    function isFull() {
        return board.every(cell => cell !== "");
    }

    return {
        getBoard,
        addMarker,
        isFull
    }
})();

const player = (function(name, marker) {
    return {name, marker}
})

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");



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

    return {
        checkWin
    }
    
})();


const displayUI = function (gamePlay){
    let currentPlayer = player1;
    let gameOver = false;

    function renderBoard() {
        const boardConatiner = document.getElementById("gameBoard");
        const displayMessages = document.getElementById("displayMessages")
        displayMessages.textContent = `${currentPlayer.name} starts`
        for(let i = 0; i < 9; i++){
            const button = document.createElement("button");
            button.textContent = "";
            button.setAttribute('data-index', i);
            button.addEventListener("click", handleClick);
            boardConatiner.appendChild(button);
            
        }
    }

    function handleClick(event) {
        const button = event.target; 
        const index = button.getAttribute("data-index");
        
        if(!gameOver && gameBoard.getBoard()[index] === ""){
            gameBoard.addMarker(index, currentPlayer.marker);
            button.textContent = currentPlayer.marker

            if(gamePlay.checkWin(gameBoard.getBoard(), currentPlayer.marker)){
                displayMessages.textContent = `${currentPlayer.name} wins!`
                gameOver = true;
                disableButtons()
                
            } else if(gameBoard.isFull()){
                gameOver = true;
                displayMessages.textContent = `It's a tie!`
                disableButtons()
            }
            else {
                currentPlayer = currentPlayer === player1 ? player2 : player1;
                displayMessages.textContent = `${currentPlayer.name}'s turn`
            }
        } else {
            displayMessages.textContent = `Invalid Choice`
        }
    }


    function disableButtons(){
        const buttons = document.querySelectorAll(`#gameBoard button`);
        buttons.forEach(button => {
            button.disabled = true;
        });
    }

    function reset(){
        const resetBtn = document.getElementById(`reset`)
        resetBtn.addEventListener("click", function(){
            gameBoard.getBoard().fill("");
            currentPlayer = player1
            document.getElementById("displayMessages").textContent = "";
            gameOver = false;
            const boardConatiner = document.getElementById("gameBoard");
            boardConatiner.innerHTML = ""
            renderBoard();
        })
    }

    return {
        renderBoard,
        reset
    }
    

}(gamePlay);

displayUI.renderBoard();
displayUI.reset();