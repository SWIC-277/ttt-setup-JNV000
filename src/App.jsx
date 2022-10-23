import "./App.css";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
    }
  }
}

function App() {
  // TODO: Add useReducer hook to track state of: board, turn, winner
  const [state, dispatch] = useReducer(reducer, {
    board: Array[9].fill[""],
    turn: "X",
    winner: null,
  });

  return <h1>Tic Tac Toe</h1>;
}

export default App;
