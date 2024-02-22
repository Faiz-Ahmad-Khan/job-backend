const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  companyName: {
    type: String
  },
  companyLogo: {
    type: String
  },
  balance: {
    type: Number,
    default: function() {
      return this.userType === 'student' ? 300 : 0;
    }
  },
  history: [{
    description: String,
    amount: Number,
    date: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('User', UserSchema);