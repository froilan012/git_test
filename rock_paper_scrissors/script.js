let selection = ["rock", "paper", "scissors"];
let winCount = 0;

function computerPlay () {
    return selection[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        winCount--;
        return "You Lose! Paper Beats Rock";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        winCount++;
        return "You Win! Rock beats Scrissors";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        winCount++;
        return "You Win! Paper Beats Rock";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        winCount--;
        return "You Lose! Scissors beats Paper";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        winCount++;
        return "You Win! Scissors Beats Paper";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        winCount--;
        return "You Lose! Rock beats Scrissors";
    }
    else {
        return "Input not valid";
    }
  }
  
  /* const playerSelection = prompt("Enter Rock/Paper/Scissors").toLowerCase();
  const computerSelection = computerPlay();
  console.log("Computer select"+ " " + computerSelection);
  console.log("You select"+ " " + playerSelection);
  console.log(playRound(playerSelection, computerSelection)); */

  function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Rock/Paper/Scissors").toLowerCase();
        const computerSelection = computerPlay();
        console.log("Computer select"+ " " + computerSelection);
        console.log("You select"+ " " + playerSelection);
        console.log(playRound(playerSelection, computerSelection));
        //console.log(winCount);
        console.log("");
     }

     if (winCount>0) {
         console.log("You win");
     } 
     if (winCount<0) {
        console.log("You lose");
     }  
     else {
         console.log("Tie");
     }
  }

  game();