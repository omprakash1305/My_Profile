import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import reactIcon from '../../assets/react-icon.svg'
import telegram from '../../assets/telegram.svg'
import { Container } from './styles'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
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
        <a
          href="https://www.instagram.com/om_prakash_13_05/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
