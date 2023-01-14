// load enviroment variables from .env file
require('dotenv').config()
// pull in express library
const express = require('express')
// app variable to configure the server
const app = express()
const mongoose = require('mongoose')

const cors = require('cors')
app.use(cors());

// database connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
// variable withholding connection
const db = mongoose.connection

// user feedback
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//accept json
app.use(express.json())

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req,res) => {
    res.json({msg: 'Welcome to the app'})
})

// set up routes
const sessionsRouter = require('./routes/sessions')
app.use('/sessions', sessionsRouter)

// Listen to this port
app.listen(3000, () => console.log('Server Started'))




