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
  });

  const makeMove = (index) => {
    dispatch({ type: "made_move", index });
  };

  const declareWinner = (winner) => {
    dispatch({ type: "declared_winner", winner });
  };

  return {
    ...state,
    makeMove,
    declareWinner,
  };
}

/* video code
  const [state, dispatch] = useReducer(reducer, {
    board: Array[9].fill[""],
    turn: "X",
    winner: null,
  });
  */
