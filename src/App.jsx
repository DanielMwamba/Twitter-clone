import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
} from "react-router-dom";

import {
  Home,
  ProfileUser,
  Notifications,
  Messages,
  Explore,
  Bookmarks,
  More,
  Lists,
} from "./pages";

import Layout from "./components/layout.jsx";
import SidebarLeft from "./components/sidebar-left.jsx";
import Trends from "./components/trends.jsx";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <SidebarLeft />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/" element={<ProfileUser />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>

        <Trends />
      </Layout>
    </BrowserRouter>
  );
}
