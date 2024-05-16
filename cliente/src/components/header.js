import React from 'react';
import { useState } from 'react';
import '../styles/styles_header.css';

const Header = () => {

    const [isOpen,setIsOpen] = useState(false);
    const desplegableMenu = () => {
        setIsOpen((open) => !open)
    };

    return (
        <header className="App-header">
            <div className='header_logoNav'>
                <div className='logotip'>
                    <img src='../logo/fisiovital_logo.png' alt='' />
                </div>
                <div className='nav_menu_corto' onClick={desplegableMenu}>
                    <img src='../iconos/icono_menu.png' alt=''  />
                </div>
                <nav className={`nav_menu_largo ${isOpen ? "is-open" : ""}`}>
                    <ul>
                        <li><a href="/home">Inicio</a></li>
                        <li>
                            <a href="#">Servicios</a>
                            <ul className="submenu">
                                <li><a href="/fisioterapia">Fisioterapia</a></li>
                                <li><a href="/podologia">Podología</a></li>
                                <li><a href="/pilates">Pilates</a></li>
                            </ul>
                        </li>
                        <li><a href="/cita">Cita</a></li>
                        <li className='contacto' ><a href="/contacto">Contacto</a></li>
                        <li className='login'><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;