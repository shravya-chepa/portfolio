import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


import "./Badges.scss"

const Badges = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsScrolling(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  return (
    <div className='badges-section'>
        <h1 className='star-wars'>Certifications</h1>
        <div 
      ref={containerRef}
      className="badge-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
    
      <div className="badge red">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
          <path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
        </svg>
        <p className="title">AWS</p>
        <p className="subtitle">Cloud Practitioner</p>
        <a className='cert-link' href='https://www.credly.com/badges/188c7375-775b-48f1-821d-db85432704d5' target='_blank' rel="noopener noreferrer">View <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
      </div>
      <div className="badge green">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
          <path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
        </svg>
        <p className="title">Microsoft</p>
        <p className="subtitle">Azure Fundamentals</p>
        <a className='cert-link' href='https://learn.microsoft.com/en-us/users/shravyachepa-3482/credentials/359b020b8c58c9d5?ref=https%3A%2F%2Fwww.linkedin.com%2F' target='_blank' rel="noopener noreferrer">View <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
      </div>
      <div className="badge gray">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
          <path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
        </svg>
        <p className="title">Meta</p>
        <p className="subtitle">Full Stack Engineer</p>
        <a className='cert-link' href='https://www.credly.com/badges/83762c38-aa3a-41ab-b119-a8692861988b/linked_in_profile' target='_blank' rel="noopener noreferrer">View <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
      </div>
      <div className="badge yellow">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
          <path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
        </svg>
        <p className="title">IBM</p>
        <p className="subtitle">Data Science Program</p>
        <a className='cert-link' href='https://credentials.edx.org/credentials/40a98642295d4fdbb74476d3ecccad3d/' target='_blank' rel="noopener noreferrer">View <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
      </div>
      <div className="badge blue">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
          <path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
        </svg>
        <p className="title">University of <br />Michigan</p>
        <p className="subtitle">Python</p>
        <a className='cert-link' href='https://www.coursera.org/account/accomplishments/specialization/certificate/NMRF7Z2VHF3X' target='_blank' rel="noopener noreferrer">View <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
      </div>
      <div className="badge purple">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="216px" height="232px" viewBox="0 0 216 232">
          <path fill="#2B2B2B" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
        </svg>
        <p className="title">Oracle<br />Academy</p>
        <p className="subtitle">Java Programming</p>
      </div>
    </div>
    </div>
    
  );
};

export default Badges;