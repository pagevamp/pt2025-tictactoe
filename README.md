Overview
This PR introduces a fully functional Tic Tac Toe CLI game written in TypeScript, using modular design principles to demonstrate strong TypeScript foundations, clean architecture, and testable code.

The main features include:

- 3x3 Tic Tac Toe board management (`Board.ts`)
- Game loop with turn management, win/draw detection (`Game.ts`)
- Human player input via CLI (`Player.ts`)
- Type-safe contracts using `interfaces.ts` and `types.ts`
- CLI menu system with “New Game / Exit” (`cli.ts` + `menu.ts`)
- Clean separation of concerns for logic, I/O, and types

Architectural Decisions

1. Types & Interfaces First
   types.ts and interfaces.ts were designed first to define contracts
   Benefits: Every module plugs in smoothly, enforce type safety, reduces coupling.

2. Core Logic in Isolation
   Board manages grid state, placement, and validation.
   Game handles the turn logic, winner detection, and game state transitions.

3. Player Abstraction
   CLI player implementation handles user input asynchronously with readline.

4. Error Handling & Input Validation
   Robust input parsing ensures invalid moves or bad input are rejected immediately.
   Prevents invalid state changes in Board and Game
