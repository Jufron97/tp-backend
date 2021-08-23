const mongoose = require('mongoose');

// conectamos db
mongoose.connect('mongodb://localhost/locales',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));