const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

// middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// routes
const authRoutes = require('./routes/auth')
app.use('/api/v1/auth', authRoutes)

const productRoutes = require('./routes/product')
app.use('/api/v1/', productRoutes)

// import port from .env
const port = process.env.PORT || 3000

//testing the connection to the database

const connectDB = require('./config/db')
connectDB()

app.listen(3000, () => {
  console.log('Example app listening on port: ' + port)
})
