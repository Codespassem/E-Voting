const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

// Get all candidates
router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add candidate (admin only)
router.post('/', async (req, res) => {
  const { name, party, image } = req.body;
  try {
    const candidate = new Candidate({ name, party, image });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
