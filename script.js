let choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let opponentScore = 0;

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
    result.textContent = gameRound(computerChoice, playerChoice); 

    const total = document.createElement('p');
    total.textContent = `Your total score is ${playerScore}`;

    const winner = document.createElement('p');
    winner.textContent = checkWinner(opponentScore, playerScore);

    contentWindow.append(result, total, winner);
}

function checkWinner(opponentScore, playerScore){
    if (opponentScore >= 5){
        return(`The opponent wins with a score of ${opponentScore} points! Sadly, you stayed at ${playerScore} points. Better luck next time!`);
    }
    
    else if (playerScore >= 5) {
        return(`You win! Great job! Your score came to ${playerScore} points, while your opponent stayed at ${opponentScore} points!`);
    }

    else {
        return;
    }
}

function gameRound(computerChoice, playerChoice){

    // win situations 
    if (computerChoice === "rock" && playerChoice === "paper"){
        playerScore ++;
        opponentScore --;
        return(`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    if (computerChoice === "paper" && playerChoice === "scissors"){
        playerScore ++;
        opponentScore --;
        return(`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    if (computerChoice === "scissors" && playerChoice === "rock"){
        playerScore ++;
        opponentScore --;
        return(`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    // loss situations
    else if (playerChoice === "rock" && computerChoice === "paper"){
        playerScore --;
        opponentScore ++;
        return(`Paper beats Rock! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    else if (playerChoice === "paper" && computerChoice === "scissors"){
        playerScore --;
        opponentScore ++;
        return(`Scissors beats Paper! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        playerScore --;
        opponentScore ++;
        return(`Rock beats Scissors! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    else {
        return (`You both picked the same thing! No points added or taken! Your total score is ${playerScore}, opponent score is ${opponentScore}`)
    }
}