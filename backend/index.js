require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const router = require('./src/routes/routerall');

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({
    origin: 'http://localhost:5000'
}));
const connection = mongoose.connection;

app.use("/api", router);  // Corrected the use of router

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
