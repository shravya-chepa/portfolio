import "./Gallery.scss";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";

function Gallery() {
  return (
    <div className="gallery-section" id="gallery">
      <h1 className="cursive">Gallery</h1>

      <div className="photos">
        <img src={photo1} alt="beach-1" />
        <img src={photo2} alt="puppy" />
        <img src={photo3} alt="desk-setup1" />
        <img src={photo4} alt="flowers" />
        <img src={photo5} alt="waterfall" />
        <img src={photo6} alt="shore" />
        <img src={photo7} alt="cat" />
        <img src={photo8} alt="desk-setup2" />
        <img src={photo9} alt="church" />
        <img src={photo10} alt="desk-setup3" />
        <img src={photo11} alt="mountain-sky" />
        <img src={photo12} alt="beach-2" />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Gallery;
