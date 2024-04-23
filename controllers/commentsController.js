// SELECT * FROM entries WHERE user_id=1;
// db.any()

// SELECT * FROM comments WHERE entry_id=1;
// db.any()

const express = require("express");

const comments = express.Router({ mergeParams: true });

// Queries
const {
  getAllComments,
  getComment,
  getCommentById,
  newComment,
  deleteComment,
  updateComment,
  getCommentsByEntryId,
} = require("../queries/comments");



// INDEX
comments.get('/', async (req, res) => {
  const { user_id } = req.params
  const comments = await getAllComments(user_id)
  const entry = await getComment(user_id)
  if (user_id) {
    res.status(200).json({ ...entry, comments })
  } else {
    res.status(500).json({ error: 'comment not found or server error' })
  }
});


// SHOW
comments.get('/:id', async (req, res,) =>{
    try {
        const { id } = req.params;
        console.log("controller", id)
        const comment = await getCommentById(id);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({ error: 'comment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});

// create
// controllers/reviewsController.js
comments.post('/', async (req, res) => {
    try {
      const { user_id } = req.params;
      const comment = await newComment({ ...req.body, user_id });
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  


// UPDATE
comments.put('/:id', async (req, res) => {
    try {
      const { id, user_id } = req.params;
      console.log(id, user_id);
      const updatedComment = await updateComment({ user_id, id, ...req.body });
      if (updatedComment.id) {
        res.status(200).json(updatedComment);
      } else {
        res.status(404).json('Comment not found');
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  comments.get('/:entryId', async (req, res) => {
    try {
        const { entryId } = req.params; 
        const comments = await getCommentsByEntryId(entryId); 
        res.json(comments); 
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Internal server error' }); 
    }
});

  



// DELETE
comments.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedComment = await deleteComment(id);
      if (deletedComment.id) {
        res.status(200).json(deletedComment);
      } else {
        res.status(404).json({ error: "Comment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = comments;