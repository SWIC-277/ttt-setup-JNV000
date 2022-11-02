import reducer from "./reducer";

it("should only update the board with the current turn for a 'null' position (only once)", () => {
  const state = {
    // board: [null, null, null, null, null, null, null, null, null],
    board: Array(9).fill(null),
    turn: "X",
  };

  const action = {
    type: "made_move",
    index: 0,
  };

  const newState1 = reducer(state, action);
  const newState2 = reducer(state, action); // should not change index 0 again

  // so newState2 should have the same board as newState1
  expect(newState1.board[0]).toBe("X");
  expect(newState2.board[0]).toBe("X");
});

it("updates the winner after a winning move", () => {
  const state = {
    // make a state that is one move away from being won.
    board: ["X", "X", null, "O", null, null, null, "O", null],
    turn: "X",
  };

  // this action should cause X to win
  const action = {
    type: "made_move",
    index: 2,
  };

  const newState = reducer(state, action);

  expect(newState.winner).toBe("X");
});

it("sets all square's markers to null and sets turn to X", () => {
  const state = {
    // make a state that is one move away from being won.
    board: ["X", "X", null, "O", null, "x", null, "O", null],
    turn: "O",
  };

  // this action should reset the game board to all null and turn should be X
  const action = {
    type: "reset_game",
  };

  const newState = reducer(state, action);

  expect(newState.board[0]).toBe(null);
  expect(newState.board[3]).toBe(null);
  expect(newState.board[5]).toBe(null);
  expect(newState.turn).toBe("X");
});

// TODO: test to make sure move does not change when marked square is clicked
