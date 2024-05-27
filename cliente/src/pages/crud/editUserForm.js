// EditUserForm component
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const EditUserForm = ({ user, fetchUsers }) => {
  const [editedUser, setEditedUser] = useState(user || {}); // Inicializar el estado con el usuario recibido
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/listUsuarios/${editedUser.id}`, editedUser);
      fetchUsers();
    } catch (error) {
      console.error("Error editing user:", error);
    }
    navigate("/listaUsuarios");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={editedUser.nombre || ''} onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="apellidos" value={editedUser.apellidos || ''} onChange={handleChange} placeholder="Apellidos" />
      <input type="text" name="dni" value={editedUser.dni || ''} onChange={handleChange} placeholder="DNI" />
      <input type="text" name="telefono" value={editedUser.telefono || ''} onChange={handleChange} placeholder="Teléfono" />
      <input type="email" name="email" value={editedUser.email || ''} onChange={handleChange} placeholder="Email" />
      <button type="submit">Guardar cambios</button>
    </form>
  );
};

export default EditUserForm;
