require('dotenv').config()

// pull in express library
const express = require('express')
// app variable to configure the server
const app = express()
const mongoose = require('mongoose')

// connection string (.env file has connection variable)
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

// established connection feedback
db.on('error', (error) => console.error(error))
db.on('open', (error) => console.log('Connected to Database'))

// Port
const PORT = process.env.port || 3000
// listen to port
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))

