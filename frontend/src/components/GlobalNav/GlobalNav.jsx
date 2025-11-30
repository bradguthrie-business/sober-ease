import { Link, useNavigate } from "react-router-dom";
import "./GlobalNav.scss";
import { useAuth } from "../../auth/AuthProvider";
import { toast } from "react-toastify";

const GlobalNav = () => {
  const auth = useAuth();
  const user = auth?.user;

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      if (auth) {
        await auth.signOut();
      }
      toast.success("Successfully logged out");
      navigate("/", { replace: true });
    } catch (e) {
      console.error("Logout failed:", e);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="global-nav">
      <div className="global-nav-content">
        <h1 className="global-nav-title">SoberEase</h1>
        {user && (
          <div className="global-nav-links">
            <Link to="/dashboard" className="global-nav-link">
              <button className="global-nav-button">Dashboard</button>
            </Link>
            <Link to="/drug-library" className="global-nav-link">
              <button className="global-nav-button">Drug Library</button>
            </Link>
            <Link to="/resources" className="global-nav-link">
              <button className="global-nav-button">Resources</button>
            </Link>
          </div>
        )}

        <div className="global-nav-auth">
          {user ? (
            <>
              <span className="global-nav-user">{user?.displayName}</span>

              <button className="global-nav-button" onClick={handleSignOut}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="global-nav-link">
              <button className="global-nav-button">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
