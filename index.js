const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
require('dotenv').config(); 


const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// Port
const PORT = process.env.PORT || 5000;

// Endpoint dasar untuk mengecek server
app.get('/', (req, res) => {
  res.send('API is running...'); 
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Connect mongo
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  }).then(() => {
    console.log('Connected to MongoDB'); 
  }).catch((err) => {
    console.error('Database connection error:', err); 
  });

const taskRoutes = require('./routes/taskRoutes'); 
app.use('/api', taskRoutes); 