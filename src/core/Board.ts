import { Symbol } from "./types";
import type { Move } from "./types";
import type { IBoard } from "./interfaces";
export class Board implements IBoard {
  public size: number = 3;
  private grid: Symbol[][] = [];

  constructor() {
    this.grid = [];
    for (let i = 0; i < this.size; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.size; j++) {
        this.grid[i]![j] = Symbol.Empty;
      }
    }
  }

  placeMove(move: Move, symbol: Symbol): boolean {
    const [row, col] = move;
    if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
      return false;
    }

    const rowArr = this.grid[row];
    if (rowArr && rowArr[col] === Symbol.Empty) {
      rowArr[col] = symbol;
      return true;
    }
    return false;
  }

  isFull(): boolean {
    return this.grid.every((row) => row.every((cell) => cell !== Symbol.Empty));
  }

  reset(): void {
    this.grid = [];
    for (let i = 0; i < this.size; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.size; j++) {
        this.grid[i]![j] = Symbol.Empty;
      }
    }
  }

  printBoard(): void {
    const colHeader = "    0   1   2";
    const lines = this.grid
      .map(
        (row, rowIndex) => `${rowIndex}  ${row.map((cell) => cell).join(" | ")}`
      )
      .join("\n   -----------\n");
    console.log("\n");
    console.log(colHeader);
    console.log(lines);
  }

  getGrid(): Symbol[][] {
    return this.grid;
  }
}
