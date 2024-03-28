function checkContentRating(req, res, next) {
    const { rating, content, user_id, teapot_id } = req.body

    // check if rating exists is between 1 and 5
    if(!rating || rating < 1 || rating > 5){
        return res.status(400).json({ error: 'Rating must be between 1 and 5.' })
    }

    // check if content exists and is a string
    if(!content || typeof content !== 'string') {
        return res.status(400).json({ error: 'Please enter your review.'})
    }

    // check if user_id exists and is a number
    // if(!user_id || typeof user_id !== 'number') {
    //     return res.status(400).json({ error: 'User id is missing.'})
    // }

    // check if teapot_id exists and is a number
    // if(!teapot_id || typeof teapot_id !== 'number') {
    //     return res.status(400).json({ error: 'Teapot id is missing.'})
    // }
    next()
}

module.exports = { checkContentRating }