require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const destinationRoutes = require('./src/routes/destinations');
const { errorHandler } = require('./src/middleware/errorHandler');

const app = express();

const corsOptions = {
  origin: ['https://travel-guide-frontend-three.vercel.app', 'http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));