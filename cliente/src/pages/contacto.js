import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/styles_contacto.css';

const Contacto = () => {
    return (
      <div className="contacto-container">
        <Header />
        <main className="contacto-main">
          <div className="contacto-info">
            <h2>¿Cómo podemos ayudarte?</h2>
            <p>Si tienes alguna duda, comentario o sugerencia, no dudes en contactar con nosotros.</p>
  
            <form className="contacto-form">
              <input type="text" placeholder="Nombre" className="contacto-form-input" />
              <input type="email" placeholder="Email" className="contacto-form-input" />
              <input type="text" placeholder="Asunto" className="contacto-form-input" />
              <textarea placeholder="Mensaje" className="contacto-form-textarea"></textarea>
              <input type="submit" value="Contactar" className="contacto-form-submit" />
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Contacto;