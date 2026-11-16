
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <section className="dashboard">
      <aside className="dashboard-sidebar">
        <span className="eyebrow">WORKSPACE</span>
        <h2>Nexora Admin</h2>
        <NavLink to="/dashboard" end>Overview</NavLink>
        <NavLink to="/dashboard/projects">Projects</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </aside>

      <div className="dashboard-content">
        <div className="dashboard-heading">
          <span className="eyebrow">YOUR WORKSPACE</span>
          <h1>Dashboard</h1>
          <p>Welcome to your Nexora project workspace.</p>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default Dashboard;
