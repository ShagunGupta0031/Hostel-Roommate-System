const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: [
    'http://127.0.0.1:5500', 
    'http://localhost:5500',
    'https://hostel-roommate-system.vercel.app',
    'https://hostelroomatesystem.netlify.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('MongoDB connected'))
  .catch(err=>console.log('DB error:', err));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/preferences', require('./routes/preferenceRoutes'));
app.use('/api/warden', require('./routes/wardenRoutes'));

app.listen(process.env.PORT, ()=>console.log('Server running on port '+process.env.PORT));
