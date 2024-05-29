import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const EditCitaForm = ({ cita, fetchCitas }) => {
  const [editedCita, setEditedCita] = useState(cita || {}); 
  const navigate = useNavigate();
  const [servicios, setServicios] = useState([]);
  const [subServicios, setSubServicios] = useState([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");
  const [subServicioSeleccionado, setSubServicioSeleccionado] = useState("");

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

  // Función para formatear la fecha
  const formatFecha = (fecha) => {
    const fechaFormateada = new Date(fecha);
    const dia = fechaFormateada.getDate().toString().padStart(2, '0');
    const mes = (fechaFormateada.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaFormateada.getFullYear();
    return `${anio}-${mes}-${dia}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCita(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/listCitas/${editedCita.id}`, editedCita);
      fetchCitas();
      // Resetear los valores seleccionados después de enviar el formulario
      setServicioSeleccionado("");
      setSubServicioSeleccionado("");
    } catch (error) {
      console.error("Error editing cita:", error);
    }
    navigate("/listaCitas");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={editedCita.nombre || ''} onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="apellido" value={editedCita.apellido || ''} onChange={handleChange} placeholder="Apellido" />
      <input type="text" name="correo" value={editedCita.correo || ''} onChange={handleChange} placeholder="Correo" />
      <input type="text" name="dni" value={editedCita.dni || ''} onChange={handleChange} placeholder="DNI" />
      <input type="text" name="telefono" value={editedCita.telefono || ''} onChange={handleChange} placeholder="Teléfono" />
      <select
        value={editedCita.horario || ''}
        onChange={handleChange}
        name="horario"
        className="edit-cita-select"
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
      <input type="date" name="fecha" value={formatFecha(editedCita.fecha) || ''} onChange={handleChange} placeholder="Fecha" />
      <select
            value={servicioSeleccionado}
            onChange={(e) => {
              setServicioSeleccionado(e.target.value);
              setEditedCita(prevState => ({
                ...prevState,
                servicio_id: e.target.value // Actualizar el valor de servicio_id
              }));
            }}
            className="cita-select"
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
            onChange={(e) => {
              setSubServicioSeleccionado(e.target.value);
              setEditedCita(prevState => ({
                ...prevState,
                subservicio_id: e.target.value // Actualizar el valor de subservicio_id
              }));
            }}
            className="cita-select"
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
      <button type="submit">Guardar cambios</button>
    </form>
  );
};


export default EditCitaForm;
