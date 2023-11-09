/*getComputerChoice will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

user calls game() which loops 5 times, calling playRound

playRound takes two parameters, the playerSelection and the computerSelection
    after returning a result, increment round number by 1, and winner score by 1    

playerSelection is taken from prompt() and made all uppercase.

computerSelection is taken from a random number generator from 1-9
    0 = Rock
    1 = Paper
    2 = Scissors

Rock cases
if playerSelection == ROCK && computerSelection == ROCK 
    then return console.log("Tie! Rock draws with Rock.")
if playerSelection == ROCK && computerSelection == "PAPER"
    then return console.log("You Lose! Paper beats Rock.")
if playerSelection == ROCK && computerSelection == "SCISSORS"
    then return console.log("You Win! Rock beats Paper.")

Paper cases
if playerSelection == "PAPER" && computerSelection == ROCK
    then return console.log("You Win! Paper beats Rock.")
if playerSelection == "PAPER" && computerSelection == "PAPER"
    then return console.log("Tie! Paper draws with Paper.")
if playerSelection == "PAPER" && computerSelection == "SCISSORS"
    then return console.log("You Lose! Scissors beats Paper.")

Scissors cases
if playerSelection == "SCISSORS" && computerSelection == ROCK
    then return console.log("You Lose! Rock beats Paper.")
if playerSelection == "SCISSORS" && computerSelection == "PAPER"
    then return console.log("You Win! Scissors beats Paper.")
if playerSelection == "SCISSORS" && computerSelection == "SCISSORS"
    then return console.log("Tie! Scissors draws with Scissors.")

*/

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

let computerChoice = getComputerChoice();

let playerSelection = window.prompt("Choose Rock, Paper, or Scissors.", "Rock").toUpperCase();

while (playerSelection == "" || playerSelection == null) {
    playerSelection = window.prompt("TRY AGAIN.\n Choose Rock, Paper, or Scissors.", "Rock").toUpperCase();
}

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