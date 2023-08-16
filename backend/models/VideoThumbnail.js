const { ObjectId } = require('mongodb');

class VideoThumbnail {
    constructor(db) {
        this.collection = db.collection('video_thumbnails');
    }

    async getAllThumbnails() {
        try {
            const thumbnails = await this.collection.find().toArray();
            return thumbnails;
        } catch (err) {
            console.error('Error getting thumbnails:', err); // Log the error
            throw err; // Rethrow the same error
        }
    }
}

module.exports = VideoThumbnail;
