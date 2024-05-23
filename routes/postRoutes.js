const express = require('express');
const router = express.Router();
const controller = require('../controllers/postControllers');

router
.post('/post', controller.AddPost)
.get('/post', controller.getPost)
.get('/post/:id', controller.findOnePostById)
.put('/post/:id', controller.updateOnePostById)
.delete('/post/:id', controller.deleteOnePostById)

module.exports = router;

