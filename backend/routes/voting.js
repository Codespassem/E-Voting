const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');
const Candidate = require('../models/Candidate');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendVoteConfirmation } = require('../utils/emailService');


// Auth middleware (inline)
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });
  
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}


// Cast vote
router.post('/vote', authMiddleware, async (req, res) => {
  try {
    const { candidateId } = req.body;
    const userId = req.user.id;

    // Check if user already voted
    const existingVote = await Vote.findOne({ userId });
    if (existingVote) {
      return res.status(400).json({ message: 'You have already voted' });
    }

    // Create vote
    const vote = new Vote({ userId, candidateId });
    await vote.save();

    // Increment candidate votes
    const candidate = await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: 1 } }, { new: true });

    // ✅ NEW: Send email confirmation to user
    const user = await User.findById(userId);
    if (user && user.email) {
      sendVoteConfirmation(user.email, candidate.name);
    }

    res.json({ message: 'Vote cast successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get results
router.get('/results', async (req, res) => {
  try {
    const results = await Candidate.find().sort({ votes: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
