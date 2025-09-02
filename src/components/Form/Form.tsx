import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./styles";

export function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message || !isHuman) {
      toast.error("Please fill all fields and verify you are human.", { position: "bottom-left" });
      return;
    }
    toast.success("Email successfully sent!", { position: "bottom-left" });
    // Add your form submission logic here
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <ReCAPTCHA
          sitekey="6Lfj9NYfAAAAAP8wPLtzrsSZeACIcGgwuEIRvbSg"
          onChange={() => setIsHuman(true)}
        />
        <button
          type="submit"
          disabled={!email || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
      {/* <div className="social-media">
        <a href="https://www.linkedin.com/in/om-prakash-81736a256/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/omprakash1305/" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://t.me/imbatman2004" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://www.instagram.com/om_prakash_13_05/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div> */}
    </Container>
  );
}