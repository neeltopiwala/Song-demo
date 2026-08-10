const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const  errorHandler  = require('./middleware/errorHandlerMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/songs', require('./routes/musicRouter'));
app.get('/', (req, res) => res.send('SaaS Dashboard API running'));



app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));