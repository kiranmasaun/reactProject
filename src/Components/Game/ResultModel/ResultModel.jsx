import React from "react";
import classNames from "classnames";
import "./ResultModel.css";

const ResultModel = (props) => {
  const resultClassNames = classNames({
    "modal-open": props.gameOver,
  });

  const winnerString = props.winner
    ? `Winner is ${props.winner}.`
    : "Its a tie.";
  return (
    <div id="modal-overlay" className={resultClassNames}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{winnerString}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={props.getNewGame}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModel;
