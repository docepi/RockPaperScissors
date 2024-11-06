const choices = ["rock", "paper", "scissors"];
let winners = [];

// We play a total of 5 rounds
function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  } // Function logWins will be used to see the final results (how many rounds the player won, computer won and ties)
  logWins();
}

// Randomized computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  //This function will ask for the player's input, and it will repeat until the player types correctly while turning the user's inpute to lowercase to avoid problems with capitalization
function getHumanChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
      input = prompt(
        "Please type Rock, Paper or Scissors correctly (capitalization does not matter)."
      );
      while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
      } 
      input = input.toLowerCase();
      check = validateInput(input);
    }
    return input;
  }
  

// Function to determine how to round goes (checking for a winner after comparing the player selection and computer selection(determined in the functions getHumanChoice and getComputerChoice))
function playRound(round) {
  const playerSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

// Function used to check if the user input includes a valid choice between Rock, Paper or Scissors
function validateInput(choice) {
  return choices.includes(choice);
}

// If the user input is correct, the randomized computer choice and player choice will be compared to determine a winner
function checkWinner(playerC, computerC) {
  if (playerC === computerC) {
    return "It's a tie! No one";
  } else if (
    (playerC === "rock" && computerC == "scissors") ||
    (playerC === "paper" && computerC == "rock") ||
    (playerC === "scissors" && computerC == "paper")
  ) {
    return "Congratulations! You";
  } else {
    return "Oh no! The computer";
  }
}

// This function will look at the number of times 3 specific prompts are used depending on the result (win, loss or tie) and will determine the number of rounds the player might have won, lost or tied.
function logWins() {
  let humanScore = winners.filter((item) => item == "Congratulations! You").length;
  let computerScore = winners.filter((item) => item == "Oh no! The computer").length;
  let ties = winners.filter((item) => item == "It's a tie! No one").length;
  console.log("Results:");
  console.log("You won", humanScore, "rounds");
  console.log("You lost", computerScore, "rounds");
  console.log("You and the computer tied", ties, "rounds");
}

// This function will show the player what he and the computer played, round number and the result
function logRound(getHumanChoice, getComputerChoice, winner, round) {
  console.log("Round:", round);
  console.log("You played", getHumanChoice);
  console.log("The computer played", getComputerChoice);
  console.log(winner, "won the Round");
  console.log("");
}

playGame();