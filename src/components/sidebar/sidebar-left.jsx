import { NavLink } from "react-router-dom";
import { Button, Settings} from "../index";
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
} from "../../icons";


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
            <NavLink className={"sidebar-nav"} to="/explore">
              <img src={explore} alt="" />
              <h4>Explore</h4>
            </NavLink>
          </li>

          <li>
            <NavLink className={"sidebar-nav"} to="/notifications">
              <img src={notification} alt="" />
              <h4>Notifications</h4>
            </NavLink>
          </li>
          <li>
            <NavLink className={"sidebar-nav"} to="/messages">
              <img src={message} alt="" />
              <h4>Messages</h4>
            </NavLink>
          </li>

          <li>
            <NavLink className={"sidebar-nav"} to="/bookmarks">
              <img src={bookmarks} alt="" />
              <h4>Bookmarks</h4>
            </NavLink>
          </li>
          <li>
            <NavLink className={"sidebar-nav"} to="/lists">
              <img src={lists} alt="" />
              <h4>Lists</h4>
            </NavLink>
          </li>

          <li>
            <NavLink className={"sidebar-nav"} to="/profile">
              <img src={profile} alt="" />
              <h4>Profile</h4>
            </NavLink>
          </li>
          <li>
            <NavLink className={"sidebar-nav"} to="/more">
              <img src={more} alt="" />
              <h4>More</h4>
            </NavLink>
          </li>
        </ul>

        <Button style={"sidebar-left-button"} />
        <Settings />
      </nav>
     
    </>
  );
}

export default SidebarLeft;
