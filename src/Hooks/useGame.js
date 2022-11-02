import { useReducer } from "react";
import reducer from "./reducer";

export default function useGame() {
  // start with an empty board, on turn X, and no winner
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
