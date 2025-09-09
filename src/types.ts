export type Player = "X" | "O";
export type CellValue = Player | " ";

export interface Cell {
  value: CellValue;
}

export type Grid = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

export interface Board {
  grid: Grid;
}
