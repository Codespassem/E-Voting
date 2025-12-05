const Election = require('../models/Election');

exports.createElection = async (req, res) => {
  try {
    const { name, startDate, endDate } = req.body;
    const election = new Election({ name, startDate, endDate });
    await election.save();
    res.status(201).json(election);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getElections = async (req, res) => {
  try {
    const elections = await Election.find();
    res.json(elections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
