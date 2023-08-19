const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productID: {
        type: String,
        required: true,
    },
    productLink: {
        type: String,
        required: true,
    },
    productTitle: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    videoID: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Product", productSchema);