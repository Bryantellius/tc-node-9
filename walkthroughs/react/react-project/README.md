# React

## State and Props

### What is state?

- State values are internal values to a component that when updated, trigger the ReactDOM to re-render the component.
- State is stored in an object (**in class components**)

### What is props?

- Values that are passed from parent to child components
- Props are stored in an object

```jsx
class SomeComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      someState: true,
      count: 0,
      inputValue: "",
    };
  }

  render() {
    return; // ...
  }
}
```

## Component Lifecycle

1. Created/ instantiated (`constructor`)
   - the component instance is created
   - initial state is defined
2. Rendered (`render`)
   - returns jsx
3. Mounted (`componentDidMount`)
   - fetch requests
   - event listeners
   - timers/intervals
4. Updated (`componentDidUpdate`)
   - any logic that needs to run after any re-render (not including the initial render)
5. Unmounted (`componentWillUnmount`)
   - cancel fetch requests
   - remove event listeners
   - clear timers/intervals
