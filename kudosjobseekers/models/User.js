const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  resumeUrl: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
