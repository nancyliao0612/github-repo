import { Switch, Route } from "react-router-dom";
import RepoList from "./RepoList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Repo(props) {
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(1);
  const url = "https://api.github.com/users/";
  const { username } = useParams();

  // https://api.github.com/users/nancyliao0612/repos?page=2&per_page=10
  const fetchRepos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}${username}/repos?page=${page}&per_page=10`
      );
      const data = await response.json();
      console.log(data);
      setRepo((oldRepo) => {
        return [...oldRepo, ...data];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        // console.log("it worked");
        setPage((oldPage) => oldPage + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <>
      <div>
        <Header username={username}>
          <p>repository lists</p>
        </Header>
        <RepoList repo={repo} username={username} />
        {loading && <h2 className="loading-message">Loading...</h2>}
      </div>
    </>
  );
}

export default Repo;
