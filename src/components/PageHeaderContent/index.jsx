import "./styles.scss";

function PageHeader(props) {
  return (
    <div className="wrapper">
      <h2>{props.headerText}</h2>
      <span>{props.icon}</span>
    </div>
  );
}

export default PageHeader;
