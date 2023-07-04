import shortestPath from "./taxicab";

function runTests() {
  let result: number;

  try {
    result = shortestPath(["R2", "L3"]);
    console.log(result === 5 ? "Test 1 Passed!" : "Test 1 Failed");

    result = shortestPath(["R2", "R2", "R2"]);
    console.log(result === 2 ? "Test 2 Passed!" : "Test 2 Failed");

    result = shortestPath(["R5", "L5", "R5", "R3"]);
    console.log(result === 12 ? "Test 3 Passed!" : "Test 3 Failed");
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export default runTests;
