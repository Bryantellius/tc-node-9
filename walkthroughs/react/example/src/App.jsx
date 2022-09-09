import React from "react";
import { useUser } from "./hooks/useUser";

function App() {
  const { user, getUser } = useUser();

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => getUser("hunterandersen")}>Get Hunter CW</button>
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
    </div>
  );
}

export default App;
