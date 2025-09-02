import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import cIcon from "../../assets/c-icon.png";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import java from "../../assets/java.svg";
import jsIcon from "../../assets/js-icon.svg";
import Om from "../../assets/omprakash.png";
import powerbiIcon from "../../assets/power-bi-icon.png";
import python from "../../assets/python.svg";
import reactIcon from "../../assets/react-icon.svg";
import sqlIcon from "../../assets/sql-icon.png";
import { Container } from "./styles";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Om Prakash, an enthusiastic Software Engineer skilled in web development, machine learning, and scalable software solutions
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build responsive web applications, fine-tune ML models, and implement robust backend services.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I'm passionate about leveraging technology to solve real-world problems and continuously learning to stay at the forefront of the industry.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor Of Technology (Computer Science and Technology)</h4>
            <p>Manakula Vinayagar Institute of Technology, Puducherry | July 2026 - Present</p>
            <p>8.5 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
          <img src={cIcon} alt="C" />
          </ScrollAnimation>
          </div>
          {/* SQL */}
        <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
        <img src={sqlIcon} alt="SQL" />
      </ScrollAnimation>
      </div>

      {/* Power BI */}
      <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
      <img src={powerbiIcon} alt="Power BI" />
      </ScrollAnimation>
      </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={Om} alt="OmPrakash" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
