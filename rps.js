
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

function getPlayerSelection() {
    let promptChoice = window.prompt("Choose Rock, Paper, or Scissors.", "Rock").toUpperCase();

    while (promptChoice == "" || promptChoice == null) {
        promptChoice = window.prompt("TRY AGAIN.\n Choose Rock, Paper, or Scissors.", "Rock").toUpperCase();
    }

    return promptChoice;
}

function playRound(playerSelection, computerChoice) {

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


function game() {
    let playerScore = 0;
    let computerScore = 0;
        let computerChoice = getComputerChoice();
        let playerSelection = getPlayerSelection();
        let gameResult = playRound(playerSelection,computerChoice);
        console.log(playerSelection);
        console.log(computerChoice);
        console.log(gameResult);
        if (gameResult == "You Win! Rock beats Scissors." || gameResult == "You Win! Paper beats Rock." || gameResult == "You Win! Scissors beats Paper.") {
            playerScore++;
        }
        if (gameResult == "You Lose! Rock loses to Paper." || gameResult == "You Lose! Scissors loses to Rock." || gameResult == "You Lose! Paper loses to Scissors.") {
            computerScore++;
        }
    console.log("Player Score: "+playerScore);
    console.log("Computer Score: "+computerScore);
}

game();
