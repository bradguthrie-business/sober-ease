import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { resourceData } from "../../utils/resourceData";
import "./Resources.scss";

const Resources = () => {
  const currentDay = format(new Date(), "MMMM dd, yyyy");
  const getUserState = () => {
    // todo: get user's state from profile or settings
    return "Florida";
  };
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
          subtitle={`The current state of resources for those struggling with sobriety and mental health issues in ${getUserState()} as of ${currentDay}.`}
        />

        <div className="resources-page-content-card">
          <div className="resources-page-markdown">
            <ReactMarkdown>{resourceData}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;
