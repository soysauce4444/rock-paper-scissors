// RNG
function randInt (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min);
}

// keep score
function getScore (ComputerChoice, playerChoice) {
    return (ComputerChoice == playerChoice) ? "No change in score" :

           (ComputerChoice == "rock" && playerChoice == "scissors" ||
           ComputerChoice == "paper" && playerChoice == "rock" ||
           ComputerChoice == "scissors" && playerChoice == "paper") ? computerScore++:

           playerScore++;
}

// report winner or loser


function playRound (ComputerChoice, playerChoice) {
    /*  enable for single rounds
    ComputerChoice  = 
        (randInt(1,3) == 1) ? ComputerChoice = "rock" :
        (randInt(1,3) == 2) ? ComputerChoice = "paper" :
        "scissors";
    var playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    */
    console.log("I chose: ", ComputerChoice);
    console.log("You chose: ", playerChoice);
    return (ComputerChoice == playerChoice) ? "It's a tie." :

           (ComputerChoice == "rock" && playerChoice == "scissors" ||
           ComputerChoice == "paper" && playerChoice == "rock" ||
           ComputerChoice == "scissors" && playerChoice == "paper") ? "I win!":

           "I lose T_T";
}

function game() {
    for (i = 0; i < 2; i++) {
        
        var ComputerChoice = 
            (randInt(1,3) == 1) ? ComputerChoice = "rock" :
            (randInt(1,3) == 2) ? ComputerChoice = "paper" :
            "scissors";
        var playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();

        getScore(ComputerChoice, playerChoice);

        console.log(playRound(ComputerChoice, playerChoice));
    }
    return ("Your score: " + playerScore + "\nMy score: " + computerScore);
}

var ComputerChoice;
var playerChoice;

var computerScore = 0;
var playerScore = 0;

console.log(game());