import * as readline from "readline";
import { startCLI } from "./cli";

// cli/menu.ts
export async function showMenu(rl: readline.Interface) {
  const ask = (query: string) =>
    new Promise<string>((resolve) => rl.question(query, resolve));

  while (true) {
    console.log("\n1 - New Game\n2 - Exit");
    const choice = await ask("Choose an option: (1 or 2): ");
    if (choice === "1") {
      await startCLI(rl); // ✅ reuse same rl
    } else if (choice === "2") {
      console.log("Goodbye!");
      rl.close();
      process.exit(0);
    } else {
      console.log("Invalid choice. Try again.");
    }
  }
}
