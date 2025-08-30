import ScrollAnimation from "react-animate-on-scroll"
import { BrowserRouter } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import Illustration from "../../assets/illustration.svg"
import instagramIcon from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import telegram from '../../assets/telegram.svg'
import { Container } from "./styles"
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Om Prakash S</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Fresher</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/om-prakash-81736a256/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/omprakash1305/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        <a
          href="https://t.me/imbatman2004"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://www.instagram.com/om_prakash_13_05/" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="Instagram" />
        </a>
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}