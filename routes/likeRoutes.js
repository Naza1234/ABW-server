const express = require('express');
const router = express.Router();
const controller = require('../controllers/likeControllers');

router
.post('/like', controller.AddLike)
.post('/like/starts', controller.checkLikeStates)
.get('/like', controller.getAllLike)
.get('/like/:id', controller.findOneLikeById)
.put('/like/:id', controller.updateOneLikeById)
.delete('/like/:id', controller.deleteOneLikeById)

module.exports = router;

