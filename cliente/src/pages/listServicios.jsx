import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/listService.css";

const ListServices = () => {
  const [services, setServices] = useState([]);
  const [newServiceName, setNewServiceName] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:3000/listServicios");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleAddService = async () => {
    if (newServiceName.trim() === "") {
      alert("El nombre del servicio no puede estar vacío");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/listServicios", {
        nombre: newServiceName,
      });
      setServices([...services, response.data]);
      window.location.reload();
      setNewServiceName("");
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      await axios.delete(`http://localhost:3000/listServicios/${serviceId}`);
      // Actualizar el estado local para reflejar la eliminación
      setServices(services.filter((service) => service.servicio_id !== serviceId));
      alert("Servicio eliminado con éxito");
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Error al eliminar el servicio");
    }
  };
  
  return (
    <div className="list-services-container">
      <Header />
      <div className="list-services-content">
        <h2 className="list-services-title">Lista de Servicios</h2>
        <ul className="list-services">
          {services.map((service) => (
            <li key={service.servicio_id} className="list-services-item">
              <span className="list-services-name">{service.nombre}</span>
              <button
                className="list-services-delete-button"
                onClick={() => handleDeleteService(service.servicio_id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div className="list-services-form">
          <input
            type="text"
            value={newServiceName}
            onChange={(e) => setNewServiceName(e.target.value)}
            placeholder="Nuevo servicio"
            className="list-services-input"
          />
          <button
            className="list-services-add-button"
            onClick={handleAddService}
          >
            Añadir Servicio
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListServices;
