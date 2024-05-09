import React from 'react';
import '../styles/styles_footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-titol-polAvisos">
            <div className="titol_h3">
              <h3 className="titol_footer">FISIOVITAL</h3>
            </div>
            <div className="politic_avisos">
              <a href="#">Política de privacidad</a>
              <a href="#">Avisos legales</a>
            </div>
          </div>
        </div>
        </div>
        <div className="footer-right">
            <div className="data_contact">
                    <a href="#">Citas</a>
                    <a href="#">Contacto</a>
                    <a href="#">Registro</a>
            </div>
            <div className="data">
                <p className="telf"><strong>Telefono:</strong> 612631231</p>
                <p className="gmail"><strong>Gmail:</strong> info@fisiovital.com</p>
                <p className="dir"><strong>Dirección:</strong> valencia nº5 ( BAJO )</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;