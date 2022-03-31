let selection = ["rock", "paper", "scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection;

function computerPlay () {
    return selection[Math.floor(Math.random() * 3)];
}

function game() {
    const computerSelection = computerPlay();
    console.log("Computer select"+ " " + computerSelection);
    console.log("You select"+ " " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("");

    if (playerSelection == "rock") {
        var img1 = document.createElement("img");
        img1.src = "rock.png"
        img1.style.width = "100px";

        var div = document.getElementById("pla-select");
        div.appendChild(img1);
    }

    if (playerSelection == "paper") {
        var img1 = document.createElement("img");
        img1.src = "paper.png"
        img1.style.width = "100px";

        var div = document.getElementById("pla-select");
        div.appendChild(img1);
    }

    if (playerSelection == "scissors") {
        var img1 = document.createElement("img");
        img1.src = "scissors.png"
        img1.style.width = "100px";

        var div = document.getElementById("pla-select");
        div.appendChild(img1);
    }

    if (computerSelection == "rock") {
        var img2 = document.createElement("img");
        img2.src = "rock.png"
        img2.style.width = "100px";

        var div = document.getElementById("com-select");
        div.appendChild(img2);
    }

    if (computerSelection == "paper") {
        var img2 = document.createElement("img");
        img2.src = "paper.png"
        img2.style.width = "100px";

        var div = document.getElementById("com-select");
        div.appendChild(img2);
    }

    if (computerSelection == "scissors") {
        var img2 = document.createElement("img");
        img2.src = "scissors.png"
        img2.style.width = "100px";

        var div = document.getElementById("com-select");
        div.appendChild(img2);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerWinCount < 5 && computerWinCount < 5) {
    
        if (playerSelection == computerSelection) {
            const roundWinner = document.querySelector('#round-winner');
    
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "Tie";
    
            roundWinner.appendChild(result);
            console.log(playerWinCount);
            console.log(computerWinCount);
    
            const playerCount = document.querySelector('#user-score')
            const playerScore = document.createElement('div');
            playerScore.textContent = playerWinCount;
    
            playerCount.appendChild(playerScore);
    
            const computerCount = document.querySelector('#computer-score')
            const computerScore = document.createElement('div');
            computerScore.textContent = computerWinCount;
    
            computerCount.appendChild(computerScore);
    
            // return "Tie";
        }
        if (playerSelection == "rock" && computerSelection == "paper") {
            computerWinCount++;
            const roundWinner = document.querySelector('#round-winner');
    
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "You Lose! Paper Beats Rock";
    
            roundWinner.appendChild(result);
    
            console.log(playerWinCount);
            console.log(computerWinCount);
    
            const playerCount = document.querySelector('#user-score')
            const playerScore = document.createElement('div');
            playerScore.textContent = playerWinCount;
    
            playerCount.appendChild(playerScore);
    
            const computerCount = document.querySelector('#computer-score')
            const computerScore = document.createElement('div');
            computerScore.textContent = computerWinCount;
    
            computerCount.appendChild(computerScore);
    
            // return"You Lose! Paper Beats Rock";
        }
        if (playerSelection == "rock" && computerSelection == "scissors") {
            playerWinCount++;
            const roundWinner = document.querySelector('#round-winner');
    
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "You Win! Rock beats Scrissors";
    
            roundWinner.appendChild(result);
    
            console.log(playerWinCount);
            console.log(computerWinCount);
    
            const playerCount = document.querySelector('#user-score')
            const playerScore = document.createElement('div');
            playerScore.textContent = playerWinCount;
    
            playerCount.appendChild(playerScore);
    
            const computerCount = document.querySelector('#computer-score')
            const computerScore = document.createElement('div');
            computerScore.textContent = computerWinCount;
    
            computerCount.appendChild(computerScore);
    
            // return "You Win! Rock beats Scrissors";
        }
        if (playerSelection == "paper" && computerSelection == "rock") {
            playerWinCount++;
            const roundWinner = document.querySelector('#round-winner');
    
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "You Win! Paper Beats Rock";
    
            roundWinner.appendChild(result);
    
            console.log(playerWinCount);
            console.log(computerWinCount);
    
            const playerCount = document.querySelector('#user-score')
            const playerScore = document.createElement('div');
            playerScore.textContent = playerWinCount;
    
            playerCount.appendChild(playerScore);
    
            const computerCount = document.querySelector('#computer-score')
            const computerScore = document.createElement('div');
            computerScore.textContent = computerWinCount;
    
            computerCount.appendChild(computerScore);
    
            // return "You Win! Paper Beats Rock";
        }
        if (playerSelection == "paper" && computerSelection == "scissors") {
            computerWinCount++;
            const roundWinner = document.querySelector('#round-winner');
    
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "You Lose! Scissors beats Paper";
    
            roundWinner.appendChild(result);
    
            console.log(playerWinCount);
            console.log(computerWinCount);
    
            const playerCount = document.querySelector('#user-score')
            const playerScore = document.createElement('div');
            playerScore.textContent = playerWinCount;
    
            playerCount.appendChild(playerScore);
    
            const computerCount = document.querySelector('#computer-score')
            const computerScore = document.createElement('div');
            computerScore.textContent = computerWinCount;
    
            computerCount.appendChild(computerScore);
    
            // return "You Lose! Scissors beats Paper";
        }
        if (playerSelection == "scissors" && computerSelection == "paper") {
            playerWinCount++;
            const roundWinner = document.querySelector('#round-winner');
    
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "You Win! Scissors Beats Paper";
    
            roundWinner.appendChild(result);
    
            console.log(playerWinCount);
            console.log(computerWinCount);
    
            const playerCount = document.querySelector('#user-score')
            const playerScore = document.createElement('div');
            playerScore.textContent = playerWinCount;
    
            playerCount.appendChild(playerScore);
    
            const computerCount = document.querySelector('#computer-score')
            const computerScore = document.createElement('div');
            computerScore.textContent = computerWinCount;
    
            computerCount.appendChild(computerScore);
    
            // return "You Win! Scissors Beats Paper";
        }
        if (playerSelection == "scissors" && computerSelection == "rock") {
            computerWinCount++;
            const roundWinner = document.querySelector('#round-winner');
    
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = "You Lose! Rock beats Scrissors";
    
            roundWinner.appendChild(result);
    
            console.log(playerWinCount);
            console.log(computerWinCount);
    
            const playerCount = document.querySelector('#user-score')
            const playerScore = document.createElement('div');
            playerScore.textContent = playerWinCount;
    
            playerCount.appendChild(playerScore);
    
            const computerCount = document.querySelector('#computer-score')
            const computerScore = document.createElement('div');
            computerScore.textContent = computerWinCount;
    
            computerCount.appendChild(computerScore);
    
            // return "You Lose! Rock beats Scrissors";
        }
      }

      if (computerWinCount == 5) {
            var img3 = document.createElement("img");
            img3.src = "lose.jpg"
            img3.style.width = "100px";

            var div = document.getElementById("result");
            div.appendChild(img3);
        }

      if (playerWinCount == 5) {
            var img3 = document.createElement("img");
            img3.src = "win.jpg"
            img3.style.width = "100px";

            var div = document.getElementById("result");
            div.appendChild(img3);
        }
}



const btn1 = document.querySelector('.rock .btn');
btn1.onclick = () => {
      document.getElementById("pla-select").innerHTML = "";
      document.getElementById("com-select").innerHTML = "";
      document.getElementById("round-winner").textContent = "";
      document.getElementById("user-score").textContent = "";
      document.getElementById("computer-score").textContent = "";
      document.getElementById("result").innerHTML = "";
      playerSelection = "rock";
      game();
  }

const btn2 = document.querySelector('.paper .btn');
btn2.onclick = () => {
      document.getElementById("pla-select").innerHTML = "";
      document.getElementById("com-select").innerHTML = "";
      document.getElementById("round-winner").textContent = "";
      document.getElementById("user-score").textContent = "";
      document.getElementById("computer-score").textContent = "";
      document.getElementById("result").innerHTML = "";
      playerSelection = "paper";
      game();
      
  }

const btn3 = document.querySelector('.scissors .btn');
btn3.onclick = () => {
      document.getElementById("pla-select").innerHTML = "";
      document.getElementById("com-select").innerHTML = "";
      document.getElementById("round-winner").textContent = "";
      document.getElementById("user-score").textContent = "";
      document.getElementById("computer-score").textContent = "";
      document.getElementById("result").innerHTML = "";
      playerSelection = "scissors";
      game();
      
  }