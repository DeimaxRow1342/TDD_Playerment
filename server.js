const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Asume que tus archivos HTML, CSS y JavaScript están en una carpeta 'public'

// Ruta para servir la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta dinámica para métricas de cada proyecto
app.get('/metrics/:id', (req, res) => {
  // Aquí podrías determinar cuál página de métricas servir basado en el id del proyecto
  res.sendFile(path.join(__dirname, 'public', 'metrics.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
