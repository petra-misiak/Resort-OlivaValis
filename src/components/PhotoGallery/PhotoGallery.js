import Interior from './Interior';
import Rooms from './Rooms';
import './_PhotoGallery.scss';

const PhotoGallery = () => {
    return (
        <section>
            <div className={["photo-gallery"]}>PHOTO GALLERY</div>
            <Interior />
            <Rooms />
        </section>
    )
}

export default PhotoGallery;