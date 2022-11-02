import Square from "components/Square/Square";
import "./App.css";
import useGame from "./Hooks/useGame";

// configuration file is set up so ./ is not needed for files in src

function App() {
  // get necessary props and data from useGame hook.
  const { board, winner, makeMove } = useGame();

  // return <h1>Tic Tac Toe</h1>;
  // we will crate a game board consisting of 9 squares.
  // formatting is handled by the CSS
  // Note: My project will require a 2d/nested arrays to track game board
  // due to its dynamic/user inputted number of rows and columns.
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((square, index) => (
          <Square
            key={index}
            id={index}
            handleClick={makeMove}
            marker={square}
          />
        ))}
      </div>
    </main>
  );
  // I wouldn't mind a reset button
}

export default App;
