class ClassComp {
  constructor(props) {
    this.props = props;

    this.state = {
      count: 0,
    };
  }

  delayChange() {
    setTimeout(() => {
      this.state.count++;

      this.render();
    }, 2000);
  }

  render() {
    this.delayChange();

    console.log(this.state.count);
  }
}


// Traditionally Stateless Components
function FuncComp(props) {
  const state = {
    count: 0,
  };

  function delayChange() {
    setTimeout(() => {
      state.count++;

      FuncComp();
    }, 2000);
  }

  delayChange();

  console.log(state.count);
}

const app = new ClassComp();

app.render(); // 0
FuncComp(); // 0
