let choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let opponentScore = 0;

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const contentWindow = document.querySelector('.contentWindow');

btnRock.addEventListener('click', () => {
    playRound('rock');
})

btnPaper.addEventListener('click', () => {
    playRound('paper');
})

btnScissors.addEventListener('click', () => {
    playRound('scissors');
})

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
        playerScore += 5;
        opponentScore -= 5;
        return(`Paper beats Rock! 5 points have been added! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    if (computerChoice === "paper" && playerChoice === "scissors"){
        playerScore += 5;
        opponentScore -= 5;
        return(`Scissors beats Paper! 5 points have been added! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    if (computerChoice === "scissors" && playerChoice === "rock"){
        playerScore += 5;
        opponentScore -= 5;
        return(`Rock beats Scissors! 5 points have been added! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    // loss situations
    else if (playerChoice === "rock" && computerChoice === "paper"){
        playerScore -= 5;
        opponentScore += 5;
        return(`Paper beats Rock! 5 points have been taken! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    else if (playerChoice === "paper" && computerChoice === "scissors"){
        playerScore -= 5;
        opponentScore += 5;
        return(`Scissors beats Paper! 5 points have been taken! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        playerScore -= 5;
        opponentScore += 5;
        return(`Rock beats Scissors! 5 points have been taken! Your total score is ${playerScore}, opponent score is ${opponentScore}`);
    }

    else {
        return (`You both picked the same thing! No points added or taken! Your total score is ${playerScore}, opponent score is ${opponentScore}`)
    }
}