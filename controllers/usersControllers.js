
const User = require('../models/UsersModel');

exports.userEntry = async (req, res) => {
    try {
        const { Email} = req.body;
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(202).json(existingUser._id);
        }
        if (req.body) {
            return res.status(400).json("no use details");  
        }
        const user = new User(req.body);
        const NewUser = await  user.save();
        res.status(201).json(NewUser._id);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Find one user by id
exports.findOneUserById = async (req, res) => {
    try {
        var id=req.params.id
        const user = await User.findById(id );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findUser = async (req, res) => {
    try {
        const user = await User.find({});
       
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one user by id
exports.updateOneUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.Name = req.body.Name || user.Name;
        user.Email = req.body.Email || user.Email;
        user.ProfileUrl = req.body.ProfileUrl || user.ProfileUrl;
        await user.save();
        res.json({ message: 'User updated successfully' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one user by id
exports.deleteOneUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.remove();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
