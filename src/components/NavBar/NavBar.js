import React, { useState } from 'react'
import MenuItems from '../MenuItems/MenuItems';
import './_NavBar.scss';


const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className={['navbar']}>
            <h1 className={['navbar-logo']}>Oliva Valis</h1>
            <div className={['navbar-icon']} onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? ['navbar-menu active'] : ['navbar-menu']}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


export default NavBar;

