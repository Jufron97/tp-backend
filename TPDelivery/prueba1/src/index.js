const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
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

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/', indexRoutes);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});