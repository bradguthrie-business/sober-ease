import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import "./Resources.scss";
import { kratomData } from "../utils/kratomData";
import PageHeader from "../components/PageHeader";

const Resources = () => {
  return (
    <div className="resources-page-container">
      <nav className="resources-page-nav">
        <div className="resources-page-nav-content">
          <h1 className="resources-page-nav-title">SoberEase</h1>
          <Link to="/dashboard" className="resources-page-nav-link">
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="resources-page-main">
        <PageHeader
          title="Resources"
          subtitle="Project documentation and information"
        />

        <div className="resources-page-content-card">
          <div className="resources-page-markdown">
            <ReactMarkdown>{kratomData}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;
