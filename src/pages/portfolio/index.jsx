import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/PageHeaderContent";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="Portfolio!"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}

export default Portfolio;
