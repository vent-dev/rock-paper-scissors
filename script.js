let choices = ['rock', 'paper', 'scissors']
let resultMessage = '';
let playerScore = 4;
let computerScore = 0;

const playerSelection = document.querySelectorAll('.button');
const contentWindow = document.querySelector('.contentWindow');

playerSelection.forEach(selection => {
    selection.addEventListener('click', element => {
        playRound(element.target.alt);
    })
});

function playRound(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = document.createElement('p');

    gameRound(computerChoice, playerChoice);

    result.textContent = resultMessage;

    contentWindow.append(result);

    return resultMessage;
}

function checkWinner(PlayerScore, computerScore){
    if (playerScore >= 5 && computerScore >= 5){
        resultMessage = (`It's a tie! Better look next time! Your total is ${playerScore} and your opponents total is ${computerScore}.`);
    }
    else if (playerScore >= 5){
        resultMessage = (`You have won! Congratulations! Your total is ${playerScore} while your opponent fell short with a total of ${computerScore}!`);
    }

    else if (computerScore >= 5){
        resultMessage = (`You have lost! :( Your opponents total is ${computerScore} while you fell short with a measly total of ${playerScore}.`);
    }

    else {
        return;
    }
}

function gameRound(computerChoice, playerChoice){

    if (playerChoice === computerChoice) {
        resultMessage =  (`You both picked the same thing! No points added or taken! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    // win situations 
    if (computerChoice === "rock" && playerChoice === "paper"){
        playerScore ++;
        computerScore --;
        resultMessage = (`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (computerChoice === "paper" && playerChoice === "scissors"){
       playerScore ++;
        computerScore --;
        resultMessage = (`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (computerChoice === "scissors" && playerChoice === "rock"){
        playerScore ++;
        computerScore --;
        resultMessage = (`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    // loss situations
    if (playerChoice === "rock" && computerChoice === "paper"){
        playerScore --;
        computerScore ++;
        resultMessage = (`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (playerChoice === "paper" && computerChoice === "scissors"){
        playerScore --;
        computerScore ++;
        resultMessage = (`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        playerScore --;
        computerScore ++;
        resultMessage = (`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    checkWinner(playerScore, computerScore);
}