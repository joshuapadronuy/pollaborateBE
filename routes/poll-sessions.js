const express = require('express')
const router = express.Router()
import {
    getAllPollSessions,
    getOnePollSession,
    createOnePollSession,
    updateOnePollSession,
    deleteOnePollSession
} from '../controllers/poll-sessions'

// Getting all
router.get('/', getAllPollSessions)
// Getting One
router.get('/', getOnePollSession)
// Creating One
router.post('/', createOnePollSession)
// Updating One
router.put('/', updateOnePollSession)
// Deleting One
router.delete('/', deleteOnePollSession)

module.exports = router