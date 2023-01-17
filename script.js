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

    result.textContent = gameRound(computerChoice, playerChoice);
    contentWindow.append(result);
}

function gameRound(computerChoice, playerChoice){

    if (playerChoice === computerChoice) {
        return(`You both picked the same thing! No points added or taken! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    // win situations 
    if (computerChoice === "rock" && playerChoice === "paper"){
        playerScore ++;
        computerScore --;
        return(`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (computerChoice === "paper" && playerChoice === "scissors"){
       playerScore ++;
        computerScore --;
        return(`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (computerChoice === "scissors" && playerChoice === "rock"){
        playerScore ++;
        computerScore --;
        return(`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    // loss situations
    if (playerChoice === "rock" && computerChoice === "paper"){
        playerScore --;
        computerScore ++;
        return(`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (playerChoice === "paper" && computerChoice === "scissors"){
        playerScore --;
        computerScore ++;
        return(`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        playerScore --;
        computerScore ++;
        return(`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${computerScore}`);
    }


}