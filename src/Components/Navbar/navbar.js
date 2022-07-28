import './navbar.css'
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from "react";
import NavbarBurgerMenu from '../NavbarBurgerMenu/navbarBurgerMenu';


const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [mobile, setMobile] = useState(false)


    const checkWidth = () => {
        let width = window.innerWidth;

        if(width > 550) {
            setMobile(false)
        } 

        if(width < 550){
            setMobile(true)
        }
    }

    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    }
    
    useEffect(() => {
            changeBackground()
            // adding the event when scroll change background
            window.addEventListener("scroll", changeBackground)
            window.addEventListener("resize", checkWidth)
        })


    return (
        <>
            {mobile ? <NavbarBurgerMenu /> :
            <div className={navbar ? "nav--container-scroll" : "nav--container"}>
                <div className='nav-center'>
                    <div>
                        <Link to={'/'} className='navLink'>
                            <div className='logo'></div>
                        </Link>
                    </div>
                    <div className='linkList'>
                        <ul className='nav--list'>
                            <Link to={'/pokeAnalyser'} className='navLink'><li>Analyser</li></Link>
                            <Link to={'/teamAnalyser'} className= 'navLink'><li>Team Analyser</li></Link>
                            <Link to={'/typeCreator'} className='navLink'><li>Type Creator</li></Link>
                        </ul>
                    </div>
                </div>
            </div> }
        </>
    )
}

export default Navbar