import { Link } from "react-router-dom";

function RepoList(props) {
  const repoData = props.repo.map((item) => {
    return <p>{item.name}</p>;
  });

  return <div>{repoData}</div>;
}

export default RepoList;
