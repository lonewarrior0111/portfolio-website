import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/PageHeaderContent";

function Contact() {
  return (
    <section id="contact" className="contact">
      <PageHeader headerText="Contact!" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
}

export default Contact;
