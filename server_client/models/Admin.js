const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, 'Please provide an Email'],
    min: 6,
    max: 255
  },

  status: {
    type: String,
    require: [true, 'Please provide a status'],
    min: 6,
    max: 255
  },

  password: {
    type: String,
    require: [true, 'Please provide an password'],
    min: 6,
    max: 1024
  }
})

AdminSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// compare the password

AdminSchema.methods.comparePassword = async function (possiblePassword) {
  const isMatch = await bcrypt.compare(possiblePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('Admin', AdminSchema)
