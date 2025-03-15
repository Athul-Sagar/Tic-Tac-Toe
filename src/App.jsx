import React from "react";
import "./App.css";
import UseTicTacToe from "./hooks/UseTicTacToe";

const App = () => {
  const { board, handleClick, calculateWinner, resetGame, getStatusMessage } = UseTicTacToe();
  
  const winner = calculateWinner(board);
  
  return (
    <div className="game">
      <div className={`status ${winner ? "winner" : ""}`}>
        {getStatusMessage()}
        <button onClick={resetGame}>Reset Game</button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          const isWinningCell = winner && board[index] === winner; 
          return (
            <button
              className={`cell ${isWinningCell ? "winning" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
