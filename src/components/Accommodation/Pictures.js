import House1 from '../../assests/House1.jpeg';
import House2 from '../../assests/House2.jpg';
import House3 from '../../assests/House3.jpeg';
import House4 from '../../assests/House4.jpeg';
import House5 from '../../assests/House5.jpeg';
import House6 from '../../assests/House6.jpeg';
import House7 from '../../assests/House7.jpeg';
import './_Pictures.scss';

const Pictures = () => {
    return (
        <div className="pictures">
            <img src={House1} alt="House1" className={["pictures-1"]} />
            <img src={House2} alt="House2" className={["pictures-2"]} />
            <img src={House3} alt="House3" className={["pictures-3"]} />
            <img src={House4} alt="House4" className={["pictures-4"]} />
            <img src={House5} alt="House5" className={["pictures-5"]} />
            <img src={House6} alt="House6" className={["pictures-6"]} />
            <img src={House7} alt="House7" className={["pictures-7"]} />
        </div>
    )
}

export default Pictures;