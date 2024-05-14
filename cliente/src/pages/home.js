import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import '../styles/styles_home.css';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: 'https://picsum.photos/id/3/5000/3000.jpg',
        thumbnail: 'https://picsum.photos/id/3/250/150.jpg',
    },
    {
        original: 'https://picsum.photos/id/56/5000/3333.jpg',
        thumbnail: 'https://picsum.photos/id/56/250/150.jpg',
    },
    {
        original: 'https://picsum.photos/id/12/5000/3333.jpg',
        thumbnail: 'https://picsum.photos/id/12/250/150.jpg',
    },
    {
        original: 'https://picsum.photos/id/21/5000/3333.jpg',
        thumbnail: 'https://picsum.photos/id/21/250/150.jpg',
    }
];

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <div class="contenedor-tienda">
                    <div class="img_shop">
                        <ImageGallery
                            items={images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            showBullets={true}
                            showNav={false}
                            showThumbnails={false}
                        />
                    </div>
                    <div class="info_shop_description">
                        <div class="info_shop_description_text">
                            <h1 id='titol_descripction'>FISIOVITAL</h1>
                        </div>
                        <div class="info_shop_description_text">
                            <ul>
                                <li>Creada en 2010</li>
                                <li>+100 profesionales certificados</li>
                                <li>+1000 citas agendadas</li>
                                <li>+1000 clientes satisfechos</li>
                                <li>Lema : <i>La única clínica con 0 clientes. Solo tenemos fans! </i></li>
                                <li>Misión : <i>Ofrecer rehabilitación y consejo a las personas </i></li>
                                <li>Visión : <i>No parar de crecer e innovar </i></li>
                                <li>Localidad : Elda-Petrer, Alicante</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="contenedor-servicios">

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