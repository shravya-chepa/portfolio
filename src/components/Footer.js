import astronautDog from "../assets/astro-dog.png";
import astronautCat from "../assets/astro-cat.png";
import { useNavigate } from "react-router-dom";

import "./Footer.scss";

import React, {useState} from "react";

function Footer() {
  const navigate = useNavigate();

  const handlePlayGame = () => {
    navigate("/game");
  };
  const [selectedAstronaut, setSelectedAstronaut] = useState("dog")

  const handleAstronautChange = (event) => {
    setSelectedAstronaut(event.target.value)
  }

  const astronautImages = {
    dog: astronautDog,
    cat: astronautCat,
    none: null,
  }
  return (
    <div className="footer-section">
      <div className="astronaut">
        {astronautImages[selectedAstronaut] && (
          <img src={astronautImages[selectedAstronaut]} alt={`astro-${selectedAstronaut}`} />
        )}
      </div>
      <div className='astronaut-selector'>
          <label htmlFor='astronaut-dropdown'>Choose your astronaut </label>
          <select id='astronaut-dropdown' value={selectedAstronaut} onChange={handleAstronautChange}>
            <option value={"dog"}>Dog</option>
            <option value={"cat"}>Cat</option>
            <option value={"none"}>None</option>
          </select>
        </div>
        <button onClick={handlePlayGame} className="play-spaceinvaders">
        Play Space Invaders
      </button>
      <div className="attributes">
        <a href="https://www.flaticon.com" title="icons" target="_blank" rel="noopener noreferrer">
          Icons created by Freepik, bukeicon, Pixel perfect, Uniconlabs -
          Flaticon
        </a>
        <br />
        <a href="https://codepen.io/ybensira/pen/byYNBZ" target="_blank" rel="noopener noreferrer">
          Background hyperspace animation by yonatan
        </a>
      </div>

      <p>©2023 Shravya Chepa</p>
    </div>
  );
}

export default Footer;
