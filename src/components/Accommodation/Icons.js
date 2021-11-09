import { AiFillHome } from 'react-icons/ai';
import { FaParking } from 'react-icons/fa';
import { MdPool } from 'react-icons/md';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdPersonAddAlt1 } from 'react-icons/md';
import './_Icons.scss';

const Icons = () => {
    return (
        <div className="icons">
            <div className={["icons-all"]}>
                <AiFillHome className={["icons-all-home"]} />
                <h2 className={["icons-text"]}>8 apartments</h2>
            </div>
            <div className={["icons-all"]}>
                <FaParking className={["icons-all-parking"]} />
                <h2 className={["icons-text"]}>Parking</h2>
            </div>
            <div className={["icons-all"]}>
                <MdPool className={["icons-all-pool"]} />
                <h2 className={["icons-text"]}>Pool</h2>
            </div>
            <div className={["icons-all"]}>
                <MdPersonAddAlt1 className={["icons-all-person"]} />
                <h2 className={["icons-text"]}>4-6 persons</h2>
            </div>
            <div className={["icons-all"]}>
                <AiOutlineWifi className={["icons-all-wifi"]} />
                <h2 className={["icons-text"]}>Wi-Fi</h2>
            </div>
        </div>
    )
}

export default Icons;
