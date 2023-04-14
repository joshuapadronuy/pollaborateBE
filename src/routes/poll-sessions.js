const express = require('express')
const PollSessionsController = require('../controllers/poll-sessions')

const router = express.Router()

// Getting all
router.get('/', PollSessionsController.getAllPollSessions)
// Getting One
router.get('/:id', PollSessionsController.getOnePollSession)
// Creating One
router.post('/', PollSessionsController.createOnePollSession)
// Updating One
router.patch('/:id', PollSessionsController.updateOnePollSession)
// Deleting One
router.delete('/:id', PollSessionsController.deleteOnePollSession)

module.exports = router