
  const express = require('express');
  const app = express();
  const port = 3000;
  const mongoose = require('mongoose');
  const routes = require('./routes/index');
  
  mongoose.connect('mongodb://localhost/classic_fox_live_code_1', { 
    useNewUrlParser: true
  });
  
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(require('cors')())
  
  app.use('/', routes)
    

  app.listen(port, function() {
    console.log(`app runs on port ${port}`);
  });
    