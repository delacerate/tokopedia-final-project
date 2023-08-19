const ControllerVideo = require('../controllers/ControllerVideo');
const ControllerProducts = require('../controllers/ControllerProducts');
const ControllerComments = require('../controllers/ControllerComments');
const express = require('express');
const router = express.Router();

router.get('/video', ControllerVideo.getAllVideos);
router.get('/video/:VideoId', ControllerVideo.getVideoById);

router.get('/products', ControllerProducts.getAllProducts);
router.get('/products/:ProductId', ControllerProducts.getProductById);

router.get('/comments', ControllerComments.getAllComments);
router.post('/comments', ControllerComments.createComment);
router.delete('/comments/:CommentId', ControllerComments.deleteComment);


module.exports = router;