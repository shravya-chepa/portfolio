import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moonTexture from '../assets/moon.jpg';
import "./Skills.scss";

const Skills = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Skills list
    const skills = [
      "Python", "PHP", "JavaScript (JS)", "TypeScript (TS)", "C++", "C#", "Java", "Swift", "Ruby", 
      "React", "Vue.js", "Angular", "Next.js", 
      "Django", "Node.js", "Express.js", 
      "HTML5", "CSS3", "XML", 
      "MongoDB", "PostgreSQL", 
      "Docker", "Kubernetes", "AWS", "Jenkins", 
      "Git", "NPM", 
      "Android", "iOS", 
      "TensorFlow", "Raspberry Pi", "GraphQL", "Redux", "Figma", "Babel", "ESLint", "Flutter", "Postman", 
      "Webpack", "Gulp", 
      "Jest", 
      "Apache", "Slack", "Visual Studio Code", 
      "Go", "Three.js", "Flask", "MySQL", "DynamoDB", "Amazon S3", "EC2", "RDS", "Lambda", "Cloudwatch", "Azure", "GCP", "Github", "Unit Testing", "Unix", "MVC", "CI/CD"
    ];

    // Create sphere
    const sphereRadius = 200;
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
    
    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(moonTexture, () => {
      renderer.render(scene, camera); // Re-render when texture loads
    });
    
    const sphereMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x333333, 7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Weaken the light intensity
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Function to create skill labels
    const createSkillLabel = (text) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 256;
      canvas.height = 64;

      context.fillStyle = "#8dcbe6";
      context.font = "30px Arial";
      context.textAlign = "center";
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);

      sprite.scale.set(100, 25, 1);
      return sprite;
    };

    // Add skills to sphere
    const labelOffset = 15;
    skills.forEach((skill) => {
      const theta = Math.acos((2 * Math.random()) - 1);
      const phi = 2 * Math.PI * Math.random();

      const x = (sphereRadius + labelOffset) * Math.sin(theta) * Math.cos(phi);
      const y = (sphereRadius + labelOffset) * Math.sin(theta) * Math.sin(phi);
      const z = (sphereRadius + labelOffset) * Math.cos(theta);

      const label = createSkillLabel(skill);
      label.position.set(x, y, z);
      sphere.add(label);
    });

    // Create stars
    const createDistantStars = () => {
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        transparent: true,
        opacity: 1
      });

      const starVertices = [];
      const starDistance = 3000;

      for (let i = 0; i < 5000; i++) {
        const theta = Math.acos((2 * Math.random()) - 1);
        const phi = 2 * Math.PI * Math.random();

        const x = starDistance * Math.sin(theta) * Math.cos(phi);
        const y = starDistance * Math.sin(theta) * Math.sin(phi);
        const z = starDistance * Math.cos(theta);

        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      return { geometry: starGeometry, material: starMaterial, points: stars };
    };

    const stars = createDistantStars();

    // Animation
    camera.position.z = 500;
    
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.0015;
      controls.update();
      renderer.render(scene, camera);
      return animationId;
    };

    const animationId = animate();

    // Handle resize
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      // Dispose of geometries and materials
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      stars.geometry.dispose();
      stars.material.dispose();
      
      // Remove all child labels
      while(sphere.children.length > 0) {
        const child = sphere.children[0];
        if (child.material) {
          child.material.map.dispose();
          child.material.dispose();
        }
        sphere.remove(child);
      }
      
      // Dispose of controls
      controls.dispose();
      
      // Remove canvas
      container.removeChild(renderer.domElement);
      
      // Dispose of renderer
      renderer.dispose();
    };
  }, []);

  return (
    <div className='skills-section'>
        <h1 className='cursive'>Skills</h1>
        <div ref={mountRef} style={{ width: '100%', height: '80vh' }} />
    </div>
  );
};

export default Skills;