//random number generator for computer choice
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//assign computer choice from random number generator results
function getComputerChoice (randomInt) {
    if (randomInt == 1) {
        return "rock";
    }
    else if (randomInt == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//compare player & computer choices, return win or lose text
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose, paper beats rock."
    } 
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose, scissors beats paper."
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose, rock beats scissors."
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win, rock beats scissors!"
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win, paper beats rock!"
    } 
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win, scissors beats paper!"
    }
    else {
        return "Invalid input!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        randomInt = getRandomInt(1, 3);
        getComputerChoice(randomInt);
        computerSelection = getComputerChoice(randomInt);
        console.log(computerSelection);

        playerSelection = window.prompt("What's your choice?").toLowerCase();
        console.log(playerSelection);

        console.log(playRound(playerSelection, computerSelection));
    }
}

randomInt = getRandomInt(1, 3);
computerSelection = getComputerChoice(randomInt);
playerSelection = window.prompt("What's your choice?").toLowerCase();

console.log(game());


