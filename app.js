var app = require('express')();
require('dotenv').config();
var mongoose = require('mongoose');
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

// connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB at ${process.env.MONGO_URL}`);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// starting the server
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// kuch nahi
