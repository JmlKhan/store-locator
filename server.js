const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const storesRouter = require('./routes/stores');
const connectDB = require('./config/db');

//load env vars
dotenv.config({path: './config/config.env'})
 
//connect to db
connectDB();

const app = express();

//body parser
app.use(express.json());

//anable cors
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use('/api/v1/stores', storesRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => 
    console.log(`server is running in ${process.env.NODE_ENV} mode on ${port}`) 
    );