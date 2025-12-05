const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');
const Candidate = require('../models/Candidate');
const User = require('../models/User');

// Get voting analytics
router.get('/', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalVotes = await Vote.countDocuments();
    const candidates = await Candidate.find();
    
    const analytics = {
      totalUsers,
      totalVotes,
      totalCandidates: candidates.length,
      votingPercentage: totalUsers > 0 ? ((totalVotes / totalUsers) * 100).toFixed(2) : 0,
      candidates: candidates.map(c => ({
        name: c.name,
        party: c.party,
        votes: c.votes,
        percentage: totalVotes > 0 ? ((c.votes / totalVotes) * 100).toFixed(2) : 0
      })),
      topCandidate: candidates.sort((a, b) => b.votes - a.votes)[0] || null,
      votesPerHour: await getVotesPerHour()
    };

    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getVotesPerHour = async () => {
  const data = await Vote.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: '%H:00', date: '$votedAt' } },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]);
  return data;
};

module.exports = router;
