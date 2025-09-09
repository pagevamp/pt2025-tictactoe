import type { IPlayer, IBoard } from "./interfaces";
import { Symbol, type Move } from "./types";
import * as readline from "readline";

export class Player implements IPlayer {
  name: string;
  symbol: Symbol;
  rl: readline.Interface;

  constructor(name: string, symbol: Symbol, rl: readline.Interface) {
    this.name = name;
    this.symbol = symbol;
    this.rl = rl;
  }

  async getMove(board: IBoard): Promise<Move> {
    const ask = (query: string) =>
      new Promise<string>((resolve) => this.rl.question(query, resolve));

    let move: Move | null = null;

    while (!move) {
      const answer = await ask(
        `${this.name} (${this.symbol}), enter your move as "row,col": `
      );

      const parts = answer.split(",").map((p) => parseInt(p.trim(), 10));

      if (parts.length === 2 && parts.every((n) => !isNaN(n))) {
        const [row, col] = parts;
        if (row! >= 0 && row! < 3 && col! >= 0 && col! < 3) {
          move = [row!, col!];
        } else {
          console.log("❌ Out of range. Please enter values between 0 and 2.");
        }
      } else {
        console.log("❌ Invalid input. Please enter row,col (like 0,2).");
      }
    }

    return move;
  }
}
