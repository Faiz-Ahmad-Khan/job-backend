const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('Job posting endpoint');
});

router.post('/apply', async (req, res) => {
  const { jobId, userId } = req.body;
  try {
    const job = await Job.findById(jobId);
    const user = await User.findById(userId);
    if (user.balance < job.cost) {
      res.status(400).send('Oops, you don\'t have enough balance');
    } else {
      user.balance -= job.cost;
      user.history.push({ description: `Applied for job: ${job.title}`, amount: -job.cost });
      job.applicants.push(userId);
      await job.save();
      await user.save();
      // Send email notification
      res.send('Job application successful');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;