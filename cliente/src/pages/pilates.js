import React, { useState } from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/styles_pilates.css';

const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="card-content">
                        {frontContent}
                    </div>
                    <button className="flip-button" onClick={handleFlip}>
                        + Más ...
                    </button>
                </div>
                <div className="flip-card-back">
                    <div className="card-content">
                        {backContent}
                    </div>
                    <button className="flip-button" onClick={handleFlip}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

const Pilates = () => {
    const services = [
        { id: 1, imgSrc: "../../img/pilates/pilates_embarazada.jpeg", title: "Pilates Embarazadas", description: "'Pilates para Rehabilitación . El yoga trabaja quizás más la elasticidad y el Pilates busca la tonificación y reeducación postural. Si antes del embarazo no se ha practicado ninguno de los dos deportes, creo que es más fácil iniciarse en Pilates, y además hacerlo en cualquier momento del embarazo." },
        { id: 2, imgSrc: "../../img/pilates/pilates_rehabilitacion.jpeg", title: "Pilates Rehabilitación", description: " 'Pilates Rehabilitación' diseñado para personas que se están recuperando de lesiones o cirugías, este tipo de Pilates se centra en mejorar la fuerza, la flexibilidad y la estabilidad de manera segura y progresiva." },
        { id: 3, imgSrc: "../../img/pilates/pilates_adultos.jpeg", title: "Pilates Adultos", description: "'Pilates Adultos' adaptado para las necesidades y capacidades de los adultos mayores, este tipo de Pilates se enfoca en mejorar la movilidad, la fuerza y el equilibrio para mantener la independencia y la calidad de vida." },
        { id: 4, imgSrc: "../../img/pilates/pilates_deport.jpeg", title: "Pilates Deportistas ", description: "'Pilates Deportistas ' Dirigido a atletas y personas activas, este tipo de Pilates se centra en mejorar el rendimiento deportivo, prevenir lesiones y optimizar la recuperación mediante el fortalecimiento específico de los músculos y la mejora de la movilidad." },
        { id: 5, imgSrc: "../../img/pilates/pilates_grupo.jpeg", title: "Pilates en Grupo ", description: "'Pilates en Grupo '  ofrecen una experiencia social y motivadora, donde los participantes pueden trabajar juntos para mejorar su condición física, supervisados por un instructor calificado." },
        { id: 6, imgSrc: "../../img/pilates/pilates_salud.jpeg", title: "Pilates Salud Mental", description: "'Pilates Salud Mental '  también puede ser beneficioso para la salud mental, ya que ayuda a reducir el estrés, mejorar la concentración y promover la relajación a través de la conexión mente-cuerpo que se enfatiza en la práctica. "}
    ];

    return (
        <div>
            <Header />
            <br/>
            <main className="main-container">
                <div className="description-container">
                    <div className="text-container">
                        <div className="description-title">
                            <h1>Pilates</h1>
                        </div>
                        <div className="description-text">
                            <p>Pilates es un sistema de ejercicio físico desarrollado por Joseph Pilates que se enfoca en fortalecer el cuerpo de manera uniforme, mejorar la flexibilidad y promover el control corporal y la conciencia postural. Se basa en principios como la respiración, la concentración, el control, la precisión, el centro de energía y el flujo de movimiento. Es beneficioso para mejorar la fuerza, la estabilidad y el equilibrio, así como para prevenir lesiones y mejorar la salud general.</p>
                            <button className="link">
                                <a href="/cita">Pedir cita</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="video-container">
                <iframe src="https://www.youtube.com/embed/lFe97uu3FEQ" title="Pilates video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </main>

            {/* SVG Insertion */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d5d3cb" fill-opacity="1" d="M0,64L34.3,53.3C68.6,43,137,21,206,26.7C274.3,32,343,64,411,80C480,96,549,96,617,80C685.7,64,754,32,823,42.7C891.4,53,960,107,1029,112C1097.1,117,1166,75,1234,53.3C1302.9,32,1371,32,1406,32L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <div className="services-titule">
                <h1>Servicios</h1>
            </div>
            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service">
                        <FlipCard
                            frontContent={<img src={service.imgSrc} alt={service.title} />}
                            backContent={<div className="service-text">{service.description}</div>}
                        />
                    </div>
                ))}
            </div>
            <br/><br/>
            <Footer />
        </div>
    );
}

export default Pilates;
