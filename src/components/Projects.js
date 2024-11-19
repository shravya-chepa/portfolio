import "./Projects.scss";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScroll, setStartScroll] = useState(0);

  const projects = [
    "VizIt", "Hitam Hub", "Penvention", "Smart Hospital Feedback System", "Chepa Writes", "Pricewise", "Travelaries", "CoDoc", "Space Invaders", "Quotes API", "Infinite Scroll", "Text Analyzer", "Techscribe", "Quiz Mania", "Countdown", "Rock Paper Scissors", "Pong", "Learn CSS in a Day"
  ];

  const handlePlayGame = () => {
    navigate('/game');
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setStartScroll(scrollPosition);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = startY - e.clientY;
    const newPosition = Math.max(Math.min(startScroll + delta, 2000), 0);
    setScrollPosition(newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollUp = () => {
    setScrollPosition(Math.max(scrollPosition - 150, 0));
  };

  const scrollDown = () => {
    setScrollPosition(Math.min(scrollPosition + 150, 2000));
  };

  return (
    <div className="projects-section" >
      <div className="prevent-select projects" id="projects">
      <div className="starry-bg"></div>
      <div className="starry-bg"></div>
      <div className="starry-bg"></div>
      <div className="starry-bg"></div>
      <h1 className="star-wars">Projects</h1>
      
      <div className="scroll-controls">
        <button onClick={scrollUp} className="scroll-button up" aria-label="Scroll Up">↑</button>
        <button onClick={scrollDown} className="scroll-button down" aria-label="Scroll Down">↓</button>
      </div>

      <div className="projects-content"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="crawl"
          style={{
            transform: `rotateX(25deg) translateY(-${scrollPosition}px)`,
            animation: 'none',
            top: 0
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-title">
                <h2>{project}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
    <button onClick={handlePlayGame} className="play-spaceinvaders">
        Play Space Invaders
      </button>
    </div>
    
  );
}

export default Projects;