import Footer from "../components/Footer";
import Header from "../components/Header";
import './Home.css'
import ReviewList from "./review-list/ReviewList";

function Home() {
    return (
        <>
            <div className="home-container">
                <Header />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>

                <div className="home-body">


                    <div className='home-description'>
                        <h1>ResponsiveCars©</h1>
                        <p>Bienvenido a ResponsiveCars©. Aquí encontrarás el mayor surtido de coches de última tecnología
                            patentada en la mismísima isla de Gran Canaria.
                        </p>
                        <h1>¿Qué nos hace especiales?</h1>
                        <p>Nuestra tecnología Responsive, trabajada por nuestros ingenieros hace posible que la experiencia
                            del usuario al conducir sea única e irrepetible. Nuestra tecnología cuenta con los últimos avances
                            en tecnología de aparcado, y eso es lo que nos hace únicos.
                        </p>
                        <p>Nuestros coches cuentan con la tecnología Responsive: unos sensores de aparcamiento de vanguardia
                            científica que se adaptan a cualquier hueco de aparcamiento facilitando al usuario una buena
                            experiencia de aparcado independientemente del tamaño del hueco. Actualmente contamos con una
                            diferenciación de entre hasta 3 tipos de huecos "small", "medium" and "large"
                        </p>
                        <h1>¿Sigues con ganas de más?</h1>
                        <p>Actualmente hemos podido adaptar nuestra tecnología algunos modelos de vehículos ya existentes.
                            En el futuro planeamos poder incorporar nuestra tecnología a nuevos modelos y abarcar hasta más
                            de un 90% del mercado automovilístico.
                        </p>
                        <button className="home-button"><a href="/catalog">Ver coches</a></button>
                        <h1>¿Qué dicen los expertos acerca de nosotros?</h1>

                    </div>

                    <ReviewList />




                </div>


                <Footer />
            </div>
        </>

    )
}

export default Home