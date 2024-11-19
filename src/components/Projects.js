import "./Projects.scss";
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const handlePlayGame = () => {
    navigate('/game'); 
  }
  return (
    <div className="projects-section" id="projects">
      <h1 className="star-wars">Projects</h1>

      <div className="projects-main">
        <ul className="projects-list">
          <li className="project-item">
            <p>
              <a
                href="https://shravyachepa-textanalyzer-streamlit-app-ied54z.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Text Analyzer</strong>
              </a>
            </p>
            <p>
              A tool to assist users with writing. It has features that can
              convert speech to text, provide analytics, suggest synonyms and
              antonyms, help find meanings of words, spell check among many
              others. Check it out <a href="https://shravyachepa-textanalyzer-streamlit-app-ied54z.streamlit.app/">here</a>
            </p>
          </li>
          <li className="project-item">
            <p>
              <strong>HITAM ERP</strong>
            </p>
            <p>
              Worked with a team to build an Enterprise Resource Planning mobile
              application for my college, Hyderabad Institute of Technology and
              Management. We digitalized several functions of the students and
              the management.{" "}
            </p>
          </li>
          <li className="project-item">
            <p>
              <strong>Penvention</strong>
            </p>
            <p>
              A portal for poets and writers who wish to publish their content
              online within a community.{" "}
            </p>
          </li>
        </ul>
      </div>
      <div className="projects-fun">
        <div className="projects-fun-intro">
          <h3>Fun</h3>
          <p>Here are some fun projects I worked on while learning to code!</p>
        </div>
        <div className="projects-fun-items">
        <a
            href="https://shravya-chepa.github.io/infinite-scroll/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Infinite scroll
          </a>
          <a
            href="https://shravya-pwdgen.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Password maker
          </a>
          <a
            href="https://shravya-chepa.github.io/countdown/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Countdown
          </a>
          <a
            href="https://quiz-mania.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quizmania
          </a>
          <a
            href="https://shravya-chepa.github.io/quotegen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quotegen
          </a>
          <a
            href="https://shravya-chepa.github.io/Learn-CSS-in-a-day/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn css in a day
          </a>
        </div>
      </div>
      <br />
      <button onClick={handlePlayGame} className="play-spaceinvaders">Play SpaceInvaders</button>
    </div>
  );
}

export default Projects;
