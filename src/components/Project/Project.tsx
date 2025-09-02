import githubIcon from "../../assets/github.svg";
import { Container } from "./styles";
// import DownloadApp from '../../assets/download.webp'
import { Flip } from "react-awesome-reveal";
import externalLink from "../../assets/external-link.svg";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <Flip>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/omprakash1305/AI_Based_Code_Debbuger" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AI Based Code Editor and Debugger</h3>
              <p>
                AI-powered debugging & enhancement: Get real-time AI suggestions to improve your code.
                Multiple AI Models: Choose from Llama 3.1, Llama 3.2, DeepSeek, Mixtral, Qwen, and more.
Chat History Management: Maintains previous executions, errors, and AI feedback for learning.
Web framework execution: Run Django, Flask, and Streamlit apps directly inside the editor.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Typescript</li>
                <li>Flask</li>
                <li>API Gateway</li>
              </ul>
            </footer>
          </div>
        </Flip>

        <Flip>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/omprakash1305/MINI-Proj1" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                </div>
            </header>
            <div className="body">
              <h3>Encrypted Voice Transmission Using Hasing Algortihm</h3>
              <p> This is the project made with the help of Python with libraries of Hashing Alogirthm. We have used SHA-256 Algorith for the specify Hashing. It is worked as the voice is seperated as byte and ssent to the chunkset and transfer to the other-end. </p>
            </div>
            <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer>
          </div>
        </Flip>

        <Flip>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/omprakash1305/TicTacToe" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://tic-tac-toe-three-sand-70.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Tic Tac Toe</h3>
              <p>
                Developed an interactive Tic Tac Toe web application using React.js and JavaScript, featuring a responsive UI and real-time gameplay logic. Implemented dynamic state management for turn-based moves, win/draw detection, and game reset functionality, providing an engaging and user-friendly experience across devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
                <li>React JS</li>
              </ul>
            </footer>
          </div>
        </Flip>


        <Flip>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/omprakash1305/StopWatch" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="stop-watch-phi-ten.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>StopWatch</h3>
              <p>Developed a responsive stopwatch web application using React and Tailwind CSS, featuring start, pause, reset, and lap-time functionalities with real-time updates. Designed with a clean UI and optimized performance, allowing users to track time efficiently for productivity, sports, and personal use.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Scipt</li>
                <li>React JS</li>
              </ul>
            </footer>
          </div>
        </Flip>
      </div>
    </Container>
  );
}