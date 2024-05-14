import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Home  from '../pages/home';
import  Cita  from '../pages/cita';
import  Contacto  from '../pages/contacto';
import  Login  from '../pages/login';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cita" element={<Cita />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MyRoutes;