const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  cost: {
    type: Number,
    required: true
  },
  roleName: {
    type: String,
    required: true
  },
  minCTC: {
    type: Number,
    required: true
  },
  maxCTC: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Job', JobSchema);
