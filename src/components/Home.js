import React, { useEffect, useRef, useState } from 'react';
import "./Home.scss";
import astronautDog from "../assets/astro-dog.png";
import astronautCat from "../assets/astro-cat.png";
// import profile from "../assets/profile_photo.png";
import { useNavigate } from "react-router-dom";


const HyperspaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const RAD = Math.PI / 180;
    const VELOCITY_INC = 1.01;
    const VELOCITY_INIT_INC = 1.025;
    const JUMP_VELOCITY_INC = 1.25;
    const JUMP_SIZE_INC = 1.15;
    const SIZE_INC = 1.01;
    const BASE_SIZE = 1;

    const WARP_COLORS = [
      [197, 239, 247],
      [25, 181, 254],
      [77, 5, 232],
      [165, 55, 253],
      [255, 255, 255],
    ];

    const randomInRange = (max, min) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    class Star {
      STATE = {
        alpha: Math.random(),
        angle: randomInRange(0, 360) * RAD,
      }

      reset = () => {
        const angle = randomInRange(0, 360) * (Math.PI / 180);
        const vX = Math.cos(angle);
        const vY = Math.sin(angle);
        const travelled =
          Math.random() > 0.5
            ? Math.random() * Math.max(window.innerWidth, window.innerHeight) + (Math.random() * (window.innerWidth * 0.24))
            : Math.random() * (window.innerWidth * 0.25);
        this.STATE = {
          ...this.STATE,
          iX: undefined,
          iY: undefined,
          active: travelled ? true : false,
          x: Math.floor(vX * travelled) + window.innerWidth / 2,
          vX,
          y: Math.floor(vY * travelled) + window.innerHeight / 2,
          vY,
          size: BASE_SIZE,
        }
      }

      constructor() {
        this.reset();
      }
    }

    const generateStarPool = size => new Array(size).fill().map(() => new Star());

    class JumpToHyperspace {
      STATE = {
        stars: generateStarPool(300),
        bgAlpha: 0,
        sizeInc: SIZE_INC,
        velocity: VELOCITY_INC
      }

      constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.bind();
        this.setup();
        this.render();
      }

      render = () => {
        const {
          STATE: {
            bgAlpha,
            velocity,
            sizeInc,
            initiating,
            jumping,
            stars,
          },
          context,
          render
        } = this;

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        if (bgAlpha > 0) {
          context.fillStyle = `rgba(0, 0, 0, ${bgAlpha})`;
          context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        }

        const nonActive = stars.filter(s => !s.STATE.active);
        if (!initiating && nonActive.length > 0) {
          nonActive[0].STATE.active = true;
        }

        for (const star of stars.filter(s => s.STATE.active)) {
          const { active, x, y, iX, iY, iVX, iVY, size, vX, vY } = star.STATE;

          if (
            ((iX || x) < 0 ||
              (iX || x) > window.innerWidth ||
              (iY || y) < 0 ||
              (iY || y) > window.innerHeight) &&
            active &&
            !initiating
          ) {
            star.reset(true);
          } else if (active) {
            const newIX = initiating ? iX : iX + iVX;
            const newIY = initiating ? iY : iY + iVY;
            const newX = x + vX;
            const newY = y + vY;

            const caught =
              (vX < 0 && newIX < x) ||
              (vX > 0 && newIX > x) ||
              (vY < 0 && newIY < y) ||
              (vY > 0 && newIY > y);

            star.STATE = {
              ...star.STATE,
              iX: caught ? undefined : newIX,
              iY: caught ? undefined : newIY,
              iVX: caught ? undefined : iVX * VELOCITY_INIT_INC,
              iVY: caught ? undefined : iVY * VELOCITY_INIT_INC,
              x: newX,
              vX: star.STATE.vX * velocity,
              y: newY,
              vY: star.STATE.vY * velocity,
              size: initiating ? size : size * (iX || iY ? SIZE_INC : sizeInc),
            }

            let color = `rgba(255, 255, 255, ${star.STATE.alpha})`;
            if (jumping) {
              const [r, g, b] = WARP_COLORS[randomInRange(0, WARP_COLORS.length)];
              color = `rgba(${r}, ${g}, ${b}, ${star.STATE.alpha})`;
            }

            context.strokeStyle = color;
            context.lineWidth = size;
            context.beginPath();
            context.moveTo(star.STATE.iX || x, star.STATE.iY || y);
            context.lineTo(star.STATE.x, star.STATE.y);
            context.stroke();
          }
        }

        this.animationFrame = requestAnimationFrame(render);
      }

      initiate = () => {
        if (this.STATE.jumping || this.STATE.initiating) return;
        this.STATE = {
          ...this.STATE,
          initiating: true,
          initiateTimestamp: new Date().getTime(),
        }

        this.tween('velocity', VELOCITY_INIT_INC);
        this.tween('bgAlpha', 0.1);

        for (const star of this.STATE.stars.filter(s => s.STATE.active)) {
          star.STATE = {
            ...star.STATE,
            iX: star.STATE.x,
            iY: star.STATE.y,
            iVX: star.STATE.vX,
            iVY: star.STATE.vY,
          }
        }
      }

      jump = () => {
        this.STATE = {
          ...this.STATE,
          bgAlpha: 0,
          jumping: true,
        }

        this.tween('velocity', JUMP_VELOCITY_INC);
        this.tween('bgAlpha', 0.5);
        this.tween('sizeInc', JUMP_SIZE_INC);

        setTimeout(() => {
          this.STATE = {
            ...this.STATE,
            jumping: false,
          }

          this.tween('bgAlpha', 0);
          this.tween('velocity', VELOCITY_INC);
          this.tween('sizeInc', SIZE_INC);
        }, 2500);
      }

      enter = () => {
        if (this.STATE.jumping) return;
        const { initiateTimestamp } = this.STATE;
        this.STATE = {
          ...this.STATE,
          initiating: false,
          initiateTimestamp: undefined,
        }

        if (new Date().getTime() - initiateTimestamp > 600) {
          this.jump();
        } else {
          this.tween('velocity', VELOCITY_INC);
          this.tween('bgAlpha', 0);
        }
      }

      bind = () => {
        this.canvas.addEventListener('mousedown', this.initiate);
        this.canvas.addEventListener('touchstart', this.initiate);
        this.canvas.addEventListener('mouseup', this.enter);
        this.canvas.addEventListener('touchend', this.enter);
      }

      setup = () => {
        this.context.lineCap = 'round';
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
      }

      tween = (prop, target) => {
        const duration = 0.25;
        const startTime = performance.now();
        const startValue = this.STATE[prop];

        const animate = (currentTime) => {
          const elapsed = (currentTime - startTime) / (duration * 1000);
          if (elapsed < 1) {
            this.STATE[prop] = startValue + (target - startValue) * elapsed;
            requestAnimationFrame(animate);
          } else {
            this.STATE[prop] = target;
          }
        }

        requestAnimationFrame(animate);
      }

      reset = () => {
        this.STATE = {
          ...this.STATE,
          stars: generateStarPool(300)
        }
        this.setup();
      }

      cleanup = () => {
        if (this.animationFrame) {
          cancelAnimationFrame(this.animationFrame);
        }
        this.canvas.removeEventListener('mousedown', this.initiate);
        this.canvas.removeEventListener('touchstart', this.initiate);
        this.canvas.removeEventListener('mouseup', this.enter);
        this.canvas.removeEventListener('touchend', this.enter);
      }
    }

    let hyperspaceBackground;
    const canvas = canvasRef.current;
    
    if (canvas) {
      hyperspaceBackground = new JumpToHyperspace(canvas);
    }

    const handleResize = () => {
      if (hyperspaceBackground) {
        hyperspaceBackground.reset();
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (hyperspaceBackground) {
        hyperspaceBackground.cleanup();
      }
    }
  }, []);

  return <canvas 
    ref={canvasRef} 
    style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0 
    }} 
  />;
};

function Home() {
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
    <div className="home-container">
      <HyperspaceBackground />
      <div className="astronaut">
        {astronautImages[selectedAstronaut] && (
          <img src={astronautImages[selectedAstronaut]} alt={`astro-${selectedAstronaut}`} />
        )}
      </div>
      {/* Uncomment the following when you want to add text and profile photo */}
      <div className="home-intro prevent-select">
        <div className="salutation">
          <h1>Hello, I am</h1>
        </div>
        <br />
        <div className="self-intro">
          <h1 className="home_intro-name star-wars">Shravya Chepa</h1>
        </div>
        <div className="role-intro">
          <h4 className='cursive'>A Developer</h4>
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
      </div>
      
      {/* <div className="profile-cartoon">
        <img src={profile} alt="profile" className="home_profile-photo" />
      </div> */}
    </div>
  );
}

export default Home;