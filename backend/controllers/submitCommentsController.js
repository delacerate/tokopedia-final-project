// controllers/submitCommentController.js
const Comment = require('../models/Comment');

class SubmitCommentController {
    constructor(db) {
        this.commentModel = new Comment(db);
    }

    async submitComment(req, res) {
        try {
            const { videoId, username, comment } = req.body;
            const success = await this.commentModel.addComment(videoId, username, comment);

            if (success) {
                res.json({ message: 'Comment submitted successfully' });
            } else {
                res.status(500).json({ error: 'Failed to submit comment' });
            }
        } catch (err) {
            console.error('Error submitting comment:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = SubmitCommentController;
