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
        I am Shravya Chepa and I am a developer. I am a Master's student in
        Computer Science at San Diego State University. I worked in a start-up
        as a Junior Full-stack developer in Bengaluru, India. I've focused on
        various areas of web development including front-end development,
        back-end development and cloud services. Currently I am also exploring
        machine learning, data science and mobile development.
      </p>

      <div className="hobby-section">
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
          <span>On repeat</span>
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
          <span>Reading</span>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
            alt="current-book"
          />
        </div>
        <div className="current-location">
          <span>Here</span>
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429158.12591886224!2d-117.43861503117581!3d32.82412055814722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1701985259192!5m2!1sen!2sus"
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
