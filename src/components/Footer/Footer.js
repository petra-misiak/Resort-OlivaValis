import './_Footer.scss';
import facebook from '../../assests/facebook.svg';
import twitter from '../../assests/twitter.svg';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-left-side">
                <h2 className="footer-left-side-logo">OlivaValis</h2>
                <p className="footer-left-side-copyright">&copy; 2021 OlivaValis, All Rights Reserved</p>
            </div>
            <div className="footer-right-side">
                <img className={["footer-right-side-fb"]} src={facebook} alt="facebook logo" />
                <img className={["footer-right-side-twitter"]} src={twitter} alt="twitter logo" />
            </div>
        </section>
    )

}

export default Footer;