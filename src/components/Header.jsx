import './Header.css'

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
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Catalogo</a></li>
                    <li><a href="">Asistencia</a></li>
                </ul>
            </div>
            <div class="header-icons">
                <i class="fa-sharp fa-solid fa-bars"></i>
            </div>            
            

        </div>
        </>
    )
}

export default Header;