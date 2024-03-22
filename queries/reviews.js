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
        const oneReview = await db.one(`SELECT * FROM reviews WHERE id=$1`, id)
        return oneReview
    } catch (error) {
        return error
    }
}

//Create
const createReview = async (review) => {
    try {
      const newReview = await db.one(
        "INSERT INTO reviews (content, rating, teapot_id, user_id, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [
          review.content,
          review.rating,
          review.teapot_id,
          review.user_id,
          review.created_at,
          review.updated_at
        ]
      );
      return newReview;
    } catch (error) {
      return error;
    }
  };
  

//Delete
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *", id
    )
    return deletedReview
  } catch (error) {
    return error;
  }
}


//Update
const updateReview = async (review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET content=$1, rating=$2, updated_at=$3 where id = $4 RETURNING *", [
        review.content,
        review.rating,
        review.updated_at,
        review.id
      ]
    )
    return updatedReview
  } catch (error) {
    return error
  }
}


module.exports = {getAllReviews, getOneReview, createReview, deleteReview, updateReview}