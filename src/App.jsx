import tweetsData from "./utils/tweetsData.js";
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
  ProfileTweet,
  Notifications,
  Messages,
  Explore,
  Bookmarks,
  More,
  Lists,
} from "./pages";

import {Layout, SidebarLeft} from "./components";
import Trends from "./components/trends/trends.jsx";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <SidebarLeft />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileUser profile={tweetsData} />} />
          <Route path=":title" element={<ProfileTweet tweet={tweetsData} />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/more" element={<More />} />
          <Route path="/lists" element={<Lists />} />

        </Routes>

        <Trends />
      </Layout>
    </BrowserRouter>
  );
}
