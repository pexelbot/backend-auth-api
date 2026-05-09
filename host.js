const express = require('express');
const app = express();

const authRoutes = require('./routes/auth');

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Auth API running on http://localhost:3000');
});
