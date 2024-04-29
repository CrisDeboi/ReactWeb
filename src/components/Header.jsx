import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <script src="https://kit.fontawesome.com/e4c896ad96.js" crossorigin="anonymous"></script>
            <div class="header-box">


                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>
                <div class="header-logo">
                    <img src='logoW2.png' alt="logo"></img>
                </div>
                <div class="header-menu">
                    <ul>
                        <li><a href="/home">Inicio</a></li>
                        <li><a href="/catalog">Catalogo</a></li>
                        <li><a href="/assistance">Asistencia</a></li>
                    </ul>
                </div>
                <div class="header-icon">
                    <div class="header-icon-bars">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#edeeff", }} />
                    </div>
                    
                </div>


            </div>
        </>
    )
}

export default Header;