import * as readline from "readline";
import { showMenu } from "./cli/menu";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  prompt: "",
});

showMenu(rl);
