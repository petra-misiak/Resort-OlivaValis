import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import images from './RoomImageData';
import './_RoomsGallery.scss';

const RoomsGallery = () => {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightboxDisplay] = useState(false);

    const imageCards = images.map((image) => (
        <img key={image} src={image} className={["rooms-img"]} onClick={() => showImage(image)} alt="" />
    ));

    const showImage = (image) => {
        setImageToShow(image);
        setLightboxDisplay(true);
    };

    const hideLightbox = () => {
        setLightboxDisplay(false);
    };

    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex >= images.length - 1) {
            setLightboxDisplay(false);
        } else {
            let nextImage = images[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightboxDisplay(false);
        } else {
            let nextImage = images[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };

    return (
        <div className="rooms">
            <h2 className={["rooms-text"]}>Rooms Photo Gallery</h2>
            <div>{imageCards}</div>
            {lightboxDisplay ? <div id="lightbox" onClick={hideLightbox}>
                <FaArrowAltCircleLeft onClick={showPrev} className="rooms-left-arrow" />
                <img src={imageToShow} id="lightbox-img" alt="" ></img>
                <FaArrowAltCircleRight onClick={showNext} className="rooms-right-arrow" />
            </div> : ""}
        </div>
    );
}

export default RoomsGallery;




