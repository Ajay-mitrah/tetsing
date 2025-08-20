const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Sample Node.js Project!',
    timestamp: new Date().toISOString(),
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.post('/api/data', (req, res) => {
  const { name, message } = req.body;
  res.json({
    success: true,
    data: { name, message },
    receivedAt: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} in your browser`);
  console.log(`🔗 Open http://localhost:${PORT}/health in your browser`);
  console.log(`Second Commit`);
  console.log(`Third Commit`);
  console.log(`second Child`);
  console.log(`Third Child`);
  console.log(`Fourth Child`);;;
  console.log(`Fifth Child`);
  console.log(`Sixth Child`);
});


