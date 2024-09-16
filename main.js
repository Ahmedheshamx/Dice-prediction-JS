let currentSum = 0;
let previousRoll = 0;
let currentPlayer = 1; 
let playerTotals = [0, 0];
let winningScore = 30;



document.getElementById(`player1CurrentSum`).style.color = "rgba(255, 255, 255, 0.555)";
document.getElementById('rollButton').addEventListener('click', rollDice);
document.getElementById('holdButton').addEventListener('click', hold);
document.getElementById('newGameButton').addEventListener('click', newGame);




function rollDice() {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    let diceImage = `./img/dice${diceNumber}.png`; 
    document.getElementById('dice').src = diceImage; 






    if (diceNumber >= previousRoll) {
        currentSum += diceNumber;

    } else {
        currentSum = 0;
        document.getElementById('player' + currentPlayer + 'CurrentSum').innerText = currentSum;

        switchPlayer(); 
    }

    previousRoll = diceNumber;

    document.getElementById('player' + currentPlayer + 'CurrentSum').innerText = currentSum;
}

function hold() {
    playerTotals[currentPlayer - 1] += currentSum;

    currentSum = 0;
    previousRoll = 0;

    document.getElementById('player' + currentPlayer + 'CurrentSum').innerText = currentSum;
    document.getElementById('player' + currentPlayer + 'Total').innerText = playerTotals[currentPlayer - 1];

    if (playerTotals[currentPlayer - 1] >= winningScore) {
        document.getElementById('winnerMessage').innerText = 'Player ' + currentPlayer + ' wins!';
        disableButtons();
    } else {
        switchPlayer();
    }
}

function switchPlayer() {
    // if (currentPlayer === 1){
    //     currentPlayer=2
    //     document.getElementById(`player2CurrentSum`).style.color = "rgba(255, 255, 255, 0.555)";
    //     document.getElementById(`player1CurrentSum`).style.color = "black";
    // }else {
    //     currentPlayer=1
    //     document.getElementById(`player1CurrentSum`).style.color = "rgba(255, 255, 255, 0.555)";
    //     document.getElementById(`player2CurrentSum`).style.color = "black";

    // }
    document.getElementById('player1CurrentSum').style.color = currentPlayer === 1 ? 'black' : 'rgba(255, 255, 255, 0.555)';
    document.getElementById('player2CurrentSum').style.color = currentPlayer === 2 ? 'black' : 'rgba(255, 255, 255, 0.555)';

    currentPlayer = currentPlayer === 1 ? 2 : 1;


    document.getElementById('player1CurrentSum').innerText = 0;
    document.getElementById('player2CurrentSum').innerText = 0;

    document.getElementById('winnerMessage').innerText = '';
}

function newGame() {
    currentSum = 0;
    previousRoll = 0;
    currentPlayer = 1;
    playerTotals[0] = 0;
    playerTotals[1] = 0;

    document.getElementById('player1CurrentSum').innerText = currentSum;
    document.getElementById('player2CurrentSum').innerText = currentSum;
    document.getElementById('player1Total').innerText = playerTotals[0];
    document.getElementById('player2Total').innerText = playerTotals[1];
    document.getElementById('winnerMessage').innerText = '';

}

