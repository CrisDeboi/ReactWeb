import Footer from "../components/Footer";
import Header from "../components/Header";
import photos from "../models/photos";
import './Catalog.css'

function Catalog() {
    return (
        <>

            <div className='catalog-container'>
                <Header />
                <div className='catalog-body'>
                    <p>Este es nuestro  hermoso catálogo (texto final aún por determinar[ya ni hablamos del diseño])</p>
                    <div className='catalog-cars'>

                        {
                            photos.map((photo) => (
                                <div className='catalog-car'>
                                    <h1>{`${photo.name}`}</h1>

                                    <img src={`${photo.src}`} alt={`${photo.alt}`} />

                                    <p>{`${photo.price}`}€</p>
                                </div>

                            ))
                        }
                    </div>
                </div>

                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>

                <Footer />
            </div>
        </>
    )
}

export default Catalog;