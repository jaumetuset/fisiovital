import React, { useState, useContext } from "react";
import { Link, NavLink , useNavigate } from "react-router-dom";
import "../styles/styles_header.css";
import { UserContext } from "../pages/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const desplegableMenu = () => {
    setIsOpen((open) => !open);
  };

  const logout = async () => {
    setUser("");
    localStorage.removeItem('user');
    console.log("Logout exitoso");
    navigate("/login");
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
            {user && user === "admin" && (
              <>
                <li className="listServicios">
                  <Link to="/listaServicios">Lista Servicios</Link>
                </li>
                <li className="listSubServicios">
                  <Link to="/listaSubServicios">Lista SubServicios</Link>
                </li>
                <li className="listCitas">
                  <Link to="/listaCitas">Lista Citas</Link>
                </li>
                <li className="listUsuarios">
                  <Link to="/listaUsuarios">Lista Usuarios</Link>
                </li>
                <li className="user">
                  <span>{user}</span>
                </li>
                <li className="logout">
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
            {user !== "admin" && (
              <>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/servicios">Servicios</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/servicios/fisioterapia">Fisioterapia</Link>
                    </li>
                    <li>
                      <Link to="/servicios/podologia">Podología</Link>
                    </li>
                    <li>
                      <Link to="/servicios/pilates">Pilates</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/cita">Cita</Link>
                </li>
                <li className="contacto">
                  <Link to="/contacto">Contacto</Link>
                </li>
                <li className="user">
                  <span>{user}</span>
                </li>
                {user && ( 
                  <li className="logout">
                    <button onClick={logout}>Logout</button>
                  </li>
                )}
              </>
            )}
            {!user && (
              <li className="login">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;