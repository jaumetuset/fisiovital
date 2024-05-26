import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom'; 
import '../styles/styles_header.css';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const desplegableMenu = () => {
    setIsOpen((open) => !open);
  };


  const logout = async () => {
    try {
      await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
      navigate('/login');
  } catch (error) {
      console.error('Error during logout:', error);
  }
  };



  return (
   <header className="App-header">
      <div className="header_logoNav">
        <div className="logotip">
          <img src="../logo/fisiovital_logo.png" alt="" />
        </div>
        <div className="nav_menu_corto" onClick={desplegableMenu}>
          <img src="../iconos/icono_menu.png" alt="" />
        </div>
        <nav className={`nav_menu_largo ${isOpen ? "is-open" : ""}`}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
              <ul className="submenu">
                <li>
                  <a href="/servicios/fisioterapia">Fisioterapia</a>
                </li>
                <li>
                  <a href="/servicios/podologia">Podología</a>
                </li>
                <li>
                  <a href="/servicios/pilates">Pilates</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/cita">Cita</a>
            </li>
            <li className="contacto">
              <a href="/contacto">Contacto</a>
            </li>
            <li className='login'><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;