const express = require('express');
const routes = require('./routes/index');

const port = process.env.PORT || 3000;

// Create Expresss app
const app = express();

// Middleware (Parse the request body as JSON)
app.use(express.json());

// Register the 'routes' middleware to handle requests at the root path
app.use('/', routes);
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
