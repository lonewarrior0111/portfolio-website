import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/PageHeaderContent";

function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeader headerText="Skills!" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
}

export default Skills;
