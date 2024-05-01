import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (


        <div className="footer-box">
            <div className="footer-logo1">
                <div className="footer-logo1-img">
                    <a href='https://www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/' target='_blank'> <img src='rincon-logoB.png' alt="ies el rincon"></img></a>
                   
                </div>
                <div className="footer-logo1-socials">
                    <a href='https://www.marca.com/futbol/real-madrid.html?intcmp=MENUESCU&s_kw=realmadrid' target="_blank"><FontAwesomeIcon icon={faXTwitter} style={{color: "#001E90"}} /></a>
                    <a href='https://www.instagram.com/rincongamedevs/' target="_blank"><FontAwesomeIcon icon={faInstagram} style={{color: "#001E90"}}/></a>
                    <a href='https://github.com/CrisDeboi' target="_blank"><FontAwesomeIcon icon={faGithub} style={{color: "#001E90"}} /></a>
                    
                    
                    
                </div>

            </div>
            <div className="footer-description">
                <h1>ResponsiveCars© 2024. Todos los derechos reservados</h1>
            </div>
            <div className="footer-logo2">
                <div className="footer-logo2-text">
                <p>En colaboración con:</p>
                </div>
                
                <div className="footer-logo2-imgs">
                    <a href='https://www.arucas.org/modules.php?mod=portal&file=index' target='_blank'><img src="arucas.png" alt="arucas" /></a>
                    <a href='https://www.telde.es/' target='_blank'><img src="telde.png" alt="telde" /></a>
                    
                    
                </div>

            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>

        </div>
    )
}

export default Footer;