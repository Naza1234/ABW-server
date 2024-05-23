const express = require('express');
const router = express.Router();
const controller = require('../controllers/commentsControllers');

router
.post('/comments', controller.AddComment)
.get('/comments-by-is/:id', controller.findAllCommentForAPost)
.get('/comments/:id', controller.findOneCommentById)
.put('/comments/:id', controller.updateOneCommentById)
.delete('/comments/:id', controller.deleteOneCommentById)

module.exports = router;

