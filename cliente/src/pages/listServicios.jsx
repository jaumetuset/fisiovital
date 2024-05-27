import React, { useState, useEffect } from "react";
import axios from "axios";

const ListServices = () => {
  const [services, setServices] = useState([]);

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

  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/listServicios/${id}`);
      fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Servicios</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.nombre}
            <button onClick={() => handleDeleteService(service.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListServices;
