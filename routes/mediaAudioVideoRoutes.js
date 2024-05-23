const express = require('express');
const router = express.Router();
const controller = require('../controllers/mediaAudioVideoControllers');

router
  .post('/mediaAudioVideo',controller.uplaod ,controller.AddMediaAudioVideo)
  .get('/mediaAudioVideo', controller.GetAllMediaAudioVideo)
  .get('/mediaAudioVideo/:id', controller.GetMediaAudioVideo)
  .put('/mediaAudioVideo/get-single/:id', controller.UpdateSingleMediaAudioVideo)
  .delete('/mediaAudioVideo/:id', controller.DeleteSingleMediaAudioVideo);

module.exports = router;
