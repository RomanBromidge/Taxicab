# Logic Puzzle Solver

This is a simple project to solve a specific logic puzzle. You can input a string of instructions, and it will calculate the shortest path to reach the end of these instructions.

## Setup

1. Clone this repository to your local machine.
2. Navigate into the project directory.
3. Run `npm install` to install all dependencies.

## Usage

There are two main functionalities you can run from the command line:

1. **Calculate Shortest Path:** You can calculate the shortest path from a string of instructions by running:

```sh
npm start -- --instructions="your instructions here"
```

For example, the instructions that were given in the puzzle are:

```sh
npm start -- --instructions="R1, R1, R3, R1, R1, L2, R5, L2, R5, R1, R4, L2, R3, L3, R4, L5, R4, R4, R1, L5, L4, R5, R3, L1, R4, R3, L2, L1, R3, L4, R3, L2, R5, R190, R3, R5, L5, L1, R54, L3, L4, L1, R4, R1, R3, L1, L1, R2, L2, R2, R5, L3, R4, R76, L3, R4, R191, R5, R5, L5, L40, L5, L3, R1, R3, R2, L2, L2, L4, L5, L4, R5, R4, R4, R2, R3, R4, L3, L2, R5, R3, L2, L1, R2, L3, R2, L1, L1, R1, L3, R5, L5, L1, L2, R5, R3, L3, R3, R5, R2, R5, R5, L5, L5, R25, L3, L5, L2, L1, R2, R2, L2, R2, L3, L2, R3, L5, R4, L4, L5, R3, L4, R1, R3, R2, R4, L2, L3, R2, L5, R5, R4, L2, R4, L1, L3, L1, L3, R1, R2, R1, L5, R5, R3, L3, L3, L2, R4, R2, L5, L1, L1, L5, L4, L1, L1, R1"
```

Which gives the answer of 254.

2. **Run Tests:** You can test that the logic is working correctly by running:

```sh
npm start -- --test
```
