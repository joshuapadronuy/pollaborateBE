const missingCheckerId = (res, id) => {
    if (!id) {
        return res.status(400).json({message: 'Missing id field'})
    }
}

module.exports = missingCheckerId