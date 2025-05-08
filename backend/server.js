const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Updated CORS configuration
app.use(cors({
  origin: true, // This allows all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  maxAge: 86400
}));

// Handle preflight requests
app.options('*', cors());

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

// Authentication routes
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

// Proxy routes
const proxyRouter = require('./routes/proxy');
app.use('/proxy', proxyRouter);

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Add 404 handling
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
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
