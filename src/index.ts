// index.ts
import shortestPath from "./taxicab";
import runTests from "./test";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const runProgram = async () => {
  const argv = await yargs(hideBin(process.argv))
    .option("instructions", {
      alias: "i",
      description: "Instructions for shortest path",
      type: "string",
    })
    .command("test", "run tests").argv;

  if (argv._.includes("test")) {
    runTests();
  } else if (argv.instructions) {
    try {
      const instructions: string[] = argv.instructions
        .split(",")
        .map((instruction: string) => instruction.trim());
      const result = shortestPath(instructions);
      console.log(`Shortest path: ${result}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
};

runProgram();
