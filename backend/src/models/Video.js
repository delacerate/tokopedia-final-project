const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    videoID: {
        type: String,
        required: true,
    },
    urlImage: {
        type: String,
        required: true,
    },
    titleThumbnail: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Video", videoSchema, "Video");