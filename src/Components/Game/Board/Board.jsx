import React from "react";
import "./Board.css";
import Cells from "../Cells/Cells";

const Board = (props) => {
  const cells = props.cellValues.map((value, index) => {
    const cellHighlight =
      props.winnerCombination && props.winnerCombination.indexOf(index) >= 0;
    return (
      <Cells
        key={index}
        value={value}
        cellHighlight={cellHighlight}
        clickCell={() => props.clickCell(index)}
      />
    );
  });

  return <div id="board">{cells}</div>;
};

export default Board;
