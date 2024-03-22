const express = require("express");


const {getAllReviews, getOneReview} = require("../queries/reviews.js")
const {getOneTeapot} = require("../queries/teapots.js")

const reviews = express.Router({mergeParams: true});


//Index ROute
reviews.get('/', async (req, res) => {
    const { teapot_id } = req.params
    
    const allReviews = await getAllReviews(teapot_id)
    const teapot = await getOneTeapot(teapot_id)

    if(teapot.id) {
        res.status(200).json({...teapot, allReviews})
    } else {
        res.status(500).json({ error: 'server error'})
    }
})

//Show route
reviews.get('/:review_id', async (req, res) => {
    const { teapot_id, review_id } = req.params
    console.log(req.params)
    const review = await getOneReview(review_id)

    const teapot = await getOneTeapot(teapot_id)

    if(review.teapot_id === teapot.id && review) {
        res.status(200).json({...teapot, review})
    } else {
        res.status(500).json({ error: 'Review not found'})
    }
})



module.exports = reviews