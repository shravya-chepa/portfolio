import "./About.scss";

import codeImg from "../assets/code.png";
import bookImg from "../assets/book.png";
import filmSlateImg from "../assets/film-slate.png";
import musicImg from "../assets/music.png";
import cameraImg from "../assets/camera.png";
import travelImg from "../assets/road-trip.png";
import profilePhoto from "../assets/shravya-chepa.jpg"

function About() {
  return (
    <div className="about-section" id="about">
      <h1 className="cursive">About</h1>
      <div className="about-content">
        <div className="about-profile-photo">
          <img src={profilePhoto} alt="Shravya writing on a whiteboard" className="about-photo"/>
        </div>
        <div className="about-text">
          <p>
            Hello! I’m Shravya Chepa, a passionate and driven Software Developer pursuing Master’s in Computer Science at San Diego State University. My journey in technology is fueled by curiosity and a love for solving complex problems. With hands-on experience in full-stack development, machine learning, and cloud technologies, I strive to create innovative solutions that make a meaningful impact.
          </p>
          <p>
            My professional experience spans diverse roles, including enhancing web accessibility for academic institutions, crafting personalized career guidance platforms, engineering microservices to automate athlete performance analysis for sports agencies and developing IoT-powered science kits to inspire young learners. I’ve built scalable applications using frameworks like React, Next.js, and Flask, while leveraging cloud platforms like AWS and Azure for scalability. Beyond my work, I’ve contributed to impactful projects like the Smart Hospital Feedback System and HitamHub, gaining recognition for my ability to lead and contribute to innovative solutions.
          </p>
          <p>When I'm not coding, you'll find exploring new perspectives through literature and philosophy. Whether it’s tackling a challenging project or brainstorming innovative ideas, I’m always eager to push boundaries and create meaningful experiences. Let’s connect and bring ideas to life!</p>
        </div>
      </div>

      {/* <div className="hobby-section">
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
            allowFullScreen=""
            // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
          href="https://drive.google.com/file/d/1YTIrSv7ZlsFv3sR_yRrNTLF7ZLCM87wm/view?usp=sharing"
          className="resume-link"
          download="shravya_chepa_resume"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
      </p> */}
      <br />
    </div>
  );
}

export default About;
