
// Fetch Elements
const scoreBoard = document.querySelector('.scoreBoard');
const messageBox = document.querySelector('.messageBox');

// Add text content
scoreBoard.textContent = '0-0';
messageBox.textContent = 'Rock paper scissors, best of 5 rounds. Click one of the buttons to play';

// Add event listeners to buttons
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', handleClick));

// Variables for score and round number
let roundNum = 0;
let currentPlayerScore = scoreBoard.textContent[0];
let currentComputerScore = scoreBoard.textContent[2];

function handleClick(e) {
    playRound(e.target.textContent);
}

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3) + 1;
    switch(randomInt) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(userIn) {
    ++roundNum;
    let computerChoice = getComputerChoice();
    let playerChoice = userIn;

    // Tie
    if (playerChoice === computerChoice) {
        if (!isGameOver(currentPlayerScore, currentComputerScore)) {
            messageBox.textContent = 'Tie! no points awarded.';
        }
    }

    // Player wins
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors' || 
                playerChoice ==='Paper' && computerChoice === 'Rock' ||
                playerChoice === 'Scissors' && computerChoice === 'Paper') {
        ++currentPlayerScore;
        if (!isGameOver(currentPlayerScore, currentComputerScore)){
            messageBox.textContent = 'Player wins!';
            scoreBoard.textContent = `${currentPlayerScore}-${currentComputerScore}`;
        }
    }
    
    // Computer wins
    else {
        ++currentComputerScore;  
        if (!isGameOver(currentPlayerScore, currentComputerScore)){
            messageBox.textContent = 'Computer wins!';
            scoreBoard.textContent = `${currentPlayerScore}-${currentComputerScore}`;
        }
    }
}

function isGameOver(playerScore, computerScore) {
    if (playerScore == 3 || computerScore == 3 || roundNum === 5) {
        scoreBoard.textContent=`${playerScore}-${computerScore}`;
        messageBox.textContent = `Game over! The final score is ${playerScore}-${computerScore}`;
        buttons.forEach(button => button.removeEventListener('click', handleClick));
        return true;
    }
    return false;
}





