function randInt (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min);
}

function playRound (getComputerChoice, playerChoice) {
    getComputerChoice  = 
        (randInt(1,3) == 1) ? getComputerChoice = "rock" :
        (randInt(1,3) == 2) ? getComputerChoice = "paper" :
        "scissors";
    var playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    console.log("I chose: ", getComputerChoice);
    console.log("You chose: ", playerChoice);
    return (getComputerChoice == playerChoice) ? "It's a tie." :

           (getComputerChoice == "rock" && playerChoice == "scissors" ||
           getComputerChoice == "paper" && playerChoice == "rock" ||
           getComputerChoice == "scissors" && playerChoice == "paper") ? "I win!" :

           "I lose T_T";
}

function game() {
    for (i = 0; i < 5; i++) {
        /*
        var getComputerChoice = 
            (randInt(1,3) == 1) ? getComputerChoice = "rock" :
            (randInt(1,3) == 2) ? getComputerChoice = "paper" :
            "scissors";
        var playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
*/
        playRound(getComputerChoice, playerChoice);
    }
}

var getComputerChoice;
var playerChoice;

console.log(game());