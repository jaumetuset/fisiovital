import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Calendar from '../components/calendar'; // Import the Calendar component
import '../styles/styles_cita.css'; 

const Cita = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State for confirmation message visibility
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date
  const [selectedTime, setSelectedTime] = useState(''); // State for selected time

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get current time
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit' });

    // Simulate successful form submission (replace with actual logic)
    setIsSubmitted(true);
    setSelectedTime(formattedTime);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const onChangeDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="cita-container">
      <Header />
      <main className="cita-main">
        <h1>Registro Cita</h1>
        <form id="user-form" onSubmit={handleFormSubmit}>
          <label htmlFor="nombre">Nombre Completo:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />

          <label htmlFor="servicio">Servicio:</label>
          <select id="servicio" name="servicio" required>
            <option value="">Seleccione un servicio</option>
            <option value="fisioterapia">Fisioterapia</option>
            <option value="podologia">Podología</option>
            <option value="pilates">Pilates</option>
          </select>

          <div id="calendar-container">
            <Calendar/>
          </div>

          <button type="submit">Enviar</button>
        </form>

        {isSubmitted && (
          <div id="confirmation-message" className="">
            <h2>Cita registrada</h2>
            <p>
              Tu cita ha sido registrada para el {selectedDate.toLocaleDateString('es-ES')} a las {selectedTime}.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cita;
