const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { email, password, userType, companyName, companyLogo } = req.body;
  try {
    const user = new User({ email, password, userType, companyName, companyLogo });
    if (userType === 'student') {
      user.history.push({ description: 'Initial balance', amount: 300 });
    } else if (userType === 'company') {
      user.balance = 200;
    }
    await user.save();
    // Send email notification
    res.send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.post('/login', (req, res) => {
  console.log(req.body);
  res.send('Login endpoint');
});

module.exports = router;