const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// creamos server
const app = express();

// conectamos db
mongoose.connect('mongodb://localhost/locales',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('../routes/local');
const userRoutes = require('../routes/usuario');
const pedidoRoutes = require('../routes/pedido');

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/', indexRoutes);
app.use('/user',userRoutes);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});