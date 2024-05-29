import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import axios from "axios";
import "../styles/styles_cita.css";

const FormularioCita = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicios, setServicios] = useState([]);
  const [subServicios, setSubServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");
  const [subServicioSeleccionado, setSubServicioSeleccionado] = useState("");
  const [horario, setHorario] = useState("");
  const [fecha, setFecha] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    // Cargar servicios desde el backend
    const fetchServicios = async () => {
      try {
        const response = await axios.get("http://localhost:3000/listServicios");
        setServicios(response.data);
      } catch (error) {
        console.error("Error al cargar servicios:", error);
      }
    };

    fetchServicios();
  }, []);

  useEffect(() => {
    // Cargar subservicios desde el backend solo cuando se selecciona un servicio
    const fetchSubServicios = async () => {
      try {
        if (servicioSeleccionado) {
          const response = await axios.get(
            `http://localhost:3000/listaSubServiciosFiltrados?servicio_id=${servicioSeleccionado}`
          );
          setSubServicios(response.data);
        } else {
          setSubServicios([]);
        }
      } catch (error) {
        console.error("Error al cargar subservicios:", error);
      }
    };

    fetchSubServicios();
  }, [servicioSeleccionado]);

  const obtenerFechaActual = () => {
    const hoy = new Date();
    let dia = hoy.getDay();
    if (dia === 6) {
      hoy.setDate(hoy.getDate() + 2);
    } else if (dia === 0) {
      hoy.setDate(hoy.getDate() + 1);
    }
    return hoy.toISOString().split("T")[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/cita", {
        nombre,
        apellido,
        correo,
        dni,
        telefono,
        servicio: servicioSeleccionado,
        subServicio: subServicioSeleccionado,
        horario,
        fecha
      });
      if (response.status === 201) {
        setEnviado(true);
        setMensaje("Cita añadida con éxito");
      } else {
        setMensaje("Error al enviar la cita. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar la cita:", error);
      setMensaje("Error al enviar la cita. Por favor, inténtalo de nuevo.");
    }
  };
  

  return (
    <div>
      <Header />
      <main className="formulario-cita-container">
        <h1 className="titulo-cita">Cita</h1>
        <div className="borde-sutil">
          {!enviado ? (
            <form onSubmit={handleSubmit} className="formulario-cita-form">
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Nombre:
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="formulario-cita-input"
                      required
                    />
                  </label>
                </div>
                <div className="columna">
                  <label className="formulario-cita-label">
                    Apellido:
                    <input
                      type="text"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      className="formulario-cita-input"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Correo electrónico:
                    <input
                      type="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      className="formulario-cita-input"
                      required
                    />
                  </label>
                </div>
                <div className="columna">
                  <label className="formulario-cita-label">
                    DNI:
                    <input
                      type="text"
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      className="formulario-cita-input"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Teléfono:
                    <input
                      type="text"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="formulario-cita-input"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="container">
                <h2>Servicios:</h2>
                <select
                  value={servicioSeleccionado}
                  onChange={(e) => setServicioSeleccionado(e.target.value)}
                  className="formulario-cita-select"
                >
                  <option value="">Selecciona un servicio</option>
                  {servicios.map((servicio) => (
                    <option
                      key={servicio.servicio_id}
                      value={servicio.servicio_id}
                    >
                      {`${servicio.servicio_id}: ${servicio.nombre}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="container">
                <h2>Subservicios:</h2>
                <select
                  value={subServicioSeleccionado}
                  onChange={(e) => setSubServicioSeleccionado(e.target.value)}
                  className="formulario-cita-select"
                >
                  <option value="">Selecciona un subservicio</option>
                  {subServicios.map((subServicio) => (
                    <option
                      key={subServicio.subservicio_id}
                      value={subServicio.subservicio_id}
                    >
                      {`${subServicio.subservicio_id}: ${subServicio.nombre}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="columna">
                <label className="formulario-cita-label">
                  Horario:
                  <select
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    className="formulario-cita-select"
                    required
                  >
                    <option value="">Selecciona un horario</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </select>
                </label>
              </div>
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Fecha:
                    <input
                      type="date"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      className="formulario-cita-input"
                      min={obtenerFechaActual()}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="fila">
                <button type="submit" className="formulario-cita-submit">
                  Enviar
                </button>
              </div>
            </form>
          ) : (
            <div className="mensaje-container">
              <p className="mensaje-enviado">{mensaje}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormularioCita;
