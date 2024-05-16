const express = require('express');
const app = express();

app.listen(3306, ()=>{
    console.log("Server en el puerto 3306");
});