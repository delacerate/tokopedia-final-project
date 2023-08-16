// models/Comment.js
class Comment {
    constructor(db) {
        this.collection = db.collection('comments');
    }

    async getCommentsByVideoId(videoId) {
        try {
            const commentList = await this.collection.find({ videoId }).toArray();
            return commentList;
        } catch (err) {
            console.error('Error fetching comments:', err);
            throw new Error('An error occurred while fetching comments.');
        }
    }

    async addComment(videoId, username, comment) {
        try {
            const result = await this.collection.insertOne({
                videoId,
                username,
                comment,
                timestamp: new Date()
            });

            if (result.insertedCount === 1) {
                return true;
            } else {
                console.error('Failed to insert comment.');
                return false;
            }
        } catch (err) {
            console.error('Error adding comment:', err);
            throw new Error('An error occurred while adding a comment.');
        }
    }
}

module.exports = Comment;
