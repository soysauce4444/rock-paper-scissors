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

randomInt = getRandomInt(1, 3);


console.log(randomInt)
console.log(getComputerChoice(randomInt))
