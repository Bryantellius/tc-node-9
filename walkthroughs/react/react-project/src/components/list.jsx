import React from "react";

function List(props) {
  // Conditional Rendering
  
  if (props.ordered) {
    return <ol>{this.props.children}</ol>;
  } else {
    return <ul>{this.props.children}</ul>;
  }
}

export default List;
