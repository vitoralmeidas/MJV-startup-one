const mongoose = require('mongoose')
const bycrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please provide a name'],
    min: 6,
    max: 255
  },

  email: {
    type: String,
    require: [true, 'Please provide an Email'],
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

UserSchema.pre('save', async function () {
  const salt = await bycrypt.genSalt(10)
  this.password = await bycrypt.hash(this.password, salt)
})

// compare the password

UserSchema.methods.comparePassword = async function (possiblePassword) {
  const isMatch = await bycrypt.compare(possiblePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)
