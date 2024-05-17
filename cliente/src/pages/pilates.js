import React from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/styles_podologia.css';

const Pilates = () => {
    return (
        <div>
            <Header />
            <main className="main-container">
                <div className="description-container">
                    <div className="text-container">
                        <div className="description-title">
                            <h1>Podología</h1>
                        </div>
                        <div className="description-text">
                            <p>La podología es una disciplina deportiva que se caracteriza por la aplicación de técnicas de entrenamiento y ejercicios físicos para el desarrollo de la masa muscular, la fuerza muscular y la resistencia. La podología se desarrolla en diferentes modalidades, entre ellas la pilates, la fisioterapia y la fisioterapia deportiva.</p>
                            <button className="link">
                                <a href="/cita">Pedir cita</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="video-container">
                    <iframe src="https://www.youtube.com/embed/mRoDEbUr3EQ" title="Podología video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </main>
            <div className="services-container">
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 1" />
                    <div className="service-text">Servicio 1</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 2" />
                    <div className="service-text">Servicio 2</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 3" />
                    <div className="service-text">Servicio 3</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 4" />
                    <div className="service-text">Servicio 4</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 5" />
                    <div className="service-text">Servicio 5</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 6" />
                    <div className="service-text">Servicio 6</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 7" />
                    <div className="service-text">Servicio 7</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 8" />
                    <div className="service-text">Servicio 8</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 9" />
                    <div className="service-text">Servicio 9</div>
                </div>
                <div className="service">
                    <img src="../../img/home/pilates.jpeg" alt="Servicio 10" />
                    <div className="service-text">Servicio 10</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pilates;
