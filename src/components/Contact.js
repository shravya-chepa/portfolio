import "./Contact.scss";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log("to send: ", toSend);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      process.env.REACT_APP_EMAILJS_USER_ID
    );

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          // alert("Message sent successfully");
          // window.location.reload(false);
          setSent(true);
          setToSend({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log("Error: ", error);
          // alert("Failed sending message, please try again");
          setSent(false);
        }
      );
  };
  return (
    <div id="contact" className="contact-section">
      <h1 className="cursive">Contact</h1>
      <p>
        Feel free to drop me a message if you think I would be a good fit to contribute to your interesting project, or just say hi!
      </p>
      <div id="contact-form">
        <form onSubmit={sendEmail}>
          <ul>
            <div className="sender-details">
              <li>
                <input
                  type="text"
                  name="from_name"
                  placeholder="name"
                  onChange={handleChange}
                  value={toSend.from_name}
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  name="from_email"
                  placeholder="email"
                  value={toSend.from_email}
                  onChange={handleChange}
                  required
                />
              </li>
            </div>
            <div className="message-details">
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  value={toSend.subject}
                  onChange={handleChange}
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="message"
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </li>
            </div>

            <li>
              <input
                type="submit"
                className="flat-button"
                value={sent ? "MESSAGE SENT" : "SEND"}
              />
            </li>
          </ul>
        </form>
      </div>
      <div className="contact-info">
        <div className="contact-info-text">
          <FontAwesomeIcon
            style={{ marginRight: 10 }}
            icon={faLocationDot}
            color="#d49813"
          />
          <span> San Diego, California, United States</span>
          <br />
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ marginRight: 4 }}
            color="#d49813"
          />
          <span> shravya.chepa@gmail.com</span>
        </div>
        <div className="social-media-handles">
          <a
            href="https://github.com/shravya-chepa"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ marginRight: 10 }}
              icon={faGithub}
              color="#00acee"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shravya-chepa-7991441b7"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ marginRight: 10 }}
              icon={faLinkedin}
              color="#0072b1"
            />
          </a>
          <a
            href="https://www.instagram.com/shravya_chepa/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ marginRight: 10 }}
              icon={faInstagram}
              color="#d62976"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
