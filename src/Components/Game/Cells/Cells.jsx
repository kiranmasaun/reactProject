import React from "react";
import "./Cells.css";
import classnames from "classnames";

const Cells = (props) => {
  const cells = classnames({
    cell: true,
    winner: props.cellHighlight,
  });

  const cellContent = classnames({
    "cell-content": true,
    populated: props.value,
  });

  return (
    <button className={cells} onClick={props.clickCell}>
      <span className={cellContent}>{props.value}</span>
    </button>
  );
};

export default Cells;
