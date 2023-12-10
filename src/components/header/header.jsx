import { timeline } from "../../images";

function Header({title}) {
  return (
    <div className="header">
      <h1 className="page-title">{title}</h1>
      <img className="top-tweets" src={timeline} alt="avatar" />
    </div>
  );
}

export default Header;
