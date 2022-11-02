import checkWinner from "services/game.service";

export default function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      // only mutate a local copy of the state
      const board2Update = [...state.board]; // copy the current board state

      if (!board2Update[action.index]) {
        // if there is nothing in the square we can add the players symbol
        board2Update[action.index] = state.turn;
      }
      return {
        board: board2Update,
        turn: state.turn === "X" ? "O" : "X", // if turn was X make O, else X
        winner: checkWinner(board2Update, state.turn) ? state.turn : null,
      };
      // unfortunately as currently coded turn will switch if an already
      // filled square is clicked and no new marker is drawn.
    }
    // reset action for resetting the game.
    case "reset_game": {
      // make all spots on board null
      const resetBoard = [...state.board].map((square) => null);
      // return initial game state
      return {
        board: resetBoard,
        turn: "X",
        winner: null,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}
