import Square from "components/Square/Square";
import "./App.css";
import useGame from "./Hooks/useGame";

// configuration file is set up so ./ is not needed for files in src

function App() {
  // get necessary props and data from useGame hook.
  const { board, winner, makeMove, resetGame } = useGame();
  // we will create a game board consisting of 9 squares.
  // formatting is handled by the CSS
  // Note: My project will require a 2d/nested arrays to track game board
  // due to its dynamic/user inputted number of rows and columns.
  return (
    <main>
      <h1>Tic Tac Toe</h1>

      {winner && <p>{winner} wins!</p>}

      <div className="board">
        {board.map((square, index) => (
          <Square
            key={index}
            id={index}
            handleClick={!winner && makeMove}
            marker={square}
          />
        ))}
      </div>
      <button
        type="button"
        className="rounded bg-blue-500 py-2 px-4 text-base font-bold text-white hover:bg-blue-700"
        onClick={resetGame}
      >
        Reset
      </button>
    </main>
  );
  // short cirucuit: if there is a winner (it is not null) then we show a paragraph with winner wins!
  // If there is no winner && make move ensures moves cannot be made after there is a winner
}

export default App;
