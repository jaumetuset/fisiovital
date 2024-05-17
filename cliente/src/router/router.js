import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Home  from '../pages/home';
import  Cita  from '../pages/cita';
import  Contacto  from '../pages/contacto';
import  Login  from '../pages/login';
import Servicios from '../pages/servicios';
import Fisioterapia from '../pages/fisioterapia';
import Podologia from '../pages/podologia';
import Pilates from '../pages/pilates';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cita" element={<Cita />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/servicios/fisioterapia" element={<Fisioterapia />} />
      <Route path="/servicios/podologia" element={<Podologia/>} />
      <Route path="/servicios/pilates" element={<Pilates/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MyRoutes;