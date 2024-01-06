import express from 'express';

// Initialize the Express application
const app = express();
const PORT = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
