import { Link } from "react-router-dom";
import "./GlobalNav.scss";

const GlobalNav = () => {
  return (
    <nav className="global-nav">
      <div className="global-nav-content">
        <h1 className="global-nav-title">SoberEase</h1>
        <div className="global-nav-links">
          <Link to="/" className="global-nav-link">
            Home
          </Link>
          <Link to="/dashboard" className="global-nav-link">
            Dashboard
          </Link>
          <Link to="/drug-library" className="global-nav-link">
            Drug Library
          </Link>
          <Link to="/resources" className="global-nav-link">
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
