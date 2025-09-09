import { newBoard, createBoard } from "./board.js";
import readline from "node:readline/promises";
import { checkWinner } from "./winner.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
async function pause(ms = 1700) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function resetBoard() {
    console.log("\n WHYYYY, why did you restart???");
    return createBoard();
}
function isInvalidMove(board, row, col) {
    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2) {
        return "Invalid input! Use row,col from 1-3.";
    }
    if (board.grid[row]?.[col]?.value !== " ") {
        return "Cell already taken. Choose another.";
    }
    return null;
}
export async function startGame() {
    let board = createBoard();
    let currentPlayer = "X";
    while (true) {
        newBoard(board);
        const input = await rl.question(`${currentPlayer}'s turn.\n\n Enter row,col (1-3)\n OR say 'bye' if you are a quitter\n AND type 'restart' to start a new game : `);
        if (input.toLowerCase() === "bye") {
            console.log("\n Thats what I thought, QUITTER!!!");
            rl.close();
            process.exit(0);
        }
        if (input.toLowerCase() === "restart") {
            board = resetBoard();
            await pause();
            continue;
        }
        const [rowStr, colStr] = input.split(",");
        const row = Number(rowStr) - 1;
        const col = Number(colStr) - 1;
        const error = isInvalidMove(board, row, col);
        if (error) {
            console.log(error);
            await pause();
            continue;
        }
        const cell = board.grid[row]?.[col];
        if (!cell) {
            console.log("Invalid move: cell not found.");
            continue;
        }
        cell.value = currentPlayer;
        if (checkWinner(board, currentPlayer)) {
            newBoard(board);
            console.log(`${currentPlayer} is the winner!`);
            await pause();
            board = createBoard();
            continue;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
//# sourceMappingURL=game.js.map