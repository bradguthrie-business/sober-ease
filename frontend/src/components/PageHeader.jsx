import "./PageHeader.scss";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page-header">
      <h2 className="page-header-title">{title}</h2>
      <p className="page-header-subtitle">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
