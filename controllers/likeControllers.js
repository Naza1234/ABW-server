
const Like = require('../models/likeModel');


exports.AddLike = async (req, res) => {
    try {   
        const like = new Like(req.body);
        const NewLike = await  like.save();
        res.status(201).json(NewLike);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Find one Like by id
exports.getAllLike = async (req, res) => {
    try {
        const like = await Like.find({});
      
        res.json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find one Like by id
exports.findOneLikeById = async (req, res) => {
    try {
        const like = await Like.find({BlogId : req.params.id});
   
        res.json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find one Like by id

// Controller
exports.checkLikeStates = async (req, res) => {
    try {
        const { UserId, BlogId } = req.body;

        // Find a record with the given UserId and BlogId
        const like = await Like.findOne({ UserId, BlogId });

        // If the record exists, respond with true, otherwise respond with false
        if (like) {
            res.json(true);
        } else {
            res.json(false);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one Like by id
exports.updateOneLikeById = async (req, res) => {
    try {
        const like = await Like.findById(req.params.id);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
        like.UserId = req.body.UserId || like.UserId;
        like.BlogId = req.body.BlogId || like.BlogId;
        like.WriteUp = req.body.WriteUp || like.WriteUp;
        await like.save();
        res.json({ message: 'Like updated successfully' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one Like by id
exports.deleteOneLikeById = async (req, res) => {
    try {
        const like = await Like.findById(req.params.id);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
        await like.remove();
        res.json({ message: 'Like deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
