import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import menu from '../../assets/icon-menu.svg'
import close from '../../assets/icon-close.svg'

const Navbar = () => {
    const location = useLocation();
    const [clicked, setClicked] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (width > 769) {
                setClicked(false);
            }
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="navbar-container">
            <div className={ clicked ? "overlay active" : "overlay"}></div>
            <div className="navbar">
                <img src={menu} alt="menu" className='menu' onClick={handleClick} />
                <h1 className="logo"><Link to="/">OpenAI Bot</Link></h1>
                <div className={clicked ? "main-navigation active" : "main-navigation"}>
                    <div className="second-logo">
                        <h1 className="logo">OpenAI Bot</h1>
                        <img src={close} alt="close" className="close" onClick={handleClick} />
                    </div>
                    <Link to="/codex" className={ location.pathname === '/codex' ? "link active" : "link"}>Codex</Link>
                    <Link to="/dall-e" className={ location.pathname === '/dall-e' ? "link active" : "link"}>Dall-E</Link>
                    <Link to="/davinci" className={ location.pathname === '/davinci' ? "link active" : "link"}>Davinci-3</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar