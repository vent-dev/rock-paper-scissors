let choices = ['rock', 'paper', 'scissors']
let [playerScore, computerScore] = [0, 0];

const buttons = document.querySelector('.buttons');
const playerSelection = document.querySelectorAll('.button');
const result = document.querySelector('.result');
const contentWindow = document.querySelector('.contentWindow');
const computerTotal = document.querySelector('.computerScore .window');
const playerTotal = document.querySelector('.playerScore .window');

playerSelection.forEach(selection => {
    selection.addEventListener('click', element => {
        playRound(element.target.alt);
        element.currentTime = 0;
    })
});

function playRound(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    gameRound(computerChoice, playerChoice);
    contentWindow.appendChild(result);
}

function gameRound(computerChoice, playerChoice){

    if (playerChoice === computerChoice) {
        result.textContent = (`You both picked the same thing!`);
    }

    // win situations 
    if (computerChoice === "rock" && playerChoice === "paper"){
        playerScore ++;
        playerTotal.textContent = playerScore;
        result.textContent = (`Paper beats Rock!`);
    }

    else if (computerChoice === "paper" && playerChoice === "scissors"){
        playerScore ++;
        playerTotal.textContent = playerScore;
        result.textContent = (`Scissors beats Paper!`);
    }

    else if (computerChoice === "scissors" && playerChoice === "rock"){
        playerScore ++;
        playerTotal.textContent = playerScore;
        result.textContent = (`Rock beats Scissors!`);
    }

    // loss situations
    if (playerChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        computerTotal.textContent = computerScore;
        result.textContent = (`Paper beats Rock!`);
    }

    else if (playerChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        computerTotal.textContent = computerScore;
        result.textContent = (`Scissors beats Paper!`);
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        computerTotal.textContent = computerScore;
        result.textContent = (`Rock beats Scissors!`);
    }

    checkWinner();
}

function checkWinner(){
    if (computerScore >= 5){
        result.textContent = (`You lose!`);
        result.style.color = 'red';
        restart();
    }

    else if (playerScore >= 5){
        result.textContent = (`You win!`);
        result.style.color = 'green';
        restart();
    }
}

function restart(){
    playerSelection.forEach(selection => { selection.remove() });
    const restart = document.createElement('button');
    restart.textContent = 'restart';
    buttons.appendChild(restart);
    restart.addEventListener('click', () => {
        window.location.reload();
    });
}