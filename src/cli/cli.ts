import { Game } from "../core/Game";
import { Board } from "../core/Board";
import { Player } from "../core/Player";
import { Symbol } from "../core/types";
import * as readline from "readline";

export async function startCLI(rl: readline.Interface) {
  const ask = (query: string) =>
    new Promise<string>((resolve) => rl.question(query, resolve));

  const askNonEmpty = async (query: string): Promise<string> => {
    let answer = "";
    do {
      answer = (await ask(query)).trim();
      if (!answer) {
        console.log("❌ Name cannot be empty. Please enter again.");
      }
    } while (!answer);
    return answer;
  };

  const name1 = await askNonEmpty("Enter Player 1 name: ");
  const name2 = await askNonEmpty("Enter Player 2 name: ");

  const board = new Board();
  board.printBoard();

  const player1 = new Player(name1, Symbol.X, rl);
  const player2 = new Player(name2, Symbol.O, rl);

  const game = new Game(board, [player1, player2]);

  await game.start();
}
