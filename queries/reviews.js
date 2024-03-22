const teapots = require("../controllers/teapotsController.js");
const db = require("../db/dbConfig.js")


//Index
const getAllReviews = async (teapot_id) => {
    try {
        const allReviews = await db.any(`SELECT * FROM reviews WHERE teapot_id=$1`, teapot_id);
        return allReviews
    } catch (error) {
        return error;
    }
};

//Show
const getOneReview = async (id) => {
    try {
        const oneReview = await db.one(`SELECT * FROM teapots WHERE reviews.id=$1`, id)
        return oneReview
    } catch (error) {
        return error
    }
}



module.exports = {getAllReviews, getOneReview}