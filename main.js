//const choices = ["rock", "paper", "scissors"]
//const winners = []
//
//function startGame(){
//let playerChoice = document.querySelectorAll(".player-choice")
//playerChoice.forEach((choice) =>
//playerChoice.addEventListener(("click"), () => {
//    if(playerChoice.id){
//        playRound(playerChoice.id);
//    }
//}))
//}
////function game() {
//  //  for(let i = 0; i <= 4; i++) {
//  //      playRound();
//  //  }
//  //  logWins();
////}
//
//function playRound(playerChoice) {
//    let wins = winCount();
//    if(wins >= 5){
//        return
//    }
//    
//    const playerSelection = playerChoice();
//    const computerSelection = computerChoice();
//    const winner = checkWinner(playerSelection, computerSelection);
//    console.log(winner);
//    winners.push(winner);
//}
//
//
////function playerChoice() {
////    let input = prompt("Type Rock, Paper, or Scissors");
////    while (input == null) {
////        input = prompt("Type Rock, Paper, or Scissors");
////    }
////    input = input.toLocaleLowerCase();
////    let check = validateInput(input);
////    if (check == true) {
////       return input;
////    }
////   
////}
//function winCount(){
//    let playerWins = winners.filter(item => item == "Player").length;
//    let computerWins = winners.filter(item => item == "Computer").length;
//    return Math.max(playerWins,computerWins)
//}
//function computerChoice() {
//    return choices[Math.floor(Math.random() * choices.length)];
//}
//
//function validateInput(choice) {
//    if (choices.includes(choice)) {
//        return true;
//    } else {
//        return false;
//    }
//}
//
//function checkWinner(pChoice, cChoice) {
//    console.log(pChoice,cChoice);
//    if (pChoice === cChoice) {
//        return "Tie";
//    } else if (
//        (pChoice == "rock" && cChoice == "scissors") ||
//        (pChoice == "scissors" && cChoice == "paper") ||
//        (pChoice == "scissors" && cChoice == "paper")) {
//        return "Player";
//    } else {
//        return "Computer";
//    }
//}
//function logWins(){
//    let playerWins = winners.filter(item => item == "Player").length;
//    let computerWins = winners.filter(item => item == "Computer").length;
//    let ties = winners.filter((item) => item == "Tie").length;
//    console.log('Results:')
//    console.log('Player Wins:', playerWins)
//    console.log('Computer Wins:',computerWins)
//    console.log('Ties:',ties)
//}
////game();  TESTING NEW RPS
//function winCount(){
//    let playerWins = winners.filter(item => item == "Player").length;
//    let computerWins = winners.filter(item => item == "Computer").length;
//    return Math.max(playerWins,computerWins)
//}

const game = () => {
    let pScore = 0;
    let cScore = 0;
    // start the game 
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = ''
            });
        });
        //Computers Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // call compare hands
                setTimeout(()=>{
                        compareHands(this.textContent, computerChoice);
                //update hand images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
                },2000);
            

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    //update the score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    //check winner
    const compareHands = (playerChoice, computerChoice) => {
        //updates the text
        const winner = document.querySelector('.winner')
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie.";
            //counter++;
            return;
        } else if (
            (playerChoice == "rock" && computerChoice == "scissors") ||
            (playerChoice == "scissors" && computerChoice == "paper") ||
            (playerChoice == "scissors" && computerChoice == "paper")) {
            winner.textContent = "Player Wins!";
            counter++;
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Computer Wins.";
            //counter++;
            cScore++;
            updateScore();
            return;
        }
    }


    // call all the inner functions
    startGame();
    playMatch();
};


game();