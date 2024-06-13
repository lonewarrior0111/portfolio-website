import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/PageHeaderContent";

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeader headerText="Resume!" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
}

export default Resume;
