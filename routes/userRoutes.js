const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersControllers');

router
.post('/user', controller.userEntry)
.get('/user', controller.findUser)
.get('/user/:id', controller.findOneUserById)
.put('/user/:id', controller.updateOneUserById)
.delete('/user/:id', controller.deleteOneUserById)

module.exports = router;

