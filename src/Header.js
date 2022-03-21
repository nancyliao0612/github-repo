import { BsDot } from "react-icons/bs";

function Header(props) {
  // const { avatar_url } = props.repo[0].owner;
  return (
    <div className="header-container">
      {/* <img src={avatar_url} alt="" /> */}
      <h2>{props.username}</h2>
      {props.children}
      <div className="devider">
        <BsDot className="dot" />
        <BsDot className="dot" />
        <BsDot className="dot" />
      </div>
    </div>
  );
}

export default Header;

// "https://avatars.githubusercontent.com/u/2?v=4"
