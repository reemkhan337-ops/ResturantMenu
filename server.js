
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

mongoose.connect('mongodb://127.0.0.1:27017/restaurantDB')
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err));

app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(5000, ()=>console.log('Server running on port 5000'));
