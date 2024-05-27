import React, { useState, useContext } from 'react';
import '../styles/login.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const { setUser } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            console.log('Login exitoso:', data);
            setUser(data.username);
            setLoggedIn(true);
        } catch (error) {
            console.error('Error en el login:', error);
        }
    };

    if (loggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nombre de usuario"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                />
                <button type="submit">Iniciar sesión</button>
                <p>¿No tienes cuenta? <a href="/registro">Regístrate</a></p>
            </form>
            <h1>{username}</h1>
        </div>
    );
};

export default Login;
