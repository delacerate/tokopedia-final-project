// controllers/commentsController.js
const Comment = require('../models/Comment');

class CommentsController {
    constructor(db) {
        this.commentModel = new Comment(db);
    }

    async getCommentList(req, res) {
        try {
            const videoId = req.query.videoId; // Get the videoId from query parameter
            const commentList = await this.commentModel.getCommentsByVideoId(videoId);
            res.json(commentList);
        } catch (err) {
            console.error('Error retrieving comment list:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = CommentsController;
