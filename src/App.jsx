import Home from "./pages/home.jsx";
import { sidebarLeft } from "./components";
import Layout from "./components/layout.jsx";
import SidebarLeft from "./components/sidebar-left.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <SidebarLeft />
      <Home />
      <SidebarLeft />
      
    </Layout>
  );
}
