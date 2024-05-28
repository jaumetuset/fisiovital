import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/listSubService.css";

const ListSubServices = () => {
    const [subServices, setSubServices] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(""); 
  
    useEffect(() => {
      fetchServices();
      fetchSubServices();
    }, []);
  
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/listServicios");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
  
    const fetchSubServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/listaSubServicios"
        );
        setSubServices(response.data);
      } catch (error) {
        console.error("Error fetching sub-services:", error);
      }
    };
  
    const handleServiceChange = (event) => {
      setSelectedService(event.target.value);
    };
  
    const addSubService = async (subServiceData) => {
      try {
        const response = await axios.post("http://localhost:3000/listaSubServicios", subServiceData);
        fetchSubServices();
      } catch (error) {
        console.error("Error adding sub-service:", error);
      }
    };
  
    const deleteSubService = async (subServiceId) => {
      try {
        const response = await axios.delete(`http://localhost:3000/listaSubServicios/${subServiceId}`);
        fetchSubServices();
      } catch (error) {
        console.error("Error deleting sub-service:", error);
      }
    };

  return (
    <div className="list-services-container">
      <Header />
      <div className="list-services-content">
        <h2 className="list-services-title">Lista de Subservicios por Servicio</h2>
        <select value={selectedService} onChange={handleServiceChange}>
          <option value="">Seleccionar Servicio</option>
          {services.map((service) => (
            <option key={service.servicio_id} value={service.servicio_id}>
              {service.nombre}
            </option>
          ))}
        </select>
        {!selectedService && (
          <div>
            {services.map((service) => (
              <div key={service.servicio_id} className="service-table">
                <h3 className="service-name">{`Servicio: ${service.nombre}`}</h3>
                <table className="sub-services-table">
                  <thead>
                    <tr>
                      <th>Subservicio ID</th>
                      <th>Nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subServices.filter((subService) => subService.servicio_id === service.servicio_id).map((subService) => (
                      <tr key={subService.subservicio_id}>
                        <td>{subService.subservicio_id}</td>
                        <td>{subService.nombre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
        {selectedService && (
          <div className="service-table">
            <h3 className="service-name">{`Servicio: ${services.find(service => service.servicio_id === parseInt(selectedService))?.nombre}`}</h3>
            <table className="sub-services-table">
              <thead>
                <tr>
                  <th>Subservicio ID</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {subServices.filter((subService) => subService.servicio_id === parseInt(selectedService)).map((subService) => (
                  <tr key={subService.subservicio_id}>
                    <td>{subService.subservicio_id}</td>
                    <td>{subService.nombre}</td>
                    <td>
                      <button className="deleteSubService" onClick={() => deleteSubService(subService.subservicio_id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Formulario para añadir un nuevo sub-servicio */}
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newSubServiceData = {
                servicio_id: parseInt(selectedService),
                nombre: formData.get('nombre') 
              };
              addSubService(newSubServiceData);
            }}>
              <label htmlFor="nombre">Nombre del Subservicio: </label>
              <input type="text" id="nombre" name="nombre" required />
              <button className="addSubservice" type="submit">Añadir Subservicio</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
  
};

export default ListSubServices;