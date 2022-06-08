const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
  update_date: {
    type: Date,
  },
  avatar: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
})

module.exports = mongoose.model('Users', UserSchema)
