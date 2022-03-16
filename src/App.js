import { Switch, Route } from "react-router-dom";
import RepoList from "./RepoList";
import { useState, useEffect } from "react";

function App() {
  const [repo, setRepo] = useState([]);
  const [username, setUsername] = useState("nancyliao0612");
  const url = "https://api.github.com/users/";

  useEffect(() => {
    fetch(`${url}${username}/repos`)
      .then((resp) => resp.json())
      .then((data) => setRepo(data));

    // if (repo) {
    //   const newRepo = repo.map((item) => {
    //     const { name, stargazers_count } = item;
    //     return {
    //       name: name,
    //       startCount: stargazers_count,
    //     };
    //   });
    //   console.log(newRepo);
    //   setRepo(newRepo);
    // } else {
    //   setRepo([]);
    // }
  }, [username]);
  console.log(repo);

  return (
    <div>
      <Route path={`/users/:username/repos`}>
        <RepoList repo={repo} />
      </Route>
    </div>
  );
}

export default App;
