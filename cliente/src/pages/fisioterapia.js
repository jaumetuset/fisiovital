import React, { useState } from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/styles_fisioterapia.css';

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

const Fisioterapia = () => {
    const services = [
        { id: 1, imgSrc: "../../img/fisioterapia/atm.jpeg", title: "ATM", description: "'ATM' se refiere a la articulación temporomandibular, que conecta la mandíbula con el cráneo. Los trastornos de la ATM pueden causar dolor y dificultad para mover la mandíbula." },
        { id: 2, imgSrc: "../../img/fisioterapia/diatermia.jpeg", title: "Diatermia", description: " 'Diatermia' es una técnica de fisioterapia que utiliza corrientes eléctricas de alta frecuencia para calentar tejidos profundos, aliviando el dolor y mejorando la circulación y la flexibilidad muscular." },
        { id: 3, imgSrc: "../../img/fisioterapia/eco.jpeg", title: "Ecografia", description: "'Ecografía' en fisioterapia es una técnica de imagen que utiliza ondas sonoras para visualizar y evaluar los tejidos blandos, músculos, tendones y articulaciones, facilitando el diagnóstico y el tratamiento." },
        { id: 4, imgSrc: "../../img/fisioterapia/ejterapeutico.jpeg", title: "Ejercicio terapéutico ", description: "'Ejercicio terapéutico ' en fisioterapia consiste en actividades físicas y movimientos específicos diseñados para mejorar la función, movilidad, fuerza y flexibilidad, así como para aliviar el dolor y prevenir lesiones." },
        { id: 5, imgSrc: "../../img/fisioterapia/electroPercutanea.jpeg", title: "Electrolisis percutánea ", description: "'Electrolisis Percutánea' es una técnica de fisioterapia que utiliza una corriente galvánica aplicada a través de una aguja fina para inducir una respuesta inflamatoria controlada, promoviendo la reparación y regeneración de tejidos dañados como tendones y ligamentos." },
        { id: 6, imgSrc: "../../img/fisioterapia/readaDepor.jpeg", title: "Readaptación deportiva", description: "'Readaptación deportiva' es un proceso en fisioterapia que ayuda a los atletas a recuperarse de una lesión y a regresar a su actividad física de manera segura y eficaz. Incluye ejercicios específicos, entrenamiento funcional y estrategias de prevención de lesiones para restaurar la fuerza, la movilidad y el rendimiento deportivo. "},
        { id: 7, imgSrc: "../../img/fisioterapia/puncSeca.jpeg", title: "Punción Seca", description: "'Punción Seca' es una técnica de fisioterapia invasiva que utiliza agujas de acupuntura para desactivar los puntos gatillo miofasciales, que son áreas dolorosas y tensas en los músculos. Ayuda a aliviar el dolor, mejorar la función muscular y restaurar el rango de movimiento." },
        { id: 8, imgSrc: "../../img/fisioterapia/terapManual.jpeg", title: "Terapia Manual", description: "'Terapia Manual' es un enfoque de fisioterapia que utiliza técnicas manuales como el masaje, la movilización articular y la manipulación osteopática para tratar el dolor, mejorar la función articular, aumentar la flexibilidad y promover la curación." },
    ];

    return (
        <div>
            <Header />
            <br/>
            <main className="main-container">
                <div className="description-container">
                    <div className="text-container">
                        <div className="description-title">
                            <h1>Fisioterapia</h1>
                        </div>
                        <div className="description-text">
                            <p>La fisioterapia es una disciplina de la salud que se centra en la prevención, tratamiento y rehabilitación de diversas afecciones y discapacidades a través del uso de métodos físicos, ejercicios terapéuticos, y técnicas manuales. Los fisioterapeutas trabajan para mejorar la movilidad, reducir el dolor, restaurar la función física y prevenir discapacidades.</p>
                            <button className="link">
                                <a href="/cita">Pedir cita</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="video-container">
                <iframe src="https://www.youtube.com/embed/wNLL9gAlb-Y" title="Podología video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default Fisioterapia;
