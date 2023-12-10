import { timeline } from "../../images";

function Header() {
  return (
    <div className="header">
      <h1 className="page-title">Home</h1>
      <img className="top-tweets" src={timeline} alt="avatar" />
    </div>
  );
}

export default Header;
