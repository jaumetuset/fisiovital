import React from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/styles_servicios.css';


const Servicios = () => {
    return (
        <div>
            <Header />
            <main className="contenedor-servicios-video">
                <div className="contenedor-titulo">
                    <h1>Servicios</h1>
                </div>
                <div className="contenedor-video">
                <iframe
                        src="https://www.youtube.com/embed/-PuPNqhAD0E?autoplay=1&loop=1&playlist=-PuPNqhAD0E"
                        title="Video de la tienda"
                        frameBorder="0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="contenedor-servicios">
                    <div className="servicio">
                        <a href="/servicios/fisioterapia">
                            <img src="../../img/home/physiotherapy.jpg" alt="Fisioterapia" />
                            <div className="texto-servicio">Fisioterapia</div>
                        </a>
                    </div>
                    <div className="servicio">
                        <a href="/servicios/podologia">
                            <img src="../../img/home/home_01.jpg" alt="Podología" />
                            <div className="texto-servicio">Podología</div>
                        </a>
                    </div>
                    <div className="servicio">
                        <a href="/servicios/pilates">
                            <img src="../../img/home/pilates.jpeg" alt="Pilates" />
                            <div className="texto-servicio">Pilates</div>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Servicios;