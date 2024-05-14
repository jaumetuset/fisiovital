import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles_contacto.css';


const Contacto = () => {
    return (
        <div className="App">
            <Header /> { }
            <main>
                <div className="contacto_info">
                    <div className="contacto_info_form">
                        <div className="contacto_info_titol">
                            <h1>¿ CÓMO PODEMOS AYUDARTE ?</h1>
                            <p>Si tienes alguna duda, comentario o sugerencia, no dudes en contactar con nosotros.</p>
                        </div>   
                        <div class="contacto_info_form">
                            <form>
                                <input type="text" placeholder="Nombre" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Asunto" />
                                <textarea placeholder="Mensaje"></textarea>
                                <input type="submit" value="Contactar" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contacto_info_mapa">
                </div>
            </main>
            <Footer /> { }
        </div>
    );
}

export default Contacto;