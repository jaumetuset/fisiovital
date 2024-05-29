import React, { useState,useContext  } from 'react';
import '../styles/registro.css';
import { Link, Navigate  } from 'react-router-dom';
import { UserContext } from './UserContext';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [password, setPassword] = useState('');
    const [correo, setCorreo] = useState('');
    const [dni, setDni] = useState('');
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const { setUser } = useContext(UserContext);

    const handleRegister = async (e) => {
        e.preventDefault();

        // Verifica si algún campo está vacío
        if (!nombre || !apellidos || !password || !correo || !dni || !telefono) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        // Si todos los campos están completos, realiza el registro
        try {
            const response = await fetch('http://localhost:3000/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, apellidos, password, correo, dni, telefono })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            console.log('Registro exitoso:', data);
            setError('');
            setUser(nombre);
            setLoggedIn(true);
        } catch (error) {
            console.error('Error en el registro:', error);
            setError(error.message);
        }
    };

    if (loggedIn) {
        return <Navigate to="/" />; 
    }

    return (
        <div className="register-container">
            <h1>Registrarse</h1>
            <form className="register-form" onSubmit={handleRegister}>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    placeholder="Apellidos"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                />
                <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="Correo electrónico"
                />
                <input
                    type="text"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="DNI"
                />
                <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                />
                <div className="error-message">{error}</div>
                <button type="submit">Registrarse</button>
                <div className='linkToLogin'>
                 ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
                </div>  
            </form>
           
        </div>
    );
};

export default Register;
