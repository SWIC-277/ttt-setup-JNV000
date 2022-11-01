import Square from "components/Square/Square";
import useGame from "./Hooks/useGame";
import "./App.css";

// configuration file is set up so ./ is not needed for files in src

function App() {
  const { board, winner, makeMove } = useGame();

  // return <h1>Tic Tac Toe</h1>;
  return (
    <main>
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
}

export default App;
