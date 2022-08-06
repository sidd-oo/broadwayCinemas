import React, { useState } from 'react'
import "./MovieCarousel.css"
import moviesData from "../../data/movies.json";

const MovieCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? moviesData.movies.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === moviesData.movies.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
        backgroundImage: `url("${moviesData.movies[currentIndex].img.large}")`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="movieCarousel">
            <div>
                <div onClick={handlePrevious} className="leftArrow">
                    ❰
                </div>
                <div onClick={handleNext} className="rightArrow">
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div className='dotSlider'>
                {moviesData.movies.map((slide, slideIndex) => (
                    <div
                        className='dots'
                        key={slideIndex}
                        onClick={() => handleSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieCarousel