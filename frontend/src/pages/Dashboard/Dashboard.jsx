import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <main className="dashboard-main">
        <PageHeader title="Dashboard" subtitle="Track your recovery journey" />

        <div className="dashboard-grid">
          <div className="dashboard-card border-primary">
            <h3 className="dashboard-card-title">Sobriety Counters</h3>
            <p className="dashboard-card-description">Track milestones.</p>
            <button className="dashboard-card-button btn-primary disabled">
              New Entry
            </button>
          </div>

          <div className="dashboard-card border-green">
            <h3 className="dashboard-card-title">Daily Journal</h3>
            <p className="dashboard-card-description">
              Record your thoughts and feelings.
            </p>
            <button className="dashboard-card-button btn-green disabled">
              Journal Thoughts
            </button>
          </div>

          <div className="dashboard-card border-purple">
            <h3 className="dashboard-card-title">Community Forums</h3>
            <p className="dashboard-card-description">
              Connect with others in recovery.
            </p>
            <button className="dashboard-card-button btn-purple disabled">
              Browse Forums
            </button>
          </div>

          <div className="dashboard-card border-orange">
            <h3 className="dashboard-card-title">Drug Encounters</h3>
            <p className="dashboard-card-description">
              Document experiences for harm reduction.
            </p>
            <button className="dashboard-card-button btn-orange disabled">
              Log Encounter
            </button>
          </div>

          <div className="dashboard-card border-red">
            <h3 className="dashboard-card-title">Drug Library</h3>
            <p className="dashboard-card-description">
              Harm reduction & interaction info
            </p>
            <Link to="/drug-library">
              <button className="dashboard-card-button btn-red">
                Browse Library
              </button>
            </Link>
          </div>

          <div className="dashboard-card border-blue">
            <h3 className="dashboard-card-title">Resources</h3>
            <p className="dashboard-card-description">
              Crisis support & recovery tools
            </p>
            <Link to="/resources">
              <button className="dashboard-card-button btn-blue">
                View Resources
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
