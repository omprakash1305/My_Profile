import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import { Container } from "./styles";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:omprakashsuresh13@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:omprakashsuresh13@gmail.com">omprakashsuresh13@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919003985132"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919003985132">(+91) 9003985132</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}