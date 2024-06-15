import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/PageHeaderContent";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import "./styles.scss";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import resume from "../../resume/resume.pdf";

// function Resume() {
//   return (
//     <section id="resume" className="resume">
//       <PageHeader headerText="Resume!" icon={<BsInfoCircleFill size={40} />} />
//       <div className="timeline">
//         <div className="timeline_experience">
//           <h3 className="timeline_experience_header-text">Experience</h3>
//           <VerticalTimeline
//             layout={"1-column"}
//             lineColor="var(--yellow-theme-main-color)"
//           >
//             {data.experience.map((item, i) => (
//               <VerticalTimelineElement
//                 key={i}
//                 className="timeline_experience_vertical-timeline-element"
//                 contentStyle={{
//                   background: "none",
//                   color: "var(--yellow-theme-sub-text-color)",
//                   border: "1.5px solid var(--yellow-theme-main-color)",
//                 }}
//                 date="2020 - Present"
//                 icon={<MdWork />}
//                 iconStyle={{
//                   background: "#181818",
//                   color: "var(--yellow-theme-main-color)",
//                 }}
//               >
//                 <div className="vertical-timeline-element-title-wrapper">
//                   <h3>{item.title}</h3>

//                   <h4>{item.subTitle}</h4>
//                 </div>
//                 <p className="vertical-timeline-element-title-wrapper-description">
//                   {item.description}{" "}
//                 </p>
//               </VerticalTimelineElement>
//             ))}
//           </VerticalTimeline>
//         </div>
//         <div className="timeline_education">
//           <h3 className="timeline_education_header-text">Education</h3>
//           <VerticalTimeline
//             layout={"1-column"}
//             lineColor="var(--yellow-theme-main-color)"
//           >
//             {data.education.map((item, i) => (
//               <VerticalTimelineElement
//                 key={i}
//                 className="timeline_experience_vertical-timeline-element"
//                 contentStyle={{
//                   background: "none",
//                   color: "var(--yellow-theme-sub-text-color)",
//                   border: "1.5px solid var(--yellow-theme-main-color)",
//                 }}
//                 date="2020 - Present"
//                 icon={<IoSchool />}
//                 iconStyle={{
//                   background: "#181818",
//                   color: "var(--yellow-theme-main-color)",
//                 }}
//               >
//                 <div className="vertical-timeline-element-title-wrapper">
//                   <h3>{item.title}</h3>

//                   <h4>{item.subTitle}</h4>
//                 </div>
//                 <p className="vertical-timeline-element-title-wrapper-description">
//                   {item.description}{" "}
//                 </p>
//               </VerticalTimelineElement>
//             ))}
//           </VerticalTimeline>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Resume;
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline_experience">
          <h3 className="timeline_experience_header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                // date="2020 - Present"
                // size="18px"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>

                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}{" "}
                </p>
                <h3>{item.date}</h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          {/* <Link to={resume} download>
            <button>Download resume</button>
          </Link> */}
        </div>
        <div className="timeline_education">
          <h3 className="timeline_education_header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                // date="2020 - Present"
                icon={<IoSchool />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <br />
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}{" "}
                </p>
                <h3>{item.date}</h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;
