import { Link } from "react-router-dom";
import "./GlobalNav.scss";
import { useAuth } from "../../auth/AuthProvider";

const GlobalNav = () => {
  const auth = useAuth();
  const user = auth?.user;

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

        <div className="global-nav-auth">
          {user ? (
            <>
              <span className="global-nav-user">{user?.displayName}</span>

              <Link to="/logout" className="global-nav-link">
                <button className="google">Logout</button>
              </Link>
            </>
          ) : (
            <Link to="/login" className="global-nav-link">
              <button className="google">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
