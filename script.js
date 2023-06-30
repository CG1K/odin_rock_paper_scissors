choices = ['rock', 'paper', 'scissors'];

let computerSelection;
let playerSelection;

let initChoice;

let winner;

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function checkChoiceValidity(playerChoice) {
    while( playerChoice == null || playerChoice == '' || !(choices.includes(playerChoice.toLowerCase())) ) {
        if(playerChoice == null || playerChoice == '') {
            playerChoice = prompt("You didn't pick! Please pick between rock, paper, and scissors");
        } else {
            playerChoice = prompt("That's not a valid option! Please pick between rock, paper, and scissors");
        }
    }
     return playerChoice.toLowerCase();
}

function checkWinner(computerSelection, playerSelection) {
    while(computerSelection == playerSelection) {
        computerSelection = getComputerChoice();
        initChoice = prompt(' You chose the same option as the computer! Please pick again between rock, paper, and scissors');
        playerSelection = checkChoiceValidity(initChoice);
    }

    if( (computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection == 'rock') || 
    (computerSelection == 'scissors' && playerSelection == 'paper') ) {
        return 'Computer';
    } else {
        return 'Player';
    }
}

function updateScore() {
    winner == 'Computer' ? computerScore++ : playerScore++;
}

function playRound() {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    initChoice = prompt('Please pick between rock, paper, and scissors');
    playerSelection = checkChoiceValidity(initChoice);
    console.log(playerSelection + computerSelection);

    winner = checkWinner(computerSelection, playerSelection);

    updateScore();

    console.log(winner + ' wins! Computer now has ' + computerScore + ' point(s), and you now have ' + playerScore + ' point(s)');

    if(computerScore + playerScore == 5) {
        if(computerScore > playerScore) {
            console.log('As 5 games have been played, I can now declare that Computer is the overall winner!');
        } else {
            console.log('As 5 games have been played, I can now declare that you are the overall winner!');
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
    playRound();
    }
}

game();