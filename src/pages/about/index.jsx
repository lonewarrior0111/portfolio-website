import PageHeader from "../../components/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const personalDetails = [
  {
    label: "Name",
    value: "John Doe",
  },
  {
    label: "Age",
    value: "28",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "johndoe@abc.com",
  },
  {
    label: "Contact No",
    value: "+91 0123456789",
  },
];

const jobSummary =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae voluptas perspiciatis illum velit nesciunt quisquam eius aliquid omnis porro nobis optio et ad laborum fugiat, nisi molestias distinctio? Nesciunt hic dicta fugit. Nisi dolorem cupiditate, harum omnis, minus natus, dicta labore quasi magni exercitationem commodi aut aspernatur delectus nemo.";

function About() {
  // console.log(personalDetails);
  return (
    <section id="about" className="about">
      <PageHeader
        headerText="About Me!"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full stack developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>

            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">
          {/* <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          > */}
          <div className="about_content_servicesWrapper_innerContent">
            <div>
              <IoLogoJavascript
                size={60}
                color="var( --yellow-theme-main-color)"
              />
            </div>
            <div>
              <FaReact size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaNodeJs size={60} color="var( --yellow-theme-main-color)" />
            </div>
          </div>
          {/* </Animate> */}
        </div>
      </div>
    </section>
  );
}

export default About;
