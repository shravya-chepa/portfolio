import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

import vizitImg from "../assets/projects/vizit.png"
import hitamhubImg from "../assets/projects/hitamhub.jpg"
import penventionImg from "../assets/projects/penvention.png"
import medevImg from "../assets/projects/medev.jpeg"
import chepawritesImg from "../assets/projects/chepa-writes.png"
import pricewiseImg from "../assets/projects/pricewise.png"
import travelariesImg from "../assets/projects/travelaries.png"
import codocImg from "../assets/projects/codoc.png"
import spaceinvadersImg from "../assets/projects/spaceinvaders.png"
import quotesapiImg from "../assets/projects/quotes-api.png"
import infiniteScrollImg from "../assets/projects/infinite-scroll.png"
import textAnalyzerImg from "../assets/projects/text-analyzer.png"
import quizManiaImg from "../assets/projects/quiz-mania.png"
import countdownImg from "../assets/projects/countdown.png"
import rockPaperScissorsImg from "../assets/projects/rock-paper-scissors.png"
import pongImg from "../assets/projects/pong.png"
import learnCssImg from "../assets/projects/learn-css.png"

function Projects() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScroll, setStartScroll] = useState(0);
  const [openProjectCard, setOpenProjectCard] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "VizIt",
      imageLink: vizitImg,
      description: "VizIt is a data analysis web application that allows users to upload CSV files and perform comprehensive data exploration, cleaning, and machine learning tasks. The app provides interactive visualizations including bar plots, line plots, scatter plots, and histograms, alongside detailed data exploration features like structure analysis, missing value handling, and temporal insights. Additionally, the application offers advanced statistical modeling capabilities, including simple linear regression and multinomial logistic regression with predictive modeling and performance metrics.",
      githubUrl: "https://github.com/shravya-chepa/VizIt",
      websiteUrl: "https://viz-it.streamlit.app/"
    },
    {
      title: "Hitam Hub",
      imageLink: hitamhubImg,
      description: "Hitam Hub is an Enterprise Resource Application developed using Flutter and Dart to digitize university operations across multiple departments. The project encompassed modules for student information management, course administration, financial transactions, and faculty operations, and many other university operations utilizing Firebase for robust data management and integration.",
      githubUrl: "https://github.com/AmTeja/HitamHub",
      // websiteUrl: "https://hitamhub.com"
    },
    {
      title: "Penvention",
      imageLink: penventionImg,
      description: "A comprehensive digital platform designed to empower writers and poets by providing them a space to showcase their literary works to a broad audience. The platform was strategically developed using Node.js and MongoDB, creating a robust infrastructure that enables over 10 writers to share their creative content and engage with readers through an immersive user experience.",
      githubUrl: "https://github.com/shravya-chepa/penvention_v2",
      // websiteUrl: "https://penvention.com"
    },
    {
      title: "Smart Hospital Feedback System",
      imageLink: medevImg,
      description: "Developed a comprehensive patient feedback application that transforms audio input into actionable insights through advanced natural language processing models. The system leverages machine learning techniques to perform speech-to-text conversion, sentiment analysis, keyword extraction, and text categorization of patient feedback. Created an intuitive dashboard for healthcare administrators, enabling data-driven decision-making and facilitating continuous improvement in patient care and hospital operations.",
      githubUrl: "https://github.com/shravya-chepa/medev",
      // websiteUrl: "https://smarthospitalfeedback.com"
    },
    {
      title: "Chepa Writes",
      imageLink: chepawritesImg,
      description: "A personal blog where I write sometimes. It is also integrated with my quotes API which is a collection of all my favorite quotes from various authors.",
      githubUrl: "https://github.com/shravya-chepa/blog",
      websiteUrl: "https://chepa-writes.vercel.app/"
    },
    {
      title: "Pricewise",
      imageLink: pricewiseImg,
      description: "A price comparison tool to help users find the best deals online using a web crawler.",
      githubUrl: "https://github.com/shravya-chepa/pricewise",
      // websiteUrl: "https://pricewise.com"
    },
    {
      title: "Travelaries",
      imageLink: travelariesImg,
      description: "A social media application for those who love to travel. Keep track of all the adventures of your friends and loved ones!",
      githubUrl: "https://github.com/shravya-chepa/travelaries",
      // websiteUrl: "https://travelaries.com"
    },
    {
      title: "CoDoc",
      imageLink: codocImg,
      description: "A collaborative documentation platform for teams to write and share knowledge.",
      githubUrl: "https://github.com/shravya-chepa/codoc",
      websiteUrl: "https://codoc-chepa.vercel.app"
    },
    {
      title: "Space Invaders",
      imageLink: spaceinvadersImg,
      description: "A classic arcade game recreated with modern web technologies.",
      githubUrl: "https://github.com/shravya-chepa/space-invaders",
      websiteUrl: "https://space-invader-chepa.vercel.app/"
    },
    {
      title: "Quotes API",
      imageLink: quotesapiImg,
      description: "An API providing a collection of my favorites quotes from different authors.",
      githubUrl: "https://github.com/shravya-chepa/quotes-api",
      // websiteUrl: "https://quotesapi.com"
    },
    {
      title: "Infinite Scroll",
      imageLink: infiniteScrollImg,
      description: "A JavaScript implementation for seamless infinite scrolling on websites.",
      githubUrl: "https://github.com/shravya-chepa/infinite-scroll",
      websiteUrl: "https://infinite-scroll-me.vercel.app/"
    },
    {
      title: "Text Analyzer",
      imageLink: textAnalyzerImg,
      description: "A tool that analyzes text for readability, grammar, and style.",
      githubUrl: "https://github.com/shravya-chepa/textanalyzer",
      // websiteUrl: "https://textanalyzer.com"
    },
    {
      title: "Techscribe",
      imageLink: "https://example.com/techscribe-image.jpg",
      description: "A platform for tech enthusiasts to write and share technical content.",
      githubUrl: "https://github.com/shravya-chepa/techscribe",
      // websiteUrl: "https://techscribe.com"
    },
    {
      title: "Quiz Mania",
      imageLink: quizManiaImg,
      description: "An interactive quiz platform where users can participate in quizzes on different categories.",
      githubUrl: "https://github.com/shravya-chepa/quiz-mania",
      websiteUrl: "https://quiz-mania.vercel.app/"
    },
    {
      title: "Countdown",
      imageLink: countdownImg,
      description: "A simple countdown timer for setting up time-based events.",
      githubUrl: "https://github.com/shravya-chepa/countdown",
      websiteUrl: "https://shravya-chepa.github.io/countdown/"
    },
    {
      title: "Rock Paper Scissors",
      imageLink: rockPaperScissorsImg,
      description: "A digital version of the classic rock-paper-scissors game.",
      githubUrl: "https://github.com/shravya-chepa/rock-paper-scissors-game",
      // websiteUrl: "https://rockpaperscissors.com"
    },
    {
      title: "Pong",
      imageLink: pongImg,
      description: "A recreation of the classic Pong game built with HTML5.",
      githubUrl: "https://github.com/shravya-chepa/pong",
      websiteUrl: "https://shravya-chepa.github.io/pong/"
    },
    {
      title: "Learn CSS in a Day",
      imageLink: learnCssImg,
      description: "An interactive guide to learning CSS in one day.",
      githubUrl: "https://github.com/shravya-chepa/Learn-CSS-in-a-day",
      websiteUrl: "https://shravya-chepa.github.io/Learn-CSS-in-a-day/"
    }
  ];
  

  const handlePlayGame = () => {
    navigate("/game");
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

  const handleOpenProjectCard = (project) => {
    setSelectedProject(project);
    setOpenProjectCard(true);
  };

  const handleCloseProjectCard = () => {
    setOpenProjectCard(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-section">
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

        <div
          className="projects-content"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="crawl"
            style={{
              transform: `rotateX(25deg) translateY(-${scrollPosition}px)`,
              animation: "none",
              top: 0
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="project-item" onClick={() => handleOpenProjectCard(project)}>
                <div className="project-title">
                  <h2>{project.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={handlePlayGame} className="play-spaceinvaders">
        Play Space Invaders
      </button>

      {openProjectCard && (
  <ProjectCard project={selectedProject} onClose={handleCloseProjectCard} />
)}
    </div>
  );
}

export default Projects;
