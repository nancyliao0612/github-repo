import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import { HiOutlineLink } from "react-icons/hi";
import {
  IoGitNetworkOutline,
  IoStarOutline,
  IoEyeOutline,
} from "react-icons/io5";

function RepoDetail() {
  const { repo } = useParams();
  const { username } = useParams();
  const [repoDetail, setRepoDetail] = useState([]);
  const url = `https://api.github.com/repos/${username}/${repo}`;

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setRepoDetail(data));
  }, []);

  return (
    <>
      <Header username={username}>
        <p>single repository</p>
      </Header>
      <section className="repo-container">
        <div className="repo-detail">
          <h3>{repoDetail.full_name}</h3>
          <a href={repoDetail.html_url} target="_blank">
            <HiOutlineLink />
          </a>
        </div>
        <div className="repo-detailInfo-container">
          <h4>About</h4>
          <p>{repoDetail.description}</p>
          <div className="repo-icons">
            <IoStarOutline />
            <p>{repoDetail.stargazers_count}</p>
            <IoGitNetworkOutline />
            <p>{repoDetail.forks_count}</p>
            <IoEyeOutline />
            <p>{repoDetail.subscribers_count}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RepoDetail;
