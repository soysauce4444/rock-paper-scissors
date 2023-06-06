function randInt (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min);
}

function playRound (getComputerChoice, playerChoice) {
    getComputerChoice;
    playerChoice;
    console.log("I chose: ", getComputerChoice);
    console.log("You chose: ", playerChoice);
    return (getComputerChoice == playerChoice) ? "It's a tie." :

           (getComputerChoice == "rock" && playerChoice == "scissors" ||
           getComputerChoice == "paper" && playerChoice == "rock" ||
           getComputerChoice == "scissors" && playerChoice == "paper") ? "I win!" :

           "I lose T_T";
}

var getComputerChoice = 
    (randInt(1,3) == 1) ? getComputerChoice = "rock" :
    (randInt(1,3) == 2) ? getComputerChoice = "paper" :
    "scissors";
var playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();

console.log(playRound(getComputerChoice,playerChoice));