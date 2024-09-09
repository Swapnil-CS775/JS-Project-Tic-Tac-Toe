# JS-Project-Tic-Tac-Toe
This project is a browser-based Tic Tac Toe game, built using HTML, CSS, and JavaScript. playing as X and O, aiming to create a row, column, or diagonal of their respective symbols to win the game. The game includes functionality for resetting and starting a new game, and displays a message announcing the winner once the game is over.

# Tic Tac Toe Game

This project is a simple **Tic Tac Toe** game built using **HTML**, **CSS**, and **JavaScript**. It allows two players to take turns marking spaces on a 3x3 grid. The objective of the game is for one player to create a row, column, or diagonal of their respective symbol, either **X** or **O**. The game announces the winner as soon as a winning pattern is detected.

## Features

- **Responsive layout**: The game adapts to various screen sizes and works well on both desktop and mobile devices.
- **Turn management**: Alternating turns between **X** and **O**.
- **Winner detection**: The game automatically checks for winning combinations after each move and announces the winner.
- **Reset and new game options**: Players can reset the game or start a new game with the provided buttons.

## Technologies Used

- **HTML**: Markup structure of the game.
- **CSS**: Styling for the game layout, responsiveness, and visual elements.
- **JavaScript**: Game logic including turn management, winner detection, and game reset.

## What I Learned

While building this project, I learned and improved upon several web development concepts:

- **Event handling in JavaScript**: I used event listeners to capture user interactions with the game board and buttons, allowing for smooth gameplay.
- **DOM manipulation**: I learned how to dynamically update the content of HTML elements, such as updating the grid with **X** or **O**, and displaying the winner message.
- **Game logic implementation**: I developed a better understanding of how to handle the game's turn system and winning condition checks using arrays and loops.
- **Responsive design**: By using media queries and flexible units like `vw` and `vh`, I ensured that the game grid displays properly on both desktop and mobile devices.
- **Disabling and enabling buttons**: I gained experience in controlling button states to prevent multiple clicks on the same grid space and resetting them when starting a new game.

## Game Logic

- The game uses a 3x3 grid, represented by buttons.
- Players alternate turns, with **Player 1** playing as **O** and **Player 2** playing as **X**.
- After each move, the game checks for a winner using predefined winning combinations (rows, columns, and diagonals).
- When a player wins, a message is displayed showing the winner, and the game board is disabled until the game is reset.

## Instructions

1. Open the game in your browser.
2. The first player uses **O**, and the second player uses **X**.
3. Click on a grid space to place your symbol.
4. The game will announce the winner once a winning combination is found.
5. To reset the game, click on the **Reset** button.
6. To start a new game, click on the **New Game** button.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
