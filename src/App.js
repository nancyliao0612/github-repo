import { Switch, Route } from "react-router-dom";
import RepoList from "./RepoList";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState([]);
  const [username, setUsername] = useState("nancyliao0612");
  const url = "https://api.github.com/users/";

  const fetchRepos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${username}/repos`);
      const data = await response.json();
      setRepo(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  console.log(repo);

  return (
    <div>
      <Route path={`/users/:username/repos`}>
        <RepoList repo={repo} />
      </Route>
      {loading && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
