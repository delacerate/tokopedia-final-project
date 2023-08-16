// routes/submitCommentRoutes.js
const express = require('express');
const router = express.Router();
const SubmitCommentController = require('../controllers/submitCommentController');

// POST a new comment
router.post('/', async (req, res) => {
    const db = req.db;
    const controller = new SubmitCommentController(db);

    await controller.submitComment(req, res);
});

module.exports = router;
