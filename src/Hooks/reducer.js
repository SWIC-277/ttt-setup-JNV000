import checkWinner from "services/game.service";

export default function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      // only mutate a local copy of the state
      const board2Update = [...state.board]; // copy the current board state
      let updatedTurn = state.turn;
      // if there is nothing in the square we can add the players symbol
      if (!board2Update[action.index]) {
        board2Update[action.index] = state.turn;
        // if turn was X make O, else X
        updatedTurn = state.turn === "X" ? "O" : "X";
      }
      return {
        board: board2Update,
        turn: updatedTurn,
        winner: checkWinner(board2Update, state.turn) ? state.turn : null,
      };
      // filled square is clicked and no new marker is drawn.
    }
    // reset action for resetting the game.
    case "reset_game": {
      // make all spots on board null
      const resetBoard = [...state.board].map((square) => null);
      // probably didn't need to use map, but this would let it work with boards of different sizes.
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
