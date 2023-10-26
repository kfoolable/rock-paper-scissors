function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissor"]
    let finalChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    return finalChoice;
}


function playRound(playerSelection, computerSelection) {
    const normalizedPlayerSelection = playerSelection.toLowerCase();

    if (
      (normalizedPlayerSelection === "rock" && computerSelection === "Scissor") ||
      (normalizedPlayerSelection === "paper" && computerSelection === "Rock") ||
      (normalizedPlayerSelection === "scissor" && computerSelection === "Paper")
    ) {
      playerScore++;
      return `Congratulations! You win! ${playerSelection} beats ${computerSelection}`;
    } else if (normalizedPlayerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('button#rock');
const paper = document.querySelector('button#paper');
const scissor = document.querySelector('button#scissor');

rock.addEventListener('click', () => {
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
})

/*function game() {
  for (let i = 1; i <= 5; i++) {
    let player = prompt(`Round ${i}\nEnter your choice: `);
    const playerSelection = player;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore) {
        console.log(`Congratulations! You win! Player: ${playerScore} vs Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(
          `Sorry, you lost :( Player: ${playerScore} vs Computer: ${computerScore}`
        );
    } else {
        console.log(
          `No one wins! Player: ${playerScore} vs Computer: ${computerScore}`
        );
    }
//}


game();*/