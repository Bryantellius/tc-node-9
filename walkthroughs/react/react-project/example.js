let react = {
  state: {},
  useState(initialValue) {
    if (this.state.count === undefined) {
      this.state.count = initialValue;
    }

    return [
      this.state.count,
      (newValue) => {
        this.state.count = newValue;
      },
    ];
  },
};

function Counter(props) {
  let [count, setCount] = react.useState(0);

  setInterval(() => {
    setCount(count + 1);
    Counter();
  }, 1000);

  return count;
}
