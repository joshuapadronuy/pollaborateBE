exports.getAllPollSessions = (req, res) => {
    return res.status(200).json({message: 'success'})
}

exports.getOnePollSession = (req, res) => {
    const { id } = req.params
    // missingCheckerId(id)

    return res.status(200).json({message: 'success'})
}

exports.createOnePollSession = (req, res) => {
    return res.status(200).json({message: 'success'})
}

exports.updateOnePollSession = (req, res) => {
    const { id } = req.params
    // missingCheckerId(id)
    return res.status(200).json({message: 'success'})
}

exports.deleteOnePollSession = (req, res) => {
    const { id } = req.params
    // missingCheckerId(id)
    return res.status(200).json({message: 'success'})
}

// module.exports = {
//     getAllPollSessions,
//     getOnePollSession,
//     createOnePollSession,
//     updateOnePollSession,
//     deleteOnePollSession
// }