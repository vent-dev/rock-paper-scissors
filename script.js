let choices = ['rock', 'paper', 'scissors']
let [playerScore, computerScore] = [0, 0];

const playerSelection = document.querySelectorAll('.button');
const result = document.querySelector('.result');
const contentWindow = document.querySelector('.contentWindow');

playerSelection.forEach(selection => {
    selection.addEventListener('click', element => {
        playRound(element.target.alt);
    })
});

function playRound(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    gameRound(computerChoice, playerChoice);

    contentWindow.appendChild(result);
}

function gameRound(computerChoice, playerChoice){

    if (playerChoice === computerChoice) {
        result.textContent = (`You both picked the same thing! No points added or taken! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    // win situations 
    if (computerChoice === "rock" && playerChoice === "paper"){
        playerScores();
        result.textContent = (`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (computerChoice === "paper" && playerChoice === "scissors"){
        playerScores();
        result.textContent = (`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (computerChoice === "scissors" && playerChoice === "rock"){
        playerScores();
        result.textContent = (`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    // loss situations
    if (playerChoice === "rock" && computerChoice === "paper"){
        computerScores();
        result.textContent = (`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (playerChoice === "paper" && computerChoice === "scissors"){
        computerScores();
        result.textContent = (`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        computerScores();
        result.textContent = (`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    checkWinner();
}

function playerScores(){
    playerScore ++;
    computerScore < 0 ? computerScore = 0 : true;
    playerScore < 0 ? playerScore = 0 : true;
}

function computerScores(){
    computerScore ++;
    computerScore < 0 ? computerScore = 0 : true;
    playerScore < 0 ? playerScore = 0 : true;
}

function checkWinner(){
    if (computerScore >= 5){
        result.textContent = (`You lose with a total score of ${playerScore} while your opponent won with a score of ${computerScore}!`);
    }

    else if (playerScore >= 5){
        result.textContent = (`You win with a total score of ${playerScore} while your opponent fell short with a score of ${computerScore}!`);
    }
}