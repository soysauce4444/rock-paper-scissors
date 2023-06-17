const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    var div = document.createElement('div');
    div.textContent = playRound(ComputerChoice, 'rock');
    document.body.appendChild(div);
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log(playRound(ComputerChoice, 'paper'));
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log(playRound(ComputerChoice, 'scissors'));
})

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

// determine the winner
function getWinner (computerScore, playerScore) {
    /*
    return (computerScore == playerScore) ? "This game is a tie." :
            (computerScore > playerScore) ? "I won the game.":
            "You won the game.";
            */
    return (computerScore == 5 && computerScore > playerScore) ? "I win the game." :
            (playerScore == 5 && computerScore < playerScore) ? "You win the game." :
            "This game isn't over yet!";
}

function playRound (ComputerChoice, playerChoice) {
    //  enable for single rounds
    ComputerChoice  = 
        (randInt(1,3) == 1) ? ComputerChoice = "rock" :
        (randInt(1,3) == 2) ? ComputerChoice = "paper" :
        "scissors";
    // var playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    
    // console.log("I chose: " + ComputerChoice + "\nYou chose: " + playerChoice);

    return (ComputerChoice == playerChoice) ? 
            "I chose: "+ ComputerChoice + "\nYou chose: " +
            playerChoice + "\nIt's a tie." :

           (ComputerChoice == "rock" && playerChoice == "scissors" ||
           ComputerChoice == "paper" && playerChoice == "rock" ||
           ComputerChoice == "scissors" && playerChoice == "paper") ? 
           "I chose: "+ ComputerChoice + "\nYou chose: " +
           playerChoice +"\nI win!":

           "I chose: "+ ComputerChoice + "\nYou chose: " + playerChoice + "\nI lose T_T";
}
/*
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
    console.log("\n" + getWinner(computerScore, playerScore));
    return ("Your score: " + playerScore + "\nMy score: " + computerScore);
}
*/
var ComputerChoice;
var playerChoice;

var computerScore = 0;
var playerScore = 0;