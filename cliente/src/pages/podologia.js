import React, { useState } from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/styles_podologia.css';

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

const Podologia = () => {
    const services = [
        { id: 1, imgSrc: "../../img/podologia/cirugia_uña.jpeg", title: "Cirugía Ungueal", description: "'Cirugía Ungueal' procedimiento quirúrgico para tratar problemas de las uñas, como las uñas encarnadas o deformidades, que no responden a tratamientos conservadores." },
        { id: 2, imgSrc: "../../img/podologia/Hongos_uñas.jpeg", title: "Hongos en las Uñas", description: " 'Hongos en las Uñas' es una técnica de fisioterapia que utiliza corrientes eléctricas de alta frecuencia para calentar tejidos profundos, aliviando el dolor y mejorando la circulación y la flexibilidad muscular." },
        { id: 3, imgSrc: "../../img/podologia/estudio_pisadas.jpeg", title: "Estudio de Pisadas", description: "'Estudio de Pisadas' análisis biomecánico de la forma en que una persona camina o corre para identificar problemas de alineación y movimiento, y para diseñar tratamientos como plantillas personalizadas." },
        { id: 4, imgSrc: "../../img/podologia/infiltracion_ecoguiada.jpeg", title: "Infiltración Ecoguiada ", description: "'Infiltración Ecoguiada ' técnica en la que se utiliza ultrasonido para guiar la inyección de medicamentos directamente en el área afectada del pie, para tratar dolor e inflamación con precisión." },
        { id: 5, imgSrc: "../../img/podologia/ortesis_silicona.jpeg", title: "Ortesis de Silicona ", description: "'Ortesis de Silicona' dispositivos personalizados hechos de silicona que se colocan en los pies para corregir deformidades, aliviar el dolor y mejorar la funcionalidad." },
        { id: 6, imgSrc: "../../img/podologia/papiloma.jpeg", title: "Papilomas", description: "'Papilomas' tratamiento de verrugas plantares causadas por el virus del papiloma humano (VPH), que puede incluir técnicas como crioterapia, ácido salicílico o cirugía menor. "},
        { id: 7, imgSrc: "../../img/podologia/plantillas.jpeg", title: "Plantillas", description: "'Plantillas' dispositivos ortopédicos personalizados que se insertan en los zapatos para corregir problemas de alineación, distribuir mejor el peso y mejorar la biomecánica del pie." },
        { id: 8, imgSrc: "../../img/podologia/posturologia.jpeg", title: "Posturología", description: "'Posturología' estudio y tratamiento de la postura del cuerpo para corregir desequilibrios que pueden causar dolor y problemas en los pies y otras partes del cuerpo." },
        { id: 9, imgSrc: "../../img/podologia/quirpodia.jpeg", title: "Quiropodia", description: "'Quiropodia' cuidado y tratamiento de las afecciones superficiales del pie, como callosidades, durezas y uñas problemáticas, a través de procedimientos no quirúrgicos." },
    ];

    return (
        <div>
            <Header />
            <br/>
            <main className="main-container">
                <div className="description-container">
                    <div className="text-container">
                        <div className="description-title">
                            <h1>Podologia</h1>
                        </div>
                        <div className="description-text">
                            <p>La podología es una rama de la medicina especializada en el estudio, diagnóstico y tratamiento de las enfermedades y trastornos del pie y el tobillo. Los podólogos son profesionales capacitados para tratar afecciones como callos, uñas encarnadas, verrugas plantares, deformidades y problemas biomecánicos, y también pueden proporcionar cuidados preventivos y asesoramiento sobre el cuidado adecuado de los pies.</p>
                            <button className="link">
                                <a href="/cita">Pedir cita</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="video-container">
                    <iframe src="https://www.youtube.com/embed/mRoDEbUr3EQ" title="Podología video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export default Podologia;
