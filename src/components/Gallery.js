import { useState } from "react";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

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

// import PhotoCarousel from "./PhotoCarousel";

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  // State for Animation
  const [animating, setAnimating] = useState(false);

  // Sample items for Carousel
  const items = [
    {
      src: photo1,
      altText: "beach-1",
    },
    {
      src: photo2,
      altText: "puppy",
    },
    {
      src: photo3,
      altText: "desk-setup1",
    },
    {
      src: photo4,
      altText: "flowers",
    },
    {
      src: photo5,
      altText: "waterfall",
    },
    {
      src: photo6,
      altText: "shore",
    },
    {
      src: photo7,
      altText: "cat",
    },
    {
      src: photo8,
      altText: "desk-setup2",
    },
    {
      src: photo9,
      altText: "church",
    },
    {
      src: photo10,
      altText: "desk-setup3",
    },
    {
      src: photo11,
      altText: "mountain-sky",
    },
    {
      src: photo12,
      altText: "beach2",
    },
  ];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        className="photo-item"
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <div className="gallery-section" id="gallery">
      <h1 className="cursive">Gallery</h1>

      {/* <PhotoCarousel /> */}
      <div className="photos-section">
        <div
          className="photo-carousel"
          style={{
            display: "block",
            width: 400,
          }}
        >
          <Carousel
            previous={previousButton}
            next={nextButton}
            activeIndex={activeIndex}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={(newIndex) => {
                if (animating) return;
                setActiveIndex(newIndex);
              }}
            />
            {carouselItemData}
            <CarouselControl
              directionText="Prev"
              direction="prev"
              onClickHandler={previousButton}
            />
            <CarouselControl
              directionText="Next"
              direction="next"
              onClickHandler={nextButton}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
