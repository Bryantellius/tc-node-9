import { Component } from "react";
import UserCard from "./components/user";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        reason: "",
        success: false,
      },
      username: "",
      history: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  getUser() {
    // fetching codewars user data
    fetch(`https://www.codewars.com/api/v1/users/${this.state.username}`)
      .then((response) => response.json())
      .then((newUser) => {
        console.log(newUser);
        let updatedHistory = [...this.state.history];

        let foundUser = updatedHistory.find(
          (prevUser) => prevUser.username == newUser.username
        );

        if (!foundUser) {
          updatedHistory.unshift(newUser);
        }

        this.setState({
          user: newUser,
          isLoading: false,
          history: updatedHistory,
        });
      })
      .catch((err) => console.error(err));
  }

  handleSearch(event) {
    event.preventDefault();

    this.getUser();
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header flex">
          <div className="flex-half">
            <h1>Hello World!</h1>
            {/* Form field for codewars username search */}
            <form onSubmit={this.handleSearch}>
              <label htmlFor="username">Codewars Username:</label>
              <input
                type="text"
                placeholder="Bryantellius, e.g."
                value={this.state.username}
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
              />
              <button type="submit">Search</button>
            </form>
            {/* Display name, username, rank, score */}
            <UserCard user={this.state.user} />
          </div>

          {/* Rendered list of users from the previous searches */}
          <div className="flex-half">
            <h2>History</h2>
            {this.state.history.slice(1).map((prevUser) => (
              <UserCard key={prevUser.username} user={prevUser} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
