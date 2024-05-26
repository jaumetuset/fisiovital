import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Home  from '../pages/home';
import  Cita  from '../pages/cita';
import  Contacto  from '../pages/contacto';
import  Login  from '../pages/login';
import Register from '../pages/registro';
import Servicios from '../pages/servicios';
import Fisioterapia from '../pages/fisioterapia';
import Podologia from '../pages/podologia';
import Pilates from '../pages/pilates';
import NotFound from '../pages/notFound';

const MyRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/servicios/fisioterapia" element={<Fisioterapia />} />
      <Route path="/servicios/podologia" element={<Podologia/>} />
      <Route path="/servicios/pilates" element={<Pilates/>} />
      <Route path="/cita" element={<Cita />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;