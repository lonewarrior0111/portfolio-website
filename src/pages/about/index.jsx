import PageHeader from "../../components/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

function About() {
  return (
    <section id="about" className="about">
      <PageHeader
        headerText="About Me!"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}

export default About;
