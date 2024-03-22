const express = require("express");


const {getAllReviews, getOneReview} = require("../queries/reviews.js")
const {getOneTeapot} = require("../queries/teapots.js")

const reviews = express.Router({mergeParams: true});
//Index
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


module.exports = reviews