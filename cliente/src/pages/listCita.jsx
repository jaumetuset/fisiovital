import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/listCita.css";
import EditCitaForm from "./crud/editCitaForm.js";

const ListCita = () => {
  const [citas, setCitas] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedCita, setSelectedCita] = useState(null);
  const [servicios, setServicios] = useState([]);
  const [subServicios, setSubServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");
  const [subServicioSeleccionado, setSubServicioSeleccionado] = useState("");
  const [horario, setHorario] = useState("");
  const [newCita, setNewCita] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    dni: "",
    telefono: "",
    horario: "",
    fecha: "",
    servicio_id: "",
    subservicio_id: "",
  });

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

  useEffect(() => {
    fetchCitas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCita({ ...newCita, [name]: value });
  };

  const fetchCitas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/listCitas");
      setCitas(response.data);
    } catch (error) {
      console.error("Error fetching citas:", error);
    }
  };

  const handleDeleteCita = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/listCitas/${id}`);
      fetchCitas();
    } catch (error) {
      console.error("Error deleting cita:", error);
    }
  };

  const handleAddCita = async () => {
    try {
      const nuevaCita = {
        ...newCita,
        servicio_id: servicioSeleccionado,
        subservicio_id: subServicioSeleccionado,
      };
  
      await axios.post("http://localhost:3000/listCitas", nuevaCita);
      fetchCitas();
      setNewCita({
        nombre: "",
        apellido: "",
        correo: "",
        dni: "",
        telefono: "",
        horario: "",
        fecha: "",
        servicio_id: "",
        subservicio_id: "",
      });
    } catch (error) {
      console.error("Error al añadir cita:", error);
    }
  };

  const handleEditCita = (cita) => {
    setSelectedCita(cita);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setSelectedCita(null);
  };

  return (
    <div className="listCita-container">
      <Header />
      <div className="listCita-content">
        <h2>Lista de citas</h2>
        <table className="cita-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>DNI</th>
              <th>Teléfono</th>
              <th>Horario</th>
              <th>Fecha</th>
              <th>Servicio ID</th>
              <th>Subservicio ID</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id}>
                <td>{cita.nombre}</td>
                <td>{cita.apellido}</td>
                <td>{cita.correo}</td>
                <td>{cita.dni}</td>
                <td>{cita.telefono}</td>
                <td>{cita.horario}</td>
                <td>{cita.fecha.substring(0, 10)}</td>
                <td>{cita.servicio_id}</td>
                <td>{cita.subservicio_id}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditCita(cita)}
                  >
                    Editar
                  </button>
                  {showEditForm && selectedCita && (
                    <div className="edit-form-container">
                      <EditCitaForm
                        cita={selectedCita}
                        fetchCitas={fetchCitas}
                      />
                      <button onClick={handleCloseEditForm}>Cancelar</button>
                    </div>
                  )}
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteCita(cita.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cita-form">
          <input
            type="text"
            name="nombre"
            value={newCita.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <input
            type="text"
            name="apellido"
            value={newCita.apellido}
            onChange={handleChange}
            placeholder="Apellido"
          />
          <input
            type="text"
            name="correo"
            value={newCita.correo}
            onChange={handleChange}
            placeholder="Correo"
          />
          <input
            type="text"
            name="dni"
            value={newCita.dni}
            onChange={handleChange}
            placeholder="DNI"
          />
          <input
            type="text"
            name="telefono"
            value={newCita.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          <select
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            className="list-cita-select"
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
          <input
            type="date"
            name="fecha"
            value={newCita.fecha}
            onChange={handleChange}
            placeholder="Fecha"
          />
          <select
            value={servicioSeleccionado}
            onChange={(e) => setServicioSeleccionado(e.target.value)}
            className="list-cita-select"
          >
            <option value="">Selecciona un servicio</option>
            {servicios.map((servicio) => (
              <option key={servicio.servicio_id} value={servicio.servicio_id}>
                {`${servicio.servicio_id}: ${servicio.nombre}`}
              </option>
            ))}
          </select>
          <select
            value={subServicioSeleccionado}
            onChange={(e) => setSubServicioSeleccionado(e.target.value)}
            className="list-cita-select"
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
          <button className="add-cita-btn" onClick={handleAddCita}>
            Añadir cita
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListCita;
