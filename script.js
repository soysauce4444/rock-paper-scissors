const pnt = document.createElement('pnt');
document.body.appendChild(pnt);

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    var div = document.createElement('div');
    var computerChoice  = 
        (randInt(1,3) == 1) ? computerChoice = "rock" :
        (randInt(1,3) == 2) ? computerChoice = "paper" :
        "scissors";
    div.textContent = playRound(computerChoice, 'rock');
    getScore(computerChoice, 'rock');
    pnt.textContent = getWinner(computerScore, playerScore) + 
    ", My score; " + computerScore + 
    " your score: " + playerScore;
    document.body.appendChild(div);
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    var div = document.createElement('div');
    var computerChoice  = 
        (randInt(1,3) == 1) ? computerChoice = "rock" :
        (randInt(1,3) == 2) ? computerChoice = "paper" :
        "scissors";
    div.textContent = playRound(computerChoice, 'paper');
    getScore(computerChoice, 'paper');
    pnt.textContent = getWinner(computerScore, playerScore) + 
    ", My score; " + computerScore + 
    " your score: " + playerScore;
    document.body.appendChild(div);
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    var div = document.createElement('div');
    var computerChoice  = 
        (randInt(1,3) == 1) ? computerChoice = "rock" :
        (randInt(1,3) == 2) ? computerChoice = "paper" :
        "scissors";
    div.textContent = playRound(computerChoice, 'scissors');
    getScore(computerChoice, 'scissors');
    pnt.textContent = getWinner(computerScore, playerScore) + 
    ", My score; " + computerScore + 
    " your score: " + playerScore;
    document.body.appendChild(div);})

// RNG
function randInt (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min);
}

/*
const getComputerChoice  = function() { 
    return (randInt(1,3) == 1) ? computerChoice = "rock" :
    (randInt(1,3) == 2) ? computerChoice = "paper" :
    "scissors";
}
*/

// keep score
function getScore (computerChoice, playerChoice) {
    return (computerChoice == playerChoice) ? "No change in score" :

           (computerChoice == "rock" && playerChoice == "scissors" ||
           computerChoice == "paper" && playerChoice == "rock" ||
           computerChoice == "scissors" && playerChoice == "paper") ? computerScore++:

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

function playRound (computerChoice, playerChoice) {
    return (computerChoice == playerChoice) ? 
            ("I chose: "+ computerChoice + "\nYou chose: " +
            playerChoice + "\nIt's a tie.") :

           (computerChoice == "rock" && playerChoice == "scissors" ||
           computerChoice == "paper" && playerChoice == "rock" ||
           computerChoice == "scissors" && playerChoice == "paper") ? 
           ("I chose: "+ computerChoice + "\nYou chose: " +
           playerChoice +"\nI win!") :

           ("I chose: "+ computerChoice + "\nYou chose: " + playerChoice + "\nI lose T_T");
           
}
/*
function game() {
    for (i = 0; i < 2; i++) {
        
        var computerChoice = 
            (randInt(1,3) == 1) ? computerChoice = "rock" :
            (randInt(1,3) == 2) ? computerChoice = "paper" :
            "scissors";
        var playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();

        getScore(computerChoice, playerChoice);

        console.log(playRound(computerChoice, playerChoice));
    }
    console.log("\n" + getWinner(computerScore, playerScore));
    return ("Your score: " + playerScore + "\nMy score: " + computerScore);
}
*/
let playerChoice;
let computerChoice;

let computerScore = 0;
let playerScore = 0;