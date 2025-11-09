const express = require('express');
const router = express.Router(); // <--- ¡ESTA LÍNEA FALTABA O ESTABA ROTA!
const Tarea = require('../models/Tarea');

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    console.error('Error en GET /api/tareas:', err); // Log para Render
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

// Crear nueva tarea
router.post('/', async (req, res) => {
  try {
    const nuevaTarea = new Tarea({ titulo: req.body.titulo });
    await nuevaTarea.save();
    res.json(nuevaTarea);
  } catch (err) {
    console.error('Error en POST /api/tareas:', err); // Log para Render
    res.status(500).json({ error: 'Error al crear tarea' });
  }
});

// Actualizar tarea (hecho o titulo)
router.put('/:id', async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tarea);
  } catch (err) {
    console.error('Error en PUT /api/tareas/:id:', err); // Log para Render
    res.status(500).json({ error: 'Error al actualizar tarea' });
  }
});

// Eliminar tarea
router.delete('/:id', async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Tarea eliminada' });
  } catch (err) {
    console.error('Error en DELETE /api/tareas/:id:', err); // Log para Render
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
});

module.exports = router;