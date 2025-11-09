const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
  
// Middlewares
app.use(cors());
app.use(express.json()); // Para parsear JSON
 
// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log('✅ Conectado a MongoDB Atlas'))
   .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));
 
// Rutas
const tareasRoutes = require('./routes/tareas');
app.use('/api/tareas', tareasRoutes);
 
// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor escuchando en puerto ${PORT}`));
