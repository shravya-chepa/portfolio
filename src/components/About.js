import "./About.scss";

import codeImg from "../assets/code.png";
import bookImg from "../assets/book.png";
import filmSlateImg from "../assets/film-slate.png";
import musicImg from "../assets/music.png";
import cameraImg from "../assets/camera.png";
import travelImg from "../assets/road-trip.png";

function About() {
  return (
    <div className="about-section" id="about">
      <h1 className="cursive">About</h1>

      <p>
        I am Shravya Chepa and I am a developer. I graduated as a Bachelor of
        Technology in Computer Science in 2022. Over the past year I've worked
        as a Junior Full-stack developer. I've focused on various areas of web
        development including front-end development, back-end development and
        cloud services. Currently I am also exploring machine learning, data
        science and mobile development.
      </p>

      <div className="hobby-section">
        <p>I enjoy... </p>
        <div className="hobby-items">
          <img src={codeImg} alt="code" />
          <img src={bookImg} alt="books" />
          <img src={filmSlateImg} alt="films" />
          <img src={musicImg} alt="music" />
          <img src={cameraImg} alt="photography" />
          <img src={travelImg} alt="road-trips" />
        </div>
      </div>
      <div className="currents-embeds">
        <div className="spotify-embed">
          <h5>On repeat</h5>
          <iframe
            title="On repeat"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/4OoYfejHABzYe2mG8p5s8b?utm_source=generator"
            width="100%"
            height="220"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="current-read">
          <h5>Reading</h5>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
            alt="current-book"
          />
        </div>
        <div className="current-location">
          <h5>Here</h5>
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18319458.902385782!2d58.48517786828938!3d23.680850263016623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1686209747045!5m2!1sen!2sin"
            width="100%"
            height="152"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <p className="resume-section">
        To know more about my skills and activities, check out my{" "}
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/shravya-chepa-7991441b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn{" "}
        </a>
        or{" "}
        <a
          href="https://drive.google.com/uc?/export=download&id=1SQFAhS1JIm3BFddJouQcQwUVFjjmbOya"
          className="resume-link"
          download="shravya_chepa_resume"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
      </p>
      <br />
    </div>
  );
}

export default About;
