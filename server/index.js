const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/authRoutes.js');
const cors = require('cors');


// Middleware para parsear JSON y URLs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar CORS para permitir solicitudes desde http://localhost:3001
app.use(cors({
    origin: 'http://localhost:3001', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'] 
}));

app.use((req, res, next) => {
  console.log('Solicitud recibida:', req.method, req.url);
  next();
});

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
