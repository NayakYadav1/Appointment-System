const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// dotenv config
dotenv.config()

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: "server running"
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${port}`
        .bgCyan.white);
});