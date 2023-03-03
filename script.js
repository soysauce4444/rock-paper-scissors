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

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function game(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } 
    else if (playerSelection == rock, computerSelection == paper) {
        return "You lose, paper beats rock."
    } 
    else if (playerSelection == paper, computerSelection == scissors) {
        return "You lose, scissors beats paper."
    } 
    else if (playerSelection == scissors, computerSelection == rock) {
        return "You lose, rock beats scissors."
    } 
    else if (playerSelection == rock, computerSelection == scissors) {
        return "You win, rock beats scissors!"
    } 
    else if (playerSelection == rock, computerSelection == scissors) {
        return "You win, rock beats scissors!"
    } 
    else if (playerSelection == rock, computerSelection == scissors) {
        return "You win, rock beats scissors!"
    } 
    else if (playerSelection == rock, computerSelection == scissors) {
        return "You win, rock beats scissors!"
    } 
    else {
        return "WIP"
    }
}


randomInt = getRandomInt(1, 3);
computerSelection = getComputerChoice(randomInt);
playerSelection = window.prompt("What's your choice?").toLowerCase();

console.log(computerSelection);
console.log(playerSelection);
console.log(game(playerSelection, computerSelection));


