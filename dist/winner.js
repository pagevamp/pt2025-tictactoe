// Checking for wins in rows, columns, and diagonals
export function checkWinner(board, player) {
    // for rows & column wins
    for (let i = 0; i < 3; i++) {
        if (board.grid[i]?.[0]?.value === player &&
            board.grid[i]?.[1]?.value === player &&
            board.grid[i]?.[2]?.value === player)
            return true;
        if (board.grid[0]?.[i]?.value === player &&
            board.grid[1]?.[i]?.value === player &&
            board.grid[2]?.[i]?.value === player)
            return true;
    }
    // for diagonal wins
    if (board.grid[0]?.[0]?.value === player &&
        board.grid[1]?.[1]?.value === player &&
        board.grid[2]?.[2]?.value === player)
        return true;
    if (board.grid[0]?.[2]?.value === player &&
        board.grid[1]?.[1]?.value === player &&
        board.grid[2]?.[0]?.value === player)
        return true;
    return false;
}
//# sourceMappingURL=winner.js.map