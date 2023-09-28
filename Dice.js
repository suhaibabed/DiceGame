const diceButton = document.getElementById("dice-btn");
const holdButton = document.getElementById("hold-game");
const newGameButton = document.getElementById("new-game");
const player1Title = document.getElementById("player1-title");
const player2Title = document.getElementById("player2-title");
const winnerMessage = document.getElementById("winner-message");


let currentPlayer = 1;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;

function diceGame() {
  //DICE 1
  var randomDice = Math.floor(Math.random() * 6 + 1);
  var diceLocation = "./images/" + "dice" + randomDice + ".png";
  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", diceLocation);

  //DICE 2
  var randomDice2 = Math.floor(Math.random() * 6 + 1);
  var diceLocation2 = "./images/" + "dice" + randomDice2 + ".png";
  var img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", diceLocation2);

  player1CurrentScore += randomDice;
  player2CurrentScore += randomDice2;

  document.getElementById("current-score-player1").innerHTML =
    "Current Score: " + player1CurrentScore;
  document.getElementById("current-score-player2").textContent =
    "Current Score: " + player2CurrentScore;
  checkWinner();
}

function holdDice() {
  player1TotalScore += player1CurrentScore;
  player2TotalScore += player2CurrentScore;

  document.getElementById("total-score-player1").innerHTML =
    "total Score: " + player1TotalScore;
  document.getElementById("total-score-player2").innerHTML =
    "total Score: " + player2TotalScore;

  player1CurrentScore = 0;
  player2CurrentScore = 0;

  document.getElementById("current-score-player1").innerHTML =
    "Current Score: 0";
  document.getElementById("current-score-player2").innerHTML =
    "Current Score: 0";
  checkWinner();
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  updatePlayerTitles();
}
function checkWinner() {
  if (player1TotalScore >= 30) {
    declareWinner(1);
  } else if (player2TotalScore >= 30) {
    declareWinner(2);
  }
}

function declareWinner(player) {
  document.querySelector("h1").innerHTML = `Player ${player} Wins!`;
  diceButton.disabled = true;
  holdButton.disabled = true;
}
function newGame() {
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1TotalScore = 0;
  player2TotalScore = 0;
  winnerMessage.textContent = "";
  currentPlayer = 1;
  updatePlayerTitles();
  diceButton.disabled = false;
  holdButton.disabled = false;
  document.getElementById("current-score-player1").textContent =
    "Current Score: 0";
  document.getElementById("current-score-player2").textContent =
    "Current Score: 0";
  document.getElementById("total-score-player1").textContent = "Total Score: 0";
  document.getElementById("total-score-player2").textContent = "Total Score: 0";
}

function updatePlayerTitles() {
  if (currentPlayer === 1) {
    player1Title.textContent = "Player 1 (Your Turn)";
    player2Title.textContent = "Player 2";
  } else {
    player1Title.textContent = "Player 1";
    player2Title.textContent = "Player 2 (Your Turn)";
  }
}
