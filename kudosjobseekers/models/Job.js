const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  requirements: {
    type: [String], 
  },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
