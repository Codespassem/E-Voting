const Candidate = require('../models/Candidate');
const Election = require('../models/Election');

exports.addCandidate = async (req, res) => {
  try {
    const { name, partyName, electionId } = req.body;
    const election = await Election.findById(electionId);
    if (!election) return res.status(404).json({ message: 'Election not found' });

    const candidate = new Candidate({ name, partyName, election: electionId });
    await candidate.save();

    election.candidates.push(candidate._id);
    await election.save();

    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCandidatesByElection = async (req, res) => {
  try {
    const { electionId } = req.params;
    const candidates = await Candidate.find({ election: electionId });
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
