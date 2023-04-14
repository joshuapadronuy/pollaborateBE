require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const PollSessionsRouter = require('./routes/poll-sessions') 
// const ParticipantsRouter  = require('./routes/participants') 

const app = express()

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to database'))

app.use(express.json())

app.use('/poll-sessions', PollSessionsRouter)
// app.use('/participants', ParticipantsRouter)

app.listen(3000, () => console.log('Server Started'))