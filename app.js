const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Configurar Express para servir archivos estáticos desde la carpeta 'page'
app.use(express.static(__dirname + '/page'));

// Configurar multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Guarda los archivos en la carpeta 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
  },
});

const upload = multer({ storage });

// Ruta para mostrar el formulario de carga de archivos
app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/page/upload.html');
});

// Ruta para manejar la carga de archivos desde el formulario
app.post('/upload', upload.single('imagen'), (req, res) => {
  // 'imagen' es el nombre del campo del formulario que contiene la imagen
  res.send('Imagen subida con éxito.');
});

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
