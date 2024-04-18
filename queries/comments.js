const getAllComments = async (entry_id) => {
    try {
      const allComments = await db.any("SELECT * FROM comments WHERE entry_id=$1", entry_id);
      return allComments;
    } catch (error) {
      return error;
    }
  };
  
  const getComment = async (entry_id) => {
    try {
      const Comment = await db.one("SELECT * FROM comments WHERE entry_id=$1", entry_id);
      return Comment;
    } catch (error) {
      return error;
    }
  };

  const getCommentById = async (id) => {
    try {
        const commentById = await db.one("SELECT * FROM comments WHERE id=$1", id);
        return commentById;
    } catch (error) {
        return error;
    }
};

const getCommentsByEntryId = async (entryId) => {
  try {
      const comments = await db.any('SELECT * FROM comments WHERE entry_id = $1', entryId);
      return comments;
  } catch (error) {
      // Handle error
      console.error('Error fetching comments:', error);
      throw error; // Rethrow the error to be handled elsewhere
  }
};
  
  const newComment = async (req) => {
      const { body } = req.body;
    console.log(body)
      try {
        const newComment = await db.one(
          "INSERT INTO comments (body, user_id) VALUES($1, $2) RETURNING *",
          [
            body,
            req.user_id
          ]
        );
        return newComment;
      } catch (error) {
        return error;
      }
  };
  
  const deleteComment = async (id) => {
    try {
      const deletedComment = await db.one(
        "DELETE FROM comments WHERE id=$1 RETURNING *",
        id
      );
      return deletedComment;
    } catch (error) {
      return error;
    }
  };
  
  const updateComment = async (req, id) => {
      const { body } = req.body;
      try {
        const updatedComment = await db.one(
          "UPDATE comments SET body=$1, user_id=$2 WHERE id=$3 RETURNING *",
          [
            body,
            req.user_id,
            id
          ]
        );
        return updatedComment;
      } catch (error) {
        return error;
      }
  };
  
  module.exports = {
    getAllComments,
    getComment,
    getCommentById,
    newComment,
    deleteComment,
    updateComment,
    getCommentsByEntryId
  };
  