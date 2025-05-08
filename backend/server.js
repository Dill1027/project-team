const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project-team', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established successfully");
});

// Error handling for port in use
const server = app.listen(port)
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}`);
      server.close();
      app.listen(port + 1, () => {
        console.log(`Server is running on port: ${port + 1}`);
      });
    }
  })
  .on('listening', () => {
    console.log(`Server is running on port: ${port}`);
  });
