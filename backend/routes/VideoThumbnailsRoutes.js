const express = require('express');
const router = express.Router();
const VideoThumbnailsController = require('../controllers/videoThumbnailsController');

router.get('/', async (req, res) => {
    const db = req.db;
    const controller = new VideoThumbnailsController(db);

    await controller.getThumbnails(req, res);
});

module.exports = router;
