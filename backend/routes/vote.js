const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const path = require('path');
const { castVote } = require(path.join(__dirname, '..', 'controllers', 'voteController'));

router.post('/', authMiddleware, castVote);

module.exports = router;
