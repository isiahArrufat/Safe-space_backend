const express = require("express");

const teapots = express.Router();

const reviewsController = require('./reviewsController.js')

const { getAllTeapots, getOneTeapot } = require("../queries/teapots")

teapots.use('/:teapot_id/reviews', reviewsController)

//Index
teapots.get('/', async (req,res) => {
    const allTeapots = await getAllTeapots();

    if(allTeapots[0]){
        res.status(200).json(allTeapots);
    } else {
        res.status(500).json({ error: "server error"})
    }
});

//Show
teapots.get('/:id', async (req, res) => {
    const { id } = req.params

    const oneTeapot = await getOneTeapot(id)
    if(oneTeapot) {
        res.status(200).json(oneTeapot)
    } else {
        res.status(418).json({ error: 'Teapot not found'})
    }

})

module.exports = teapots