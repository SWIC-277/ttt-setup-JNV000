import { useReducer } from "react";
import checkWinner from "services/game.service";

function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      // only mutate a local copy of the state
      const board2Update = [...state.board];

      if (!board2Update[action.index]) {
        // if there is nothing in the square
        board2Update[action.index] = state.turn;
      }
      return {
        board: board2Update,
        turn: state.turn === "X" ? "O" : "X", // if turn was X make O, else X
        winner: checkWinner(board2Update, state.turn) ? state.turn : null,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: "X",
    winner: null,
  });

  const makeMove = (event) => {
    dispatch({ type: "made_move", index: event.target.id });
  };

  const { board, winner } = state;
  // removed declare winner
  return {
    board,
    winner,
    makeMove,
  };
}

/* video code
  const [state, dispatch] = useReducer(reducer, {
    board: Array[9].fill[""],
    turn: "X",
    winner: null,
  });
  */
