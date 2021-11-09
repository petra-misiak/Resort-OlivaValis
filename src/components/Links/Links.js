import CroatiaFullOfLife from '../../assests/CroatiaFullOfLife.jpg';
import SafeStay from '../../assests/SafeStay.jpg';
import SafeTravel from '../../assests/SafeTravel.png';
import TZZadar from '../../assests/TZZadar.jpg';
import ZadarRegion from '../../assests/ZadarRegion.png';
import './_Links.scss';

const Links = () => {
    return (
        <section className="links">

            <a href="https://croatia.hr/en-GB/trip-ideas/Full-life">
                <img src={CroatiaFullOfLife} alt="CroatiaFullFfLife logo" className="links-fullOL" />
            </a>
            <a href="https://www.safestayincroatia.hr/en">
                <img src={SafeStay} alt="Stay Safe logo" className="links-stay-safe" />
            </a>
            <a href="https://www.safestayincroatia.hr/en">
                <img src={SafeTravel} alt="Save Travel logo" className="links-safe-travel" />
            </a>
            <a href="https://www.zadar.hr/">
                <img src={ZadarRegion} alt="Zadar Region logo" className="links-zadar" />
            </a>
            <a href="https://zadar.travel/?url=https%3A%2F%2Fzadar.travel%2Fhr">
                <img src={TZZadar} alt="Turisticka Zajednica Zadar logo" className="links-tzzadar" />
            </a>


        </section>
    )
}

export default Links;
