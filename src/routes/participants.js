const express = require('express') 
const ParticipantsController = require('../controllers/poll-sessions')

const router = express.Router()

// Getting all
router.get('/', ParticipantsController.getAllParticipants)
// Getting One
router.get('/', ParticipantsController.getOneParticipant)
// Creating One
router.post('/', ParticipantsController.createOneParticipant)
// Updating One
router.put('/', ParticipantsController.updateOneParticipant)
// Deleting One
router.delete('/', ParticipantsController.deleteOneParticipant)

module.exports = router