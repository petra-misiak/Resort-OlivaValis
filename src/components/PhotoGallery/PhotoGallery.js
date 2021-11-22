import Interior from './Interior';
import RoomsGallery from './RoomsGallery';
import './_PhotoGallery.scss';

const PhotoGallery = () => {
    return (
        <section>
            <div id="photo-gallery" className={["photo-gallery"]}>PHOTO GALLERY</div>
            <Interior />
            <RoomsGallery />
        </section>
    )
}

export default PhotoGallery;