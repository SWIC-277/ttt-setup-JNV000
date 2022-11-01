import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      const board2Update = [...state.board];

      // TODO: update the board with the current turn using the action.index
      if (board2Update[action.index] === null) {
        board2Update[action.index] = state.turn;
      }
      return {
        ...state,
        board: board2Update,
        turn: state.turn === "X" ? "O" : "X", // if turn was X make O, else X
      };
    }
    case "declared_winner": {
      return {
        ...state,
        winner: action.winner,
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
}

/* video code
  const [state, dispatch] = useReducer(reducer, {
    board: Array[9].fill[""],
    turn: "X",
    winner: null,
  });
  */
