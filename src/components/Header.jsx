import './Header.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRss } from '@fortawesome/free-solid-svg-icons'



function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <script src="https://kit.fontawesome.com/e4c896ad96.js" crossOrigin="anonymous"></script>
            <div className="header-box">


                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>
                <div className="header-logo">
                    <img src='logoW2.png' alt="logo"></img>
                </div>
                <div className="header-menu">
                    <ul>
                        <li><a href="/home">Inicio</a></li>
                        <li><a href="/catalog">Catálogo</a></li>
                        <li><a href="/assistance">Asistencia</a></li>
                        <li><a href="/myrss.xml"><FontAwesomeIcon icon={faRss} style={{color: "#edeeff",}} /></a></li>
                        
                    </ul>
                </div>
                <div className="header-icon">
                    <div className="header-icon-bars" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#edeeff", }} />
                    </div>

                </div>
            </div>
            <div className={`header-side-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/home">Inicio</a></li>
                    <li><a href="/catalog">Catálogo</a></li>
                    <li><a href="/assistance">Asistencia</a></li>
                    <li><a href="/myrss.xml"><FontAwesomeIcon icon={faRss} style={{color: "#edeeff",}} /></a></li>
                </ul>

            </div>
        </>
    )
}

export default Header;