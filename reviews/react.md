# React

## Topical Questions

1. What is React.js?

   - JavaScript Library for integrating js and html
   - Used for creating dynamic, single page applications

2. What is JSX?

   - Stands for **JavaScript Extended Markup Language**
   - Syntax for creating markup with JS expressions

3. What is `create-react-app` cli tool?

   - Tool for creating React applications
   - Templates a React project with basic configurations and files
   - Using npx: `npx create-react-app <PROJECT_NAME>`

4. How do you start the react development server?

   - `npm start` is the script to start the pre-configured react development server
   - `http://localhost:3000` is the default host and port that the dev server runs on

5. Why is component **state** important in React.js?

   - So that we can reference and update values within a component throughout the lifecycle of a component. Also, updating state will trigger a re-render of a component.

6. Describe an example of using **props** in React.js.

   - In a Tictactoe program, we may have a parent component that represents the game board, with child components representing the game squares. Props is used to pass data, for example the mark of the current turn, to the child components when a mark is placed on the board.
   - In a form component, we may have some form fields that are controlled inputs that receive function values as props that will update component state when the user updates the input's value
   - In a list component, we may reuse the list based on different list items passed as children props.

7. How would you go about using the **Fetch API** in React.js?

   - Let's say we want to display a list of films when a user visits a page, I would call the Fetch API within a useEffect to fetch the list using an api resource, set the results to state, which will re-render the DOM to display the results to the user.
   - Let's say we want to display a list of films when a user clicks a button, I would call the Fetch API within a click event listener to fetch the list using an api resource, set the results to state, which will re-render the DOM to display the results to the user.

8. What is **React Router** and how does it work?

   - Since React.js is rendered as a _Single Page Application_, we use it to navigate between pages, or component views, based on the url the user is attempting to visit. It is used by implementing a router instance in your react application where routes are defined with paths and elements. React Router will control which component view is rendered to the ReactDOM depending on the url path matching a defined route path.

9. What is the difference between **class components** and **functional components**?

   - One is a class, one is a function
   - Hooks can only be used in functional components
   - FC accepts props as a parameter to the function itself
   - CC accepts props as a parameter to the class constructor, and is assigned to the instance as a property value
   - CC defines state values are assigned to an object on a `state` property within the constructor
   - FC defines state with `useState` hook calls, two values are returned in an array `[value, setValue]`
   - CC renders JSX by returning JSX from a `render` method
   - FC renders JSX by returning JSX from itself
