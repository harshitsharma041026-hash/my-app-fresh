
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Fotter from "./Fotter.js";

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="main-container">
        <Outlet />
      </main>

      <Fotter />
    </div>
  );
}

export default Layout;
