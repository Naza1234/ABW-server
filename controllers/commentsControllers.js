
const Comment = require('../models/commentsModel');
const Users = require('../models/UsersModel');


exports.AddComment = async (req, res) => {
    try {   
        const comment = new Comment(req.body);
        const NewComment = await  comment.save();
        res.status(201).json(NewComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Find all comments for a specific blog post by ID
exports.findAllCommentForAPost = async (req, res) => {
    try {
        const blogId = req.params.id;

        // Fetch all comments for the given BlogId
        const comments = await Comment.find({ BlogId: blogId });

        // Fetch user details in parallel
        const commentsWithUserDetails = await Promise.all(comments.map(async (comment) => {
            const user = await Users.findById(comment.UserId);
            return { comment, user };
        }));

        res.json(commentsWithUserDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Find one Comment by id
exports.findOneCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one Comment by id
exports.updateOneCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        comment.UserId = req.body.UserId || comment.UserId;
        comment.BlogId = req.body.BlogId || comment.BlogId;
        comment.WriteUp = req.body.WriteUp || comment.WriteUp;
        await comment.save();
        res.json({ message: 'Comment updated successfully' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one Comment by id
exports.deleteOneCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.remove();
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
