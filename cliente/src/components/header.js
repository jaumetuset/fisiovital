import React from 'react';
import '../styles/styles_header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className='socialMedia'>
                <img src='../iconos/facebook.png' alt='' />
                <img src='../iconos/twitter.png' alt='' />
                <img src='../iconos/instagram.png' alt='' />
                <img src='../iconos/youtube.png' alt='' />
            </div>
            <div className='header_logoNav'>
                <div className='logotip'>
                    <img src='../logo/fisiovital_logo.png' alt='' />
                </div>
                <nav>
                    <ul>
                        <li><a href="/home">Inicio</a></li>
                        <li>
                            <a href="#">Servicios</a>
                            <ul className="submenu">
                                <li><a href="/fisioterapia">Fisioterapia</a></li>
                                <li><a href="/podologia">Podología</a></li>
                                <li><a href="/yoga">Yoga</a></li>
                            </ul>
                        </li>
                        <li><a href="/cita">Cita</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;