
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

let computerChoice = getComputerChoice();
let playerSelection = getPlayerSelection();

console.log(playerSelection);
console.log(computerChoice);

function playRound(playerSelection, computerChoice) {
    if (playerSelection == "ROCK" && computerChoice == "ROCK") {
        return "Tie! Rock draws with Rock.";
    } 
    else if (playerSelection == "ROCK" && computerChoice == "PAPER") {
        return "You Lose! Paper beats Rock.";
    }     
    else if (playerSelection == "ROCK" && computerChoice == "SCISSORS") {
        return "You Win! Rock beats Paper.";
    }
    else if (playerSelection == "PAPER" && computerChoice == "ROCK") {
        return "You Win! Paper beats Rock.";
    }
    else if (playerSelection == "PAPER" && computerChoice == "PAPER") {
        return "Tie! Paper draws with Paper.";
    }
    else if (playerSelection == "PAPER" && computerChoice == "SCISSORS") {
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "ROCK") {
        return "You Lose! Rock beats Paper.";
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "PAPER") {
        return "You Win! Scissors beats Paper.";
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "SCISSORS") {
        return "Tie! Scissors draws with Scissors.";
    }
}

console.log(playRound(playerSelection,computerChoice));

/*
function game() {
    for (let i = 0; i < 5; i++)
    playRound(playerSelection,computerChoice);
}
*/