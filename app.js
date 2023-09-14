const express = require('express');
const app = express();
const port = 3000;

// Configurar Express para servir archivos estáticos desde la carpeta 'page'
app.use(express.static(__dirname + '/page'));

app.use((req, res, next) => {
  const ipAddress = req.ip; // Obtiene la dirección IP del cliente

  if (req.method === 'GET' && ipAddress === 'IP_ESPECIFICA') {
    console.log(`Solicitud GET recibida desde la IP ${ipAddress}`);
  }

  next(); // Llama al siguiente middleware o enrutador
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/page/index.html');
});

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});