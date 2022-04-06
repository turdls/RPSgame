const choices = ["rock", "paper", "scissors"]
const winners = []
function game() {
    for(let i = 0; i <= 4; i++) {
        playRound();
    }
    logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLocaleLowerCase();
    let check = validateInput(input);
    if (check == true) {
       return input;
    }
    
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(pChoice, cChoice) {
    console.log(pChoice,cChoice);
    if (pChoice === cChoice) {
        return "Tie";
    } else if (
        (pChoice == "rock" && cChoice == "scissors") ||
        (pChoice == "scissors" && cChoice == "paper") ||
        (pChoice == "scissors" && cChoice == "paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}
function logWins(){
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log('Results:')
    console.log('Player Wins:', playerWins)
    console.log('Computer Wins:',computerWins)
    console.log('Ties:',ties)
}
game();