const express = require('express');
const router = express.Router();
const controller = require('../controllers/mediaPhotosControllers');

router
.post('/mediaPhotos',controller.uplaod, controller.AddMediaPhotos)
.get('/mediaPhotos', controller.GetAllMediaPhotos)
.get('/mediaPhotos/:id', controller.GetMediaPhotos)
.put('/mediaPhotos/get-single/:id', controller.UpdateSingleMediaPhotos)
.delete('/mediaPhotos/:id', controller.UpdateSingleMediaPhotos)

module.exports = router;

