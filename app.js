const express = require('express');
const app = express();
const port = 3000;

// Configurar Express para servir archivos estáticos desde la carpeta 'page'
app.use(express.static(__dirname + '/page'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/page/index.html');
});

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});