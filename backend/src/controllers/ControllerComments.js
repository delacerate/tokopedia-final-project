const Comment = require("../models/Comments");

const getAllComments = async (req, res) => {
    try {
        const { videoID } = req.query;
        let query = {};

        if (videoID) {
            query = { videoID: videoID };
        }

        const comments = await Comment.find(query);
        res.status(200).json(comments);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error fetching comments", error: error.message });
    }
};

const createComment = async (req, res) => {
    try {
        const { username, comment, videoID } = req.body;
        const newComment = new Comment({
            username,
            comment,
            videoID,
        });

        const savedComment = await newComment.save();
        res.status(200).json({ success: true, comment: savedComment });
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: "Error submitting comment",
                error: error.message,
            });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { commentID } = req.params;
        const deletedComment = await Comment.findByIdAndDelete(commentID);

        if (!deletedComment) {
            res.status(404).json({ message: "Comment not found" });
            return;
        }

        res.status(200).json({ success: true, message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting comment", error: error.message });
    }
};

module.exports = {
    getAllComments,
    createComment,
    deleteComment,
};