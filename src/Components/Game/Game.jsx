import React, { useState } from "react";
import "./Game.css";
import Board from "./Board/Board";
import ResultModel from "./ResultModel/ResultModel";
import { calculateResult } from "../../utils/WinnerResult";

const Game = () => {
  const [cellValues, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isXvalue, setIsX] = useState(true);
  const [isGameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(undefined);
  const [numberLeft, setNumberLeft] = useState(9);
  const [winnerCombination, setWinnerCombination] = useState([]);

  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const getNewGame = () => {
    setValue(["", "", "", "", "", "", "", "", ""]);
    setIsX(false);
    setGameOver(false);
    setNumberLeft(9);
    setWinner(undefined);
    setWinnerCombination([]);
  };

  const clickCell = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = isXvalue ? "X" : "O";

      const numbLeft = numberLeft - 1;
      const cellResult = calculateResult(newCellValues, numbLeft, cellIndex);

      setValue(newCellValues);
      setIsX(!isXvalue);
      setGameOver(cellResult.hasResult);
      setNumberLeft(numbLeft);
      setWinner(cellResult.winner);
      setWinnerCombination(cellResult.winnerCombination);
    }
  };

  return (
    <React.Fragment>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          clickCell={clickCell}
          winnerCombination={winnerCombination}
        />
      </div>
      <ResultModel
        gameOver={isGameOver}
        winner={winner}
        getNewGame={getNewGame}
      />
    </React.Fragment>
  );
};

export default Game;
