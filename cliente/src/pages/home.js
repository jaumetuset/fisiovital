import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import '../styles/styles_home.css';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: '../../img/calma_ig/calma_logo.png',
        thumbnail: '../../img/calma_ig/calma_logo.png',
    },
    {
        original: '../../img/calma_ig/inauguración.png',
        thumbnail: '../../img/calma_ig/inauguración.png',
    },
    {
        original: '../../img/calma_ig/relax02.png',
        thumbnail: '../../img/calma_ig/relax02.png',
    },
    {
        original: '../../img/calma_ig/tienda01.png',
        thumbnail: '../../img/calma_ig/tienda01.png',
    }
];

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <div class="media-container">
                    <div class="media-wrapper">
                        <ImageGallery
                            items={images}
                            showFullscreenButton={true}
                            showPlayButton={true}
                            showBullets={true}
                            showNav={false}
                            showThumbnails={false}
                            showIndex={false}
                        />
                    </div>
                    <div class="text-container">
                        <h2>FISIOVITAL</h2>
                        <p> ¡Hola! Bienvenidos a este nuevo espacio llamado CALMA.</p>
                        <p> Muy pronto se abrirán las puertas del Centro Calma para que podáis disfrutar de vuestro momento, ya sea practicando pilates o en nuestras sesiones de fisioterapia.</p>
                        <p> Actualmente, el centro está cerrado por reformas, pero muy pronto informaremos de fecha de apertura para que juntos podamos disfrutar de esta nueva etapa. </p>
                        <p> Gracias por vuestra paciencia.</p>
                    </div>
                </div>
                <div class="contenedor-cita">
                    <p><i>Unete a nuestra gran familia!!</i></p>
                    <Link to="/cita">Pedir cita</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;