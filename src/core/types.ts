export enum Symbol {
  Empty = " ",
  X = "X",
  O = "O",
}

export type Move = [number, number];

export enum GameState {
  InProgress = "IN_PROGRESS",
  Win = "Win",
  Draw = "Draw",
}
