import './navbar.css'
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from "react";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

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
        })


    return (
        <>
            <div className={navbar ? "nav--container-scroll" : "nav--container"}>
                <div className='nav-center'>
                    <div className='logo'>
                        <Link to={'/'} className='navLink'><h3>PokeAnalyser</h3></Link>
                    </div>
                    <div className='linkList'>
                        <ul className='nav--list'>
                            <Link to={'/pokeAnalyser'} className='navLink'><li>Analyser</li></Link>
                            <Link to={'/typeCreator'} className='navLink'><li>Creator</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar