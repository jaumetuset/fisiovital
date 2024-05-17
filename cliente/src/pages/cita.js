import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/styles_cita.css';

const FormularioCita = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoCita, setTipoCita] = useState('');
  const [horario, setHorario] = useState('');
  const [fecha, setFecha] = useState('');
  const [enviado, setEnviado] = useState(false);

  const obtenerFechaActual = () => {
    const hoy = new Date();
    let dia = hoy.getDay();
    if (dia === 6) {
      hoy.setDate(hoy.getDate() + 2);
    } else if (dia === 0) {
      hoy.setDate(hoy.getDate() + 1);
    }
    return hoy.toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `${nombre} ${apellido} ha pedido cita para ${tipoCita} el día ${fecha} a la hora ${horario}.`;
    alert(mensaje);
    setEnviado(true);
  };

  return (
    <div>
      <Header />
      <main className="formulario-cita-container">
        <h1 className="titulo-cita">Cita</h1>
        <div className="borde-sutil">
          {!enviado ? (
            <form onSubmit={handleSubmit} className="formulario-cita-form">
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Nombre:
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="formulario-cita-input" required />
                  </label>
                </div>
                <div className="columna">
                  <label className="formulario-cita-label">
                    Apellido:
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="formulario-cita-input" required />
                  </label>
                </div>
              </div>
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Correo electrónico:
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className="formulario-cita-input" required />
                  </label>
                </div>
                <div className="columna">
                  <label className="formulario-cita-label">
                    DNI:
                    <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} className="formulario-cita-input" required />
                  </label>
                </div>
              </div>
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Teléfono:
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="formulario-cita-input" required />
                  </label>
                </div>
              </div>
              <div className="fila">
                <div className="columna">
                  <label className="formulario-cita-label">
                    Tipo de cita:
                    <select value={tipoCita} onChange={(e) => setTipoCita(e.target.value)} className="formulario-cita-select" required>
                      <option value="">Selecciona una opción</option>
                      <option value="fisioterapia">Fisioterapia</option>
                      <option value="podologia">Podología</option>
                      <option value="pilates">Pilates</option>
                    </select>
                  </label>
                </div>
                <div className="columna">
                  <label className="formulario-cita-label">
                    Horario:
                    <select value={horario} onChange={(e) => setHorario(e.target.value)} className="formulario-cita-select" required>
                      <option value="">Selecciona un horario</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </label>
                </div>
                <div className="columna">
                  <label className="formulario-cita-label">
                    Fecha:
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="formulario-cita-input" min={obtenerFechaActual()} required />
                  </label>
                </div>
              </div>
              <div className="fila">
                <button type="submit" className="formulario-cita-submit">Enviar</button>
              </div>
            </form>
          ) : (
            <div className="mensaje-container">
              <p className="mensaje-enviado">{`Cita Agendada para ${nombre} ha pedido cita para ${tipoCita} el día ${fecha} a la hora ${horario}`}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormularioCita;
