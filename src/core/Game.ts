import type { IBoard, IGame, IPlayer } from "./interfaces";
import { type Move, GameState, Symbol } from "./types";

export class Game implements IGame {
  private board: IBoard;
  private players: [IPlayer, IPlayer];

  private currentPlayerIndex: 0 | 1 = 0;
  private state: GameState = GameState.InProgress;

  constructor(board: IBoard, players: [IPlayer, IPlayer]) {
    this.board = board;
    this.players = players;

    if (players.length !== 2) {
      throw new Error("Game requires exactly 2 players");
    }
  }

  async start(): Promise<void> {
    this.board.reset();
    this.state = GameState.InProgress;

    while (this.state === GameState.InProgress) {
      const player = this.players[this.currentPlayerIndex];
      const move: Move = await player.getMove(this.board);
      const success = this.board.placeMove(move, player.symbol);

      if (!success) {
        console.log("Invalid move, try again");
        continue;
      }

      this.board.printBoard();
      this.checkWinner();
      if (this.state === GameState.InProgress) {
        this.switchPlayer();
      }
    }

    if (this.state === GameState.Win) {
      console.log(`${this.players[this.currentPlayerIndex].name} wins!`);
    } else if (this.state === GameState.Draw) {
      console.log("It's a draw!");
    }
  }

  switchPlayer(): void {
    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;
  }

  checkWinner(): Symbol | null {
    const grid = this.board.getGrid();

    // rows & columns
    for (let i = 0; i < grid.length; i++) {
      // Row check
      if (
        grid[i]![0] !== Symbol.Empty &&
        grid[i]![0] === grid[i]![1] &&
        grid[i]![1] === grid[i]![2]
      ) {
        this.state = GameState.Win;
        return grid[i]![0] as Symbol;
      }

      // Column check
      if (
        grid[0]![i] !== Symbol.Empty &&
        grid[0]![i] === grid[1]![i] &&
        grid[1]![i] === grid[2]![i]
      ) {
        this.state = GameState.Win;
        return grid[0]![i] as Symbol;
      }
    }

    // diagonals
    if (
      grid[0]![0] !== Symbol.Empty &&
      grid[0]![0] === grid[1]![1] &&
      grid[1]![1] === grid[2]![2]
    ) {
      this.state = GameState.Win;
      return grid[0]![0] as Symbol;
    }

    if (
      grid[0]![2] !== Symbol.Empty &&
      grid[0]![2] === grid[1]![1] &&
      grid[1]![1] === grid[2]![0]
    ) {
      this.state = GameState.Win;
      return grid[0]![2] as Symbol;
    }

    // draw
    if (this.board.isFull()) {
      this.state = GameState.Draw;
      return null;
    }

    this.state = GameState.InProgress;
    return null;
  }

  getState(): GameState {
    return this.state;
  }
}
