import { useReducer } from "react";
import checkWinner from "services/game.service";

function reducer(state, action) {
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
    default:
      throw new Error("Invalid action");
  }
}

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
