const mongoose = require('mongoose')
require('dotenv').config()

const uri =
  'mongodb+srv://mjv:vitor1994@nodestudies.prswxvw.mongodb.net/mjv?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {})
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = connectDB
