import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SessionOut = () => {
  const location = useLocation();

  useEffect(() => {
    const cleanup = () => {
      localStorage.removeItem('sessionToken');
    };

    if (location.pathname !== '/cita' && location.pathname !=='/listaCitas') {
      window.addEventListener("beforeunload", cleanup);

      return () => {
        cleanup();
        window.removeEventListener("beforeunload", cleanup);
      };
    }
  }, [location]);

  return null; 
};

export default SessionOut;
