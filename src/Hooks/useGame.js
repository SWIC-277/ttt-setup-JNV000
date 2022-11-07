import { useReducer } from "react";
import reducer from "./reducer";

export default function useGame() {
  // start with an empty board, on turn X, and no winner
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: "X",
    winner: null,
  });
  // TODO: use math.random to make initial turn randomly 'X' or 'O' (no test needed) Add message to tell whose turn it is.

  const makeMove = (event) => {
    dispatch({ type: "made_move", index: event.target.id });
  };

  const resetGame = () => {
    dispatch({ type: "reset_game" });
  };

  const { board, turn, winner } = state;
  // removed declare winner
  return {
    board,
    turn,
    winner,
    makeMove,
    resetGame,
  };
}

/* video code
  const [state, dispatch] = useReducer(reducer, {
    board: Array[9].fill[""],
    turn: "X",
    winner: null,
  });
  */
