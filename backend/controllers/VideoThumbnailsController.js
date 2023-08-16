const VideoThumbnail = require('../models/VideoThumbnail');

class VideoThumbnailsController {
    constructor(db) {
        this.videoThumbnailModel = new VideoThumbnail(db);
    }

    async getThumbnails(req, res) {
        try {
            const thumbnails = await this.videoThumbnailModel.getAllThumbnails();
            res.json(thumbnails);
        } catch (err) {
            console.error('Error retrieving video thumbnails:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = VideoThumbnailsController;
