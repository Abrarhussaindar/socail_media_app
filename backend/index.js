const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Event handlers for successful connection and error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(8800, () => {
    console.log('Backend server is running! on 8800');
});

