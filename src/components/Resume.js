import "./Resume.scss";

function Resume() {
  return (
    <div className="resume-section" id="resume">
      <h1 className="cursive">Resume</h1>
      <div className="download-section">
        <p>
          If you have an interesting project and think I would be a good fit to
          contribute, let's get started!
        </p>

        <iframe
          className="resume-embed"
          title="resume"
          src="https://drive.google.com/file/d/1SQFAhS1JIm3BFddJouQcQwUVFjjmbOya/preview"
          width="100%"
          height="350"
          allow="autoplay"
        ></iframe>
        <a
          href="https://drive.google.com/uc?/export=download&id=1SQFAhS1JIm3BFddJouQcQwUVFjjmbOya"
          download="shravya_chepa_resume"
          target="_blank"
          rel="noreferrer"
        >
          download
        </a>
      </div>
    </div>
  );
}

export default Resume;
