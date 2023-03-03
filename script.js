/*
function getComputerChoice (randomNumber) {

}
*/

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

console.log(getRandomInt(1,3))
