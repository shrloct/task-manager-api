const express = require('express'); // Framework web untuk membuat server
const mongoose = require('mongoose'); // Library untuk koneksi ke MongoDB
const bodyParser = require('body-parser'); // Middleware untuk membaca data JSON dari request
const cors = require('cors'); // Middleware untuk mengizinkan komunikasi antar domain
require('dotenv').config(); // Mengambil variabel lingkungan dari file .env

// Inisialisasi aplikasi Express
const app = express();

// Middleware
app.use(cors()); // Mengaktifkan CORS
app.use(bodyParser.json()); // Mem-parsing body request menjadi JSON

// Port
const PORT = process.env.PORT || 5000; // Port server, default 5000

// Endpoint dasar untuk mengecek server
app.get('/', (req, res) => {
  res.send('API is running...'); // Respon sederhana saat mengakses root endpoint
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log untuk memastikan server berjalan
});

// Connect mongo
mongoose.connect(process.env.MONGO_URI, {
    useNewUrParses: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch(()=>{
    console.log('Database connection error:', err);
})