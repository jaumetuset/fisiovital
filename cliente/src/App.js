import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './router/router';
import SessionOut from './SessionOut';

const App = () => {
  return (
    <BrowserRouter>
      <SessionOut />
      <MyRoutes />
    </BrowserRouter>
  );
};

export default App;
