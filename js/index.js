// Grab all needed elements
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

let computerPick;
let resultValue;

btnRock.addEventListener("click", playRock);
btnPaper.addEventListener("click", playPaper);
btnScissors.addEventListener("click", playScissors);

function playRock(){

    player.textContent = "Player: Rock!";

    getComputerResult();

    if(resultValue == 0){
        computer.textContent = "Computer: Scissors!";
    } else if (resultValue == 1) {
        computer.textContent = "Computer: Rock!";
    } else if (resultValue == 2) {
        computer.textContent = "Computer: Paper!";
    }
}

function playPaper(){

    player.textContent = "Player: Paper!";

    getComputerResult();

    if(resultValue == 0){
        computer.textContent = "Computer: Rock!";
    } else if (resultValue == 1) {
        computer.textContent = "Computer: Paper!";
    } else if (resultValue == 2) {
        computer.textContent = "Computer: Scissors!";
    }
}

function playScissors(){
    player.textContent = "Player: Scissors!";

    getComputerResult();

    if(resultValue == 0){
        computer.textContent = "Computer: Paper!";
    } else if (resultValue == 1) {
        computer.textContent = "Computer: Scissors!";
    } else if (resultValue == 2) {
        computer.textContent = "Computer: Rock!";
    }

}

function getComputerResult(){
    computerPick = Math.floor(Math.random() * 3);

    switch (computerPick) {
        case 0:
            result.textContent = "Result: You won!"
            resultValue = 0;
            break;
        
        case 1:
            result.textContent = "Result: You tied!"
            resultValue = 1;
            break;

        case 2:
            result.textContent = "Result: You lost:("
            resultValue = 2;
            break;
    }

    return resultValue;
        

}