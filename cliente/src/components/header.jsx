import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
    localStorage.removeItem("user");
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
                  <a href="/listaServicios">Lista Servicios</a>
                </li>
                <li className="listSubServicios">
                  <a href="/listaSubServicios">Lista SubServicios</a>
                </li>
                <li className="listCitas">
                  <a href="/listaCitas">Lista Citas</a>
                </li>
                <li className="listUsuarios">
                  <a href="/listaUsuarios">Lista Usuarios</a>
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
                <li className="user">
                  <span>{user}</span>
                </li>
                <li className="logout">
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
            {!user && (
              <li className="login">
                <a href="/login">Login</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
