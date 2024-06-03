import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/listUser.css";
import EditUserForm from "./crud/editUserForm";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    nombre: "",
    apellidos: "",
    dni: "",
    telefono: "",
    correo: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/listUsuarios");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/listUsuarios/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post("http://localhost:3000/listUsuarios", newUser);
      fetchUsers();
      setNewUser({
        nombre: "",
        apellidos: "",
        dni: "",
        telefono: "",
        correo: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setSelectedUser(null);
  };

  return (
    <div className="listUser-container">
      <Header />
      <div className="listUser-content">
        <h2>Lista de usuarios</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>DNI</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.apellidos}</td>
                <td>{user.dni}</td>
                <td>{user.telefono}</td>
                <td>{user.correo}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditUser(user)} 
                  >
                    Editar
                  </button>
                  {showEditForm && selectedUser && (
                    <div className="edit-form-container">
                      <EditUserForm
                        user={selectedUser}
                        fetchUsers={fetchUsers}
                      />
                      <button onClick={handleCloseEditForm}>Cancelar</button>
                    </div>
                  )}
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="user-form">
          <input
            type="text"
            name="nombre"
            value={newUser.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <input
            type="text"
            name="apellidos"
            value={newUser.apellidos}
            onChange={handleChange}
            placeholder="Apellidos"
          />
          <input
            type="text"
            name="dni"
            value={newUser.dni}
            onChange={handleChange}
            placeholder="DNI"
          />
          <input
            type="text"
            name="telefono"
            value={newUser.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          <input
            type="email"
            name="email"
            value={newUser.correo}
            onChange={handleChange}
            placeholder="Correo"
          />
          <button className="add-user-btn" onClick={handleAddUser}>
            Añadir usuario
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListUser;
