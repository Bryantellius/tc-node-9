import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);

    console.log("List - created");
  }

  componentDidMount() {
    console.log("List - mount");
  }

  componentDidUpdate() {
    console.log("List - update");
  }

  componentWillUnmount() {
    console.log("List - unmount");
  }

  render() {
    // Conditional Rendering
    console.log("List - render");

    if (this.props.ordered) {
      return <ol>{this.props.children}</ol>;
    } else {
      return <ul>{this.props.children}</ul>;
    }
  }
}

export default List;
