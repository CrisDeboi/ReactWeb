
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useRef } from 'react';
import './Assistance.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect } from "react";

function Assistance() {

    return (
        <>
            <div className="assistance-container">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"></link>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
                <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossOrigin=""></script>
                <Header />
                <div className="assistance-body">

                    <div className="assistance-description">
                        <h1>¿Perdido?¿No sabes qué hacer?</h1>
                        <p>No te preocupes, a todos nos pasa en algún momento de nuestras vidas.
                            Lamentablemente desde ResponsiveCars© no disponemos de ese tipo de
                            asistencia pero si alguna vez necesitas ayuda con algún tema relacionado
                            con nuestra gama de productos no dudes en consultarnos</p>

                        <h1>¿Cómo contactarnos?</h1>
                        <p>Puedes pasar a visitarnos en cualquier momento de lunes a viernes de 9:00
                            a 14:00
                        </p>

                    </div>


                    <div className="assistance-map-container">
                        <MapContainer className="locations-map-container" center={[27.99280962746899, -15.420038456979219]} zoom={17} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[27.99280962746899, -15.420038456979219]}>
                                <Popup>
                                    {"Aquí estamos"}, <br /> {"para servirle"}.
                                </Popup>
                            </Marker>

                        </MapContainer>
                    </div>
                    <div className="assistance-map-description">
                        <p>Dirección: Calle José velez nº 8, Telde</p>
                        <p>Teléfono de contacto: 928 13 91 50</p>

                    </div>
                </div>

                <div className="footer-container">
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default Assistance