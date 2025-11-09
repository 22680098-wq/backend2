const mongoose = require('mongoose');
  
const TareaSchema = new mongoose.Schema({
titulo: { type: String, required: true },
hecho: { type: Boolean, default: false }});
  
module.exports = mongoose.model('Tarea', TareaSchema);