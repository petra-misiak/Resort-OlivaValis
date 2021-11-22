import React, { useState } from 'react'
// import MenuItems from '../MenuItems/MenuItems';
import './_NavBar.scss';
import { Link } from 'react-scroll';


const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className={['navbar']}>
            <h1 className={['navbar-logo']}>Apartment Resort OlivaVallis</h1>
            <div className={['navbar-icon']} onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? ['navbar-menu-active'] : ['navbar-menu']}>
                <Link
                    activeClass="active"
                    to="carousel"
                    spy={true}
                    smooth={true}
                    offset={-350}
                    duration={500}
                    className="navbar-links">Home</Link>
                <Link
                    activeClass="active"
                    to="accommodation"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="navbar-links">Accommodation</Link>
                <Link
                    activeClass="active"
                    to="photo-gallery"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="navbar-links">Photo Gallery</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="navbar-links">Contact</Link>
                {/* {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })} */}
            </ul>
        </nav>
    )
}


export default NavBar;

