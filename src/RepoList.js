import { Link } from "react-router-dom";
import { IoGitNetworkOutline, IoStarOutline } from "react-icons/io5";

function RepoList(props) {
  const repoData = props.repo.map((item, index) => {
    return (
      <div key={index} className="repo-container">
        <Link to={`/users/${item.owner.login}/repos/${item.name}`}>
          <h3>{item.name}</h3>
          {/* <h3>{item.owner.login}</h3> */}
          <div className="repo-info-container">
            <IoStarOutline />
            <p>{item.stargazers_count}</p>
            <IoGitNetworkOutline />
            <p>{item.forks_count}</p>
            {/* <p>Updated on {item.pushed_at}</p> */}
          </div>
        </Link>
      </div>
    );
  });

  return <>{repoData}</>;
}

export default RepoList;
