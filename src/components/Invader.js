import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import "./Invader.scss";
import spacecraftImage from "../assets/spacecraft.png";
import invaderImage from "../assets/invader.png";

const SpaceInvader = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const handleExit = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Player {
      constructor() {
        this.velocity = {
          x: 0,
          y: 0,
        };

        this.rotation = 0;
        this.opacity = 1;

        const image = new Image();
        image.src = spacecraftImage
        image.onload = () => {
          const scale = Math.min(canvas.width, canvas.height) * 0.00004;
          this.image = image;
          this.width = image.width * scale;
          this.height = image.height * scale;

          this.position = {
            x: canvas.width / 2 - this.width / 2,
            y: canvas.height - this.height - 100,
          };
        };
      }

      draw() {
        c.save();
        c.globalAlpha = this.opacity;
        c.translate(
          player.position.x + player.width / 2,
          player.position.y + player.width / 2
        );
        c.rotate(this.rotation);
        c.translate(
          -player.position.x - player.width / 2,
          -player.position.y - player.width / 2
        );

        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
        c.restore();
      }

      update() {
        if (this.image) {
          this.draw();
          this.position.x += this.velocity.x;
        }
      }
    }

    class Projectile {
      constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;

        this.radius = 5;
      }

      draw() {
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = "red";
        c.fill();
        c.closePath();
      }

      update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
      }
    }

    class Particle {
      constructor({ position, velocity, radius, color, fades }) {
        this.position = position;
        this.velocity = velocity;

        this.radius = radius;
        this.color = color;
        this.opacity = 1;
        this.fades = fades;
      }

      draw() {
        c.save();
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore();
      }

      update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.fades) {
          this.opacity -= 0.01;
        }
      }
    }

    class Invader {
      constructor({ position }) {
        this.velocity = {
          x: 0,
          y: 0,
        };

        const image = new Image();
        image.src = invaderImage;
        image.onload = () => {
          const scale = 0.06;
          this.image = image;
          this.width = image.width * scale;
          this.height = image.height * scale;

          this.position = {
            x: position.x,
            y: position.y,
          };
        };
      }

      draw() {
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      }

      update({ velocity }) {
        if (this.image) {
          this.draw();
          this.position.x += velocity.x;
          this.position.y += velocity.y;
        }
      }

      shoot(invaderProjectiles) {
        invaderProjectiles.push(
          new InvaderProjectile({
            position: {
              x: this.position.x + this.width / 2,
              y: this.position.y + this.height,
            },
            velocity: {
              x: 0,
              y: 5,
            },
          })
        );
      }
    }

    class InvaderProjectile {
      constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;

        this.width = 3;
        this.height = 10;
      }

      draw() {
        c.fillStyle = "yellow";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
      }

      update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
      }
    }

    class Grid {
      constructor() {
        this.position = {
          x: 0,
          y: 0,
        };

        this.velocity = {
          x: 3,
          y: 0,
        };

        // Reduce speed for smaller screens
        if (canvas.width < 600) {
          this.velocity.x = 1.5;
        }

        this.invaders = [];

        let rows = Math.floor(Math.random() * 5 + 2);
        let cols = Math.floor(Math.random() * 3 + 2);

        if (canvas.width > 600) {
          rows = Math.floor(Math.random() * 5 + 2)
          cols = Math.floor(Math.random() * 10 + 2)
        }

        this.width = cols * 50;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            this.invaders.push(
              new Invader({
                position: {
                  x: i * 60,
                  y: j * 60,
                },
              })
            );
          }
        }
      }

      update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.velocity.y = 0;

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
          this.velocity.x = -this.velocity.x;
          this.velocity.y = 30;
        }
      }
    }

    // Initialize game objects
    const player = new Player();
    const projectiles = [];
    const grids = [];
    const invaderProjectiles = [];
    const particles = [];

    // Game state
    const keys = {
      a: { pressed: false },
      d: { pressed: false },
      space: { pressed: false },
    };

    let frames = 0;
    let randomInterval = Math.floor(Math.random() * 500 + 500);
    let game = {
      over: false,
      active: true,
    };

    // PASTE YOUR createParticles FUNCTION HERE
    function createParticles({ object, color, fades }) {
      for (let i = 0; i < 15; i++) {
        particles.push(
          new Particle({
            position: {
              x: object.position.x + object.width / 2,
              y: object.position.y + object.height / 2,
            },
            velocity: {
              x: (Math.random() - 0.5) * 2,
              y: (Math.random() - 0.5) * 2,
            },
            radius: Math.random() * 3,
            color: color || "#A5DD9B",
            fades,
          })
        );
      }
    }

    // Initialize background stars
    for (let i = 0; i < 100; i++) {
      particles.push(
        new Particle({
          position: {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
          },
          velocity: {
            x: 0,
            y: 0.5,
          },
          radius: Math.random() * 2,
          color: 'white',
        })
      );
    }

    // Modified animate function to update score state
    function animate() {
      if (!game.active) return;
      requestAnimationFrame(animate);
      c.fillStyle = "black";
      c.fillRect(0, 0, canvas.width, canvas.height);

      // PASTE YOUR ANIMATION LOGIC HERE
      player.update();
      particles.forEach((particle, i) => {
        // when stars in the background go beyond the screen, respawn them at the top of the screen
        if (particle.position.y - particle.radius >= canvas.height) {
          particle.position.x = Math.random() * canvas.width;
          particle.position.y = -particle.radius;
        }

        if (particle.opacity <= 0) {
          setTimeout(() => {
            particles.splice(i, 1);
          }, 0);
        } else {
          particle.update();
        }
      });

      invaderProjectiles.forEach((invaderProjectile, index) => {
        if (
          invaderProjectile.position.y + invaderProjectile.height >= canvas.height
        ) {
          setTimeout(() => {
            invaderProjectiles.splice(index, 1);
          }, 0);
        } else invaderProjectile.update();

        // projectile hits player
        if (
          invaderProjectile.position.y + invaderProjectile.height >=
          player.position.y &&
          invaderProjectile.position.x + invaderProjectile.width >=
          player.position.x &&
          invaderProjectile.position.x <= player.position.x + player.width
        ) {
          setTimeout(() => {
            invaderProjectiles.splice(index, 1);
            player.opacity = 0;
            game.over = true;
          }, 0);
          setTimeout(() => {
            game.active = false;
          }, 2000);
          createParticles({
            object: player,
            color: 'white',
            fades: true,
          });
          
          setTimeout(() => {
            handleExit();
          }, 2000);
        }
      });

      projectiles.forEach((projectile, index) => {
        if (projectile.position.y + projectile.radius <= 0) {
          setTimeout(() => {
            projectiles.splice(index, 1);
          }, 0);
        } else {
          projectile.update();
        }
      });

      grids.forEach((grid, gridIndex) => {
        grid.update();
        // spawn projectiles
        if (frames % 100 === 0 && grid.invaders.length > 0) {
          grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(
            invaderProjectiles
          );
        }
        grid.invaders.forEach((invader, i) => {
          invader.update({ velocity: grid.velocity });

          // projectiles hit enemy
          projectiles.forEach((projectile, j) => {
            if (
              projectile.position.y - projectile.radius <=
              invader.position.y + invader.height &&
              projectile.position.x + projectile.radius >= invader.position.x &&
              projectile.position.x - projectile.radius <=
              invader.position.x + invader.width &&
              projectile.position.y + projectile.radius >= invader.position.y
            ) {
              setTimeout(() => {
                const invaderFound = grid.invaders.find(
                  (invader2) => invader2 === invader
                );
                const projectileFound = projectiles.find(
                  (projectile2) => projectile2 === projectile
                );

                // remove invader and projectile
                if (invaderFound && projectileFound) {
                  // create particles for explosion
                  setScore(prevScore => prevScore + 100);
                  createParticles({
                    object: invader,
                    fades: true,
                  });
                  grid.invaders.splice(i, 1);
                  projectiles.splice(j, 1);

                  if (grid.invaders.length > 0) {
                    const firstInvader = grid.invaders[0];
                    const lastInvader = grid.invaders[grid.invaders.length - 1];

                    grid.width =
                      lastInvader.position.x -
                      firstInvader.position.x +
                      lastInvader.width;
                    grid.position.x = firstInvader.position.x;
                  } else {
                    grids.splice(gridIndex, 1);
                  }
                }
              }, 0);
            }
          });
        });
      });

      if (keys.a.pressed && player.position.x >= 0) {
        player.velocity.x = -7;
        player.rotation = -0.15;
      } else if (
        keys.d.pressed &&
        player.position.x + player.width <= canvas.width
      ) {
        player.velocity.x = +7;
        player.rotation = 0.15;
      } else {
        player.velocity.x = 0;
        player.rotation = 0;
      }

      // spawn enemies
      if (frames % randomInterval === 0) {
        grids.push(new Grid());
        randomInterval = Math.floor(Math.random() * 500 + 500);
        frames = 0;
      }

      frames++;
      
    }

    // Start animation
    animate();

    const handleKeyDown = ({ key }) => {
      if (game.over) return;
      switch (key) {
        case "a":
          keys.a.pressed = true;
          break;
        case "d":
          keys.d.pressed = true;
          break;
        case " ":
          projectiles.push(
            new Projectile({
              position: {
                x: player.position.x + player.width / 2,
                y: player.position.y,
              },
              velocity: {
                x: 0,
                y: -10,
              },
            })
          );
          break;
        default:
          break;
      }
    };

    const handleKeyUp = ({ key }) => {
      switch (key) {
        case "a":
          keys.a.pressed = false;
          break;
        case "d":
          keys.d.pressed = false;
          break;
        default:
          break;
      }
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;

      if (game.over) return;

      if (touchY > window.innerHeight * 0.75) {
        if (touchX < window.innerWidth / 2) {
          keys.a.pressed = true;
        } else {
          keys.d.pressed = true;
        }
      } else {
        projectiles.push(
          new Projectile({
            position: {
              x: player.position.x + player.width / 2,
              y: player.position.y,
            },
            velocity: {
              x: 0,
              y: -10,
            },
          })
        );
      }
    };

    const handleTouchEnd = () => {
      keys.a.pressed = false;
      keys.d.pressed = false;
    };

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      game.active = false;
    };
  }, [handleExit]); 

  return (
    <div className="space-invader">
      <canvas ref={canvasRef}></canvas>
      <div className="game-overlay">
        <div className="score">Score: {score}</div>
        <button className="exit-button" onClick={handleExit}>Exit</button>
      </div>
    </div>
  );  
};

export default SpaceInvader;