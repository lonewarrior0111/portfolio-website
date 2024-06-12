import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello! I'm Shubham Singh Parihar,
          <br />
          I'm an aspiring MERN stack developer
        </h1>
      </div>
      <Animate
        play
        duration={2}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home_contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
