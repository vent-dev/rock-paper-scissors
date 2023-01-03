let choices = ['rock', 'paper', 'scissors']
let playerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * choices.length);
    return computerChoice = choices[computerChoice];
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, Scissors?");
    return playerChoice = playerChoice.toLowerCase();
}

function gameRound(computerChoice, playerChoice){

    // win situations 
    if (computerChoice === "rock" && playerChoice === "paper"){
        playerScore += 5;
        return(`You win! Paper beats Rock! 5 points have been added! Your total score is ${playerScore}`);
    }

    else if (computerChoice === "paper" && playerChoice === "scissors"){
        playerScore += 5;
        return(`You win! Scissors beats Paper! 5 points have been added! Your total score is ${playerScore}`);
    }

    else if (computerChoice === "scissors" && playerChoice === "rock"){
        playerScore += 5;
        return(`You win! Rock beats Scissors! 5 points have been added! Your total score is ${playerScore}`);
    }

    // loss situations
    else if (playerChoice === "rock" && computerChoice === "paper"){
        playerScore -= 5;
        return(`You lose! Paper beats Rock! 5 points have been taken! Your total score is ${playerScore}`);
    }

    else if (playerChoice === "paper" && computerChoice === "scissors"){
        playerScore -= 5;
        return(`You lose! Scissors beats Paper! 5 points have been taken! Your total score is ${playerScore}`);
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        playerScore -= 5;
        return(`You lose! Rock beats Scissors! 5 points have been taken! Your total score is ${playerScore}`);
    }

    else {
        return (`You both picked the same thing! It's a tie! No points added or taken! Your total score is ${playerScore}`)
    }
}

function game(){
    for (let i = 1; i <= 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();


        console.log(`Round ${i}`)
        console.log(gameRound(computerChoice, playerChoice));
    }

    console.log(`Game over! Your total score was ${playerScore}`);
}

game();