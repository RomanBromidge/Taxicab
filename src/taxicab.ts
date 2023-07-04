type Direction = "N" | "E" | "S" | "W";

interface Coords {
  x: number;
  y: number;
}

function shortestPath(instructions: string[]): number {
  let direction: Direction = "N";
  let coords: Coords = { x: 0, y: 0 };

  const directions: Direction[] = ["N", "E", "S", "W"];
  const steps: Record<Direction, Coords> = {
    N: { x: 0, y: 1 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 },
  };

  for (const instruction of instructions) {
    // Validate instruction
    if (!/^[RL]\d+$/.test(instruction)) {
      throw new Error(`Malformed instruction: ${instruction}`);
    }

    const turn = instruction[0];
    const blocks = Number(instruction.slice(1));

    if (turn === "R") {
      direction = directions[(directions.indexOf(direction) + 1) % 4];
    } else {
      direction = directions[(directions.indexOf(direction) + 3) % 4];
    }

    coords.x += steps[direction].x * blocks;
    coords.y += steps[direction].y * blocks;
  }

  return Math.abs(coords.x) + Math.abs(coords.y);
}

export default shortestPath;
