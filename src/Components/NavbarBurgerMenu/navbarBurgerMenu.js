import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './navbarBurgerMenu.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavbarBurgerMenu = ({}) => {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <>
        <div className='burgerMenu-mega-container'>
            <div>
                <Link to={'/'} className='navLink'>
                    <div className='logo'></div>
                </Link>
            </div>
            <div className='burgerMenu-super-container'>
                <button className='burgerMenu-button' onClick={toggleActive}><FontAwesomeIcon icon={faBars}  size='2x'/></button>
                {active && <div className='burgerMenu-navbox'>
                    <ul className='burgerMenu-nav--list'>
                        <Link to={'/pokeAnalyser'} className='burgerMenu-navLink' onClick={toggleActive}><li className='burgerMenu-list-item'>Analyser</li></Link>
                        <Link to={'/teamAnalyser'} className= 'burgerMenu-navLink'onClick={toggleActive}><li className='burgerMenu-list-item'>Team Analyser</li></Link>
                        <Link to={'/typeCreator'} className='burgerMenu-navLink'onClick={toggleActive}><li className='burgerMenu-list-item'>Type Creator</li></Link>
                    </ul>
                </div>}
            </div>
        </div>
        </>
    )
}

export default NavbarBurgerMenu