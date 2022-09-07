import React from "react";

function Item(props) {
  return (
    <li>
      {props.content} <button onClick={props.onDelete}>X</button>
    </li>
  );
}

export default Item;
