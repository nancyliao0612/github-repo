import { Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import Repo from "./Repo";

function App() {
  const [username, setUsername] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }

  return (
    <Switch>
      <Route exact path="/">
        <main className="input-container">
          <div className="username-inputbox">
            <h3>Enter a github username: </h3>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="username"
            />
            <Link to={`users/${username}/repos`}>Get the repositories</Link>
          </div>
        </main>
      </Route>
      <Route path={`/users/${username}/repos`}>
        <Repo username={username} />
      </Route>
    </Switch>
  );
}

export default App;
