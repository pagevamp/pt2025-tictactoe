import chalk from "chalk";
export function createBoard() {
    return {
        grid: [
            [{ value: " " }, { value: " " }, { value: " " }],
            [{ value: " " }, { value: " " }, { value: " " }],
            [{ value: " " }, { value: " " }, { value: " " }],
        ],
    };
}
export function newBoard(board) {
    console.clear();
    console.log(chalk.green.bold("\n-------------"));
    for (let row = 0; row < 3; row++) {
        process.stdout.write(chalk.blue("|"));
        for (let col = 0; col < 3; col++) {
            process.stdout.write(chalk.blue(` ${board.grid[row]?.[col]?.value} |`));
        }
        console.log(chalk.green.bold("\n-------------"));
    }
}
//# sourceMappingURL=board.js.map