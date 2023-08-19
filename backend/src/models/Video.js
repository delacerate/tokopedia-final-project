const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    videoID: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    Thumbnail: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Video", videoSchema);