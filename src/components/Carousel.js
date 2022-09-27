import React, {useState} from "react";

import '../css/Carousel.css';

const sliderStyles = {
    height: "100",
    position: "relative",
};

const slideStyles = {
    width: "100%",
    height: "400px",
    backgroundSize: "cover",
    backgroudPosition: "center",    
}

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "50px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "50px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "10px 10px",
    };
    
    const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "15px",
    color: "#d6d6d6",
    };

const PhotoCarousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const handleClick = (event) => {
        console.log(event.target);
        console.log("image clicked!");
    }
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };
    const url = `url(${slides[currentIndex].url})`;
    

    return (
        <div style={sliderStyles}>
          <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
              ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
              ❱
            </div>
          </div>
          <img style={slideStylesWidthBackground} src={url} onClick={handleClick}></img>
          <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
              <div
                style={dotStyle}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            ))}
          </div>
        </div>
      );
};

export default PhotoCarousel;