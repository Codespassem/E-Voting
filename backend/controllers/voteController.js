const User = require('../models/User');
const Candidate = require('../models/Candidate');

exports.castVote = async (req, res) => {
  try {
    const userId = req.user.id;  // from auth middleware
    const { electionId, candidateId } = req.body;

    const user = await User.findById(userId);
    if (user.votedElections.includes(electionId)) {
      return res.status(400).json({ message: 'User has already voted in this election.' });
    }

    const candidate = await Candidate.findOne({ _id: candidateId, election: electionId });
    if (!candidate) return res.status(404).json({ message: 'Candidate not found for the election.' });

    candidate.votesCount = (candidate.votesCount || 0) + 1;
    await candidate.save();

    user.votedElections.push(electionId);
    await user.save();

    res.json({ message: 'Vote cast successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
