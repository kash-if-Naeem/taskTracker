const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')
const cors = require('cors');

//to access config.env
dotenv.config({ path: './config/config.env' })

connectDB();

const trasactions = require('./routes/transactions')

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

//body parser for adding task
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', trasactions)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));