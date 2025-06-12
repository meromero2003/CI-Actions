const express = require('express');
const path = require('path');
app = express();

const PORT = 3000; // Cambia si usas otro puerto

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  import('open').then(open => open.default(`http://localhost:${PORT}`)); // Importa y ejecuta open
});

module.exports = app;
