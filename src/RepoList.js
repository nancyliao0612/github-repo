import { Link } from "react-router-dom";
import { IoGitNetworkOutline, IoStarOutline } from "react-icons/io5";

function RepoList(props) {
  const repoData = props.repo.map((item, index) => {
    return (
      <div key={index} className="repo-list">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="repo-info-container">
          <IoStarOutline />
          <p>{item.stargazers_count}</p>
          <IoGitNetworkOutline />
          <p>{item.forks_count}</p>
          {/* <p>Updated on {item.pushed_at}</p> */}
        </div>
      </div>
    );
  });

  return <div>{repoData}</div>;
}

export default RepoList;
