// Players array containing two objects
const players = [
  { name: "Owen", symbol: "X" },
  { name: "Grace", symbol: "O" },
];

const playerName1 = document.querySelector("#player-1-name");
const playerName2 = document.querySelector("#player-2-name");

playerName1.textContent = playerName1.textContent.replace(
  "[name]",
  players[0].name
);
playerName2.textContent = playerName2.textContent.replace(
  "[name]",
  players[1].name
);

// Game State Variables
let currentPlayer = players[0]; // Choose who's turn it is
let moves = 0; // Count the number of moves

// Define game-over state (when number of moves reaches number of cells)
const numberOfCells = document.querySelectorAll(".cell").length;

// Function to switch players
function switchPlayer() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
}

// Function to handle cell click
function handleCellClick(event) {
  const cell = event.target;

  // Check if cell is already taken
  if (cell.textContent !== "") {
    return;
  }

  // Update cell content with current player's symbol
  cell.textContent = currentPlayer.symbol;

  // Increment moves
  moves++;

  // Check if game is over
  if (moves === numberOfCells) {
    console.log("Game over!");
  }

  // Switch players
  switchPlayer();
}

// Add event listener to each cell
for (const cell of document.querySelectorAll(".cell")) {
  cell.addEventListener("click", handleCellClick);
}
