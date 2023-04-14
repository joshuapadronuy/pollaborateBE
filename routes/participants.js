const express = require('express')
const router = express.Router()
import {
    getAllParticipants,
    getOneParticipant,
    createOneParticipant,
    updateOneParticipant,
    deleteOneParticipant
} from '../controllers/participants'

// Getting all
router.get('/', getAllParticipants)
// Getting One
router.get('/', getOneParticipant)
// Creating One
router.post('/', createOneParticipant)
// Updating One
router.put('/', updateOneParticipant)
// Deleting One
router.delete('/', deleteOneParticipant)

module.exports = router