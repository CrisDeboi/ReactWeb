import Footer from "../components/Footer";
import Header from "../components/Header";
import './Home.css'

function Home() {
    return (
        <>
            <Header />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>

            <div class="home-body">
                <p>Esta es la fantástica página de inicio de nuestra maravillosa web de concesionario online.</p>

                <div class='home-description'>
                    <p>Por ahora lo único que ha dado tiempo a más o menos terminar es el <a href="/catalog">catálogo</a>, rogamos por favor que no pierda tiempo en el
                        resto de apartados. Un saludo y buena tarde.
                    </p>

                </div>

            </div>
            <div class='construction'>
                <img id="contruction" src="under-construction.jpg" alt="en obras" />

            </div>

            <Footer />
        </>

    )
}

export default Home