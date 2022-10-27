import "./App.css";
import { useReducer } from "react";
import Square from "components/Square/Square";
// configuration file is set up so ./ is not needed for files in src

/*
function reducer(state, action) {
  switch (action.type) {
    case "made_move": {

    }
  }
}
*/

function App() {
  // TODO: Add useReducer hook to track state of: board, turn, winner
  /* video code
  const [state, dispatch] = useReducer(reducer, {
    board: Array[9].fill[""],
    turn: "X",
    winner: null,
  });
  */
  const board = new Array(9).fill("");

  // return <h1>Tic Tac Toe</h1>;
  return board.map((square, index) => (
    <Square key={index} id={index} handleClick={() => {}} />
  ));
}

export default App;
