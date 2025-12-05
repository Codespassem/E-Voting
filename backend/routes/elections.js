const express = require('express');
const router = express.Router();
const Election = require('../models/Election');
const User = require('../models/User');
const { sendElectionNotification } = require('../utils/emailService');

// Create election
router.post('/', async (req, res) => {
  try {
    const { title, description, startDate, endDate } = req.body;

    // Validation
    if (!title || !startDate || !endDate) {
      return res.status(400).json({ message: 'Title, startDate, and endDate are required' });
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({ message: 'End date must be after start date' });
    }

    // Create election
    const election = new Election({ 
      title, 
      description, 
      startDate: new Date(startDate), 
      endDate: new Date(endDate) 
    });
    await election.save();

    // Send notification to all users
    const users = await User.find();
    
    if (users.length > 0) {
      users.forEach(user => {
        if (user.email) {
          sendElectionNotification(user.email, user.username, title);
        }
      });
      console.log(`📧 Election notification sent to ${users.length} users`);
    }

    res.status(201).json({ 
      message: 'Election created successfully',
      election 
    });
  } catch (error) {
    console.error('Error creating election:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get all elections
router.get('/', async (req, res) => {
  try {
    const elections = await Election.find().sort({ createdAt: -1 });
    
    // Add current status to each election
    const electionsWithStatus = elections.map(election => {
      const now = new Date();
      let status = 'upcoming';
      
      if (now >= new Date(election.startDate) && now <= new Date(election.endDate)) {
        status = 'active';
      } else if (now > new Date(election.endDate)) {
        status = 'closed';
      }

      return {
        ...election.toObject(),
        currentStatus: status
      };
    });

    res.json(electionsWithStatus);
  } catch (error) {
    console.error('Error fetching elections:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get single election with status
router.get('/:id', async (req, res) => {
  try {
    const election = await Election.findById(req.params.id);
    
    if (!election) {
      return res.status(404).json({ message: 'Election not found' });
    }

    const now = new Date();
    let status = 'upcoming';
    
    if (now >= new Date(election.startDate) && now <= new Date(election.endDate)) {
      status = 'active';
    } else if (now > new Date(election.endDate)) {
      status = 'closed';
    }

    res.json({ 
      ...election.toObject(), 
      currentStatus: status 
    });
  } catch (error) {
    console.error('Error fetching election:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
