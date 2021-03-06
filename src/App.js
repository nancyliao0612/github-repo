import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Repo from "./Repo";
import RepoDetail from "./RepoDetail";

function App() {
  const [username, setUsername] = useState("");

  // get the github username from user
  function handleChange(e) {
    setUsername(e.target.value);
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <main className="input-container">
            <div className="username-inputbox">
              <h3>Enter a github username: </h3>
              <input
                type="text"
                onChange={handleChange}
                name="username"
                placeholder="username"
              />
              <Link to={`/users/${username}/repos`}>Get the repositories</Link>
            </div>
          </main>
        }
      />

      <Route exact path={`/users/:username/repos`} element={<Repo />} />
      <Route path={`/users/:username/repos/:repo`} element={<RepoDetail />} />
    </Routes>
  );
}

export default App;
