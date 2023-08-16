// routes/commentsRoutes.js
const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');

// GET comment list for a specific video
router.get('/', async (req, res) => {
    const db = req.db;
    const controller = new CommentsController(db);

    await controller.getCommentList(req, res);
});

module.exports = router;
