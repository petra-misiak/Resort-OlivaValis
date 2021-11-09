import React, { useState } from 'react';
import ImageData from './ImageData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './_ImageCarousel.scss';

const ImageCarousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length ? 0 : current + 1);
    };


    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className="carousel">
            <div>
                <FaArrowAltCircleRight className="carousel-right" onClick={nextSlide} />
            </div>
            <FaArrowAltCircleLeft className="carousel-left" onClick={prevSlide} />
            {ImageData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="apartment" className="carousel-image" />)}
                    </div>

                )
            })}
        </section>
    )
}

export default ImageCarousel;

