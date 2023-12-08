import { NavLink } from "react-router-dom";
import { Button, Avatar } from "../components";
// import { profilePhoto } from '../images'
import {
  message,
  explore,
  lists,
  twitter,
  notification,
  bookmarks,
  profile,
  more,
  home,
  iconprivate,
} from "../icons";

function SidebarLeft() {
  return (
    <>
      <nav className="sidebar">
        <ul>
          <li>
            <div className="sidebar-nav">
              <img src={twitter} alt="" />
            </div>
          </li>
          <li>
            <NavLink className={"sidebar-nav"} to="/">
              <img src={home} alt="" />
              <h4>Home</h4>
            </NavLink>
          </li>

          <li>
            <div className="sidebar-nav">
              <img src={explore} alt="" />
              <h4>Explore</h4>
            </div>
          </li>

          <li>
            <NavLink className={"sidebar-nav"} to="/notifications">
              <img src={home} alt="" />
              <h4>Notifications</h4>
            </NavLink>
          </li>
          <li>
            <div className="sidebar-nav">
              <img src={message} alt="" />
              <h4>Messages</h4>
            </div>
          </li>

          <li>
            <div className="sidebar-nav">
              <img src={bookmarks} alt="" />
              <h4>Bookmarks</h4>
            </div>
          </li>
          <li>
            <div className="sidebar-nav">
              <img src={lists} alt="" />
              <h4>Lists</h4>
            </div>
          </li>

          <li>
            <div className="sidebar-nav">
              <img src={profile} alt="" />
              <h4>Profile</h4>
            </div>
          </li>
          <li>
            <div className="sidebar-nav">
              <img src={more} alt="" />
              <h4>More</h4>
            </div>
          </li>
        </ul>

        <Button style={"sidebar-left-button"} />
      </nav>
    </>
  );
}

export default SidebarLeft;
