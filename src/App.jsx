import Square from "components/Square/Square";
import useGame from "./Hooks/useGame";
import "./App.css";

// configuration file is set up so ./ is not needed for files in src

function App() {
  // TODO: Add useReducer hook to track state of: board, turn, winner
  // const board = new Array(9).fill("");
  const { board, makeMove, winner, turn } = useGame();

  // return <h1>Tic Tac Toe</h1>;
  return board.map((square, index) => (
    <Square key={index} id={index} handleClick={makeMove} />
  ));
}

export default App;
