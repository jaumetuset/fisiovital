import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './router/router';


const App = () => {
  return (
    <BrowserRouter>
        <MyRoutes />
    </BrowserRouter>
  );
};

export default App;