
const Post = require('../models/postsModel');


exports.AddPost = async (req, res) => {
    try {   
        const post = new Post(req.body);
        const NewPost = await  post.save();
        res.status(201).json(NewPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Find one Post by id
exports.getPost = async (req, res) => {
    try {
        const post = await Post.find({});
      
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Find one Post by id
exports.findOnePostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one Post by id
exports.updateOnePostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.Title = req.body.Title || post.Title;
        post.WriteUp = req.body.WriteUp || post.WriteUp;
        await post.save();
        res.json({ message: 'Post updated successfully' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one Post by id
exports.deleteOnePostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
    
        await Post.deleteOne({ _id: req.params.id });
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};
