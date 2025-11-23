import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">SoberEase</h1>
        <p className="home-subtitle">
          Your journey to recovery, supported with compassion and understanding
        </p>

        <div className="home-features">
          <div className="home-feature-card">
            <h2 className="home-feature-title">Sobriety Tracking</h2>
            <p className="home-feature-description">
              Track your progress with personalized counters for each substance
            </p>
          </div>

          <div className="home-feature-card">
            <h2 className="home-feature-title">Community Support</h2>
            <p className="home-feature-description">
              Connect with others in substance-specific support forums
            </p>
          </div>

          <div className="home-feature-card">
            <h2 className="home-feature-title">Daily Journaling</h2>
            <p className="home-feature-description">
              Document your thoughts, triggers, and victories
            </p>
          </div>

          <div className="home-feature-card">
            <h2 className="home-feature-title">Harm Reduction</h2>
            <p className="home-feature-description">
              Access evidence-based harm reduction information
            </p>
          </div>
        </div>

        <Link to="/dashboard" className="home-cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}
