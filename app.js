let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();
  const userChoiceDiv = document.getElementById(user)
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} beats ${convertToWord(computer)} ${smallCompWord}. You win!`;
  userChoiceDiv.classList.add('green-glow');
  setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 600);
}

function lose(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();
  const userChoiceDiv = document.getElementById(user)
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(computer)} ${smallCompWord} beats ${convertToWord(user)} ${smallUserWord}. You lose.`;
  userChoiceDiv.classList.add('red-glow');
  setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 600);
}

function draw(user, computer) {
  const userChoiceDiv = document.getElementById(user)
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = "It's a draw!";
  userChoiceDiv.classList.add('gray-glow');
  setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 600);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();