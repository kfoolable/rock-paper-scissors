function getComputerChoice() {
  let computerChoices = ["Rock", "Paper", "Scissor"];
  let finalChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  return finalChoice;
}

let playerScore = 0;
let computerScore = 0;

let round = 1;
let scores = 0;

function playRound(playerSelection, computerSelection) {
  //const result = document.querySelector("div#result");
  const result = document.querySelector("ul#result-log");
  let resultDiv = "";

  const resultList = document.createElement("li");
  const resultSpan = document.createElement("span");

  resultList.appendChild(resultSpan);
  result.appendChild(resultList);

  const normalizedPlayerSelection = playerSelection.toLowerCase();

  if (
    (normalizedPlayerSelection === "rock" && computerSelection === "Scissor") ||
    (normalizedPlayerSelection === "paper" && computerSelection === "Rock") ||
    (normalizedPlayerSelection === "scissor" && computerSelection === "Paper")
  ) {
    playerScore++;
    resultDiv = `${round} - You win! ${playerSelection} beats ${computerSelection}`;
  } else if (normalizedPlayerSelection === computerSelection.toLowerCase()) {
    resultDiv = `${round} - It's a tie!`;
  } else {
    computerScore++;
    resultDiv = `${round} - You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  resultSpan.textContent = resultDiv;

  if (playerScore == 5 || computerScore == 5) {
    endGame();
  }
}

const rock = document.querySelector("button#rock");
const paper = document.querySelector("button#paper");
const scissor = document.querySelector("button#scissor");

const buttons = [rock, paper, scissor];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (round > 0) {
      const playerSelection = button.id.toLowerCase();
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      round++;
    }
  });
});

const pAgainBtnVis = document.querySelector("button#play-again");

function endGame() {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;

  const finalResult = document.querySelector("div#final-result");

  let fResult = "";

  if (playerScore > computerScore) {
    fResult = `Congratulations! You win! Player: ${playerScore} vs Computer: ${computerScore}`;
  } else if (playerScore < computerScore) {
    fResult = `Sorry, you lost :( You: ${playerScore} vs Computer: ${computerScore}`;
  } else {
    fResult = `No one wins! You: ${playerScore} vs Computer: ${computerScore}`;
  }

  finalResult.textContent = fResult;

  pAgainBtnVis.style.visibility = "visible";
}

pAgainBtnVis.addEventListener("click", () => {
  restartGame();
});

function restartGame() {
  playerScore = 0;
  computerScore = 0;

  round = 1;
  scores = 0;

  const resultLog = document.querySelector("ul#result-log");
  resultLog.innerHTML = "";

  const finalResulLog = document.querySelector("div#final-result");
  finalResulLog.innerHTML = "";

  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;

  pAgainBtnVis.style.visibility = "hidden";
}
