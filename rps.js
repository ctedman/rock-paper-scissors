
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return "ROCK";
    }
    else if (randomInt == 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function getPlayerSelection(choice) {
    return choice;
}

function playRound(playerSelection) {
 
    let computerChoice = getComputerChoice();

    if (playerSelection == "ROCK" && computerChoice == "ROCK") {
        return "Tie! Rock draws with Rock.";
    } 
    else if (playerSelection == "ROCK" && computerChoice == "PAPER") {
        return "You Lose! Rock loses to Paper.";
    }     
    else if (playerSelection == "ROCK" && computerChoice == "SCISSORS") {
        return "You Win! Rock beats Scissors.";
    }
    else if (playerSelection == "PAPER" && computerChoice == "ROCK") {
        return "You Win! Paper beats Rock.";
    }
    else if (playerSelection == "PAPER" && computerChoice == "PAPER") {
        return "Tie! Paper draws with Paper.";
    }
    else if (playerSelection == "PAPER" && computerChoice == "SCISSORS") {
        return "You Lose! Paper loses to Scissors.";
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "ROCK") {
        return "You Lose! Scissors loses to Rock.";
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "PAPER") {
        return "You Win! Scissors beats Paper.";
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "SCISSORS") {
        return "Tie! Scissors draws with Scissors.";
    }
}



function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;
        let computerChoice = getComputerChoice();
        let gameResult = playRound(playerSelection,computerChoice);
        console.log(playerSelection);
        console.log(computerChoice);
        console.log(gameResult);
        if (gameResult == "You Win! Rock beats Scissors." || gameResult == "You Win! Paper beats Rock." || gameResult == "You Win! Scissors beats Paper.") {
            playerScore++;
            scoreTracker.textContent = `Player Score: ${playerScore}   Computer Score: ${computerScore}`;
        }
        if (gameResult == "You Lose! Rock loses to Paper." || gameResult == "You Lose! Scissors loses to Rock." || gameResult == "You Lose! Paper loses to Scissors.") {
            computerScore++;
            scoreTracker.textContent = `Player Score: ${playerScore}   Computer Score: ${computerScore}`;
        }
    
    console.log("Player Score: "+playerScore);
    console.log("Computer Score: "+computerScore);
}

let rockButton = document.querySelector('.rock-btn');
let paperButton = document.querySelector('.paper-btn');
let scissorsButton = document.querySelector('.scissors-btn');
let scoreTracker = document.querySelector('.score');
let resultTracker = document.querySelector('.result');

rockButton.addEventListener('click', function(){
    let gameResult = playRound("ROCK");
    if (gameResult == "You Win! Rock beats Scissors." || gameResult == "You Win! Paper beats Rock." || gameResult == "You Win! Scissors beats Paper.") {
        playerScore++;
    }
    if (gameResult == "You Lose! Rock loses to Paper." || gameResult == "You Lose! Scissors loses to Rock." || gameResult == "You Lose! Paper loses to Scissors.") {
        computerScore++;
    }
    if (playerScore >= 5) {
        gameResult = "MATCH OVER. YOU WIN!"
    }
    if (computerScore >= 5) {
        gameResult = "MATCH OVER. YOU LOSE!"
    }
    resultTracker.textContent = `${gameResult}`;
    scoreTracker.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
});
paperButton.addEventListener('click', function(){
    let gameResult = playRound("PAPER");
    if (gameResult == "You Win! Rock beats Scissors." || gameResult == "You Win! Paper beats Rock." || gameResult == "You Win! Scissors beats Paper.") {
        playerScore++;
    }
    if (gameResult == "You Lose! Rock loses to Paper." || gameResult == "You Lose! Scissors loses to Rock." || gameResult == "You Lose! Paper loses to Scissors.") {
        computerScore++;
    }
    if (playerScore >= 5) {
        gameResult = "MATCH OVER. YOU WIN!"
    }
    if (computerScore >= 5) {
        gameResult = "MATCH OVER. YOU LOSE!"
    }
    resultTracker.textContent = `${gameResult}`;
    scoreTracker.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
});
scissorsButton.addEventListener('click', function(){
    let gameResult = playRound("SCISSORS");
    if (gameResult == "You Win! Rock beats Scissors." || gameResult == "You Win! Paper beats Rock." || gameResult == "You Win! Scissors beats Paper.") {
        playerScore++;
    }
    if (gameResult == "You Lose! Rock loses to Paper." || gameResult == "You Lose! Scissors loses to Rock." || gameResult == "You Lose! Paper loses to Scissors.") {
        computerScore++;
    }
    if (playerScore >= 5) {
        gameResult = "MATCH OVER. YOU WIN!"
    }
    if (computerScore >= 5) {
        gameResult = "MATCH OVER. YOU LOSE!"
    }
    resultTracker.textContent = `${gameResult}`;
    scoreTracker.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
});

let playerScore = 0;
let computerScore = 0;
