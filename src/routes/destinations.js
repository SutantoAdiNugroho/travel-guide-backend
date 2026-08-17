const express = require('express');
const destinationController = require('../controllers/destinationController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticate, destinationController.getAllDestinations);
router.get('/:id', authenticate, destinationController.getDestinationById);

module.exports = router;