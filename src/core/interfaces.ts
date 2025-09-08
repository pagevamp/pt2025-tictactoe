import type { Move } from "./types";
import { Symbol, GameState } from "./types";
export interface IBoard {
  reset(): void;
  placeMove(move: Move, symbol: Symbol): boolean;
  isFull(): boolean;
  printBoard(): void;
  getGrid(): Symbol[][];
}

export interface IPlayer {
  name: String;
  symbol: Symbol;
  getMove(board: IBoard): Promise<Move>;
}

export interface IGame {
  start(): Promise<void>;
  switchPlayer(): void;
  checkWinner(): Symbol | null;
  getState(): GameState;
}
