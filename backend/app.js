const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

// Connect to MongoDB
client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db('video_platform');

  // Attach the MongoDB database to the request object
  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  // Routes
  const videoThumbnailsRouter = require('./routes/videoThumbnailsRoutes');
  const productsRouter = require('./routes/productsRoutes');
  const commentsRouter = require('./routes/commentsRoutes');
  const submitCommentRouter = require('./routes/submitCommentRoutes');

  app.use('/api/video_thumbnails', videoThumbnailsRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/comments', commentsRouter);
  app.use('/api/submit_comment', submitCommentRouter);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
