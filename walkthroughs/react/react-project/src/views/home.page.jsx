import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../helpers/user.helper";

export default function HomePage(props) {
  let [userList, setUserList] = useState([
    "Bryantellius",
    "hunterandersen",
    "CruzSanchez",
  ]);
  let [newUser, setNewUser] = useState("");
  let [error, setError] = useState("");

  async function addNewUser(event) {
    event.preventDefault();

    // check to see if the username is value
    let result = await getUser(newUser);

    console.log(result);

    if (result.success == false) {
      // if not show feedback
      setError(result.msg);
    } else {
      // if so add to list
      setUserList([...userList, newUser]);
      setError("");
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Home</h1>
        <form onSubmit={addNewUser}>
          <p style={{ color: "red" }}>{error}</p>
          <input
            type="text"
            value={newUser}
            onChange={(event) => setNewUser(event.target.value)}
            minLength={3}
            required
          />
          <button>Add</button>
        </form>
        <h2>View User Data</h2>
        <ul>
          {userList.map((username) => {
            return (
              <li key={username}>
                <Link to={`/user/${username}`}>{username}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
