function checkContentRating(req, res, next) {
  const { rating, content, user_id, teapot_id } = req.body;

  // check if rating exists is between 1 and 5
  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5." });
  }

  // check if content exists and is a string
  if (!content || typeof content !== "string") {
    return res.status(400).json({ error: "Please enter your review." });
  }

  next();
}

module.exports = { checkContentRating };
