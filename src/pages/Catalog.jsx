import { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import photos from "../models/photos";
import './Catalog.css';

function Catalog() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedPhoto(null);
    };

    return (
        <>
            <div className='catalog-container'>
                <Header />
                <div className='catalog-body'>
                    <div className="catalog-description">
                        <h1>¿Con ganas de ver nuestros coches?</h1>
                        <p>Consulte aquí nuestro catálogo actual de coches tanto para 
                            compra como para alquiler. Los precios mostrados en esta
                            sección pueden variar en función al precio del oro en bolsa.
                        </p>
                        <p>Adelante y consulte nuestros coches con nuestra tecnología <strong>Responsive©</strong>:</p>
                    </div>
                    <div className='catalog-cars'>
                        {
                            photos.map((photo) => (
                                <div className='catalog-car' key={photo.id}>
                                    <h1>{photo.name}</h1>
                                    <img 
                                        src={photo.src} 
                                        alt={photo.alt} 
                                        onClick={() => openModal(photo)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <p><strong>{photo.price}€</strong></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>
                <Footer />
            </div>

            {modalVisible && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <h1>{selectedPhoto.name}</h1>
                        <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                        <p>{selectedPhoto.description}</p>
                        <p><strong>{selectedPhoto.price}€</strong></p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Catalog;
