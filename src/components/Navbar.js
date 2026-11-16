import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-container">
        <NavLink to="/" className="brand">
         <span className="brand-icon">N</span>
<span>EXORA<span className="brand-dot">.</span></span>
        </NavLink>

       <div className="nav-links">
  <NavLink to="/" end>Home</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/services">Services</NavLink>
  <NavLink to="/contact">Contact</NavLink>
</div>

        <NavLink to="/login" className="nav-cta">
          Get Started <span>↗</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;