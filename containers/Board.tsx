import { useEffect, useState } from "react";
import Square from "../components/Square";
import calculateWinner from "../logic/Calculate";
type Player = "X" | "O" | "BOTH" | null;

function Board() {
  //SETTING STATES
  const alternate = Math.round(Math.random() * 1) === 1 ? "X" : "O";
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(alternate);
  const [winner, setWinner] = useState<Player>(null);

  //RESETTING THE BOARD
  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(alternate);
  }

  //HANDLING A CLICK ON THE SQUARES
  function setSquareValue(index: number) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  //CHECKING FOR THE WINNER EVERYTIME SQUARES UPDATE
  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);

  //RETURNING UI
  return (
    <div className="board">
      {!winner && <h1>Hey {currentPlayer}, it is your turn</h1>}
      {winner && winner !== "BOTH" && <h1>Congratulations {winner}!</h1>}
      {winner && winner === "BOTH" && <h1>It is a tie!</h1>}

      <div className="grid">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default Board;
