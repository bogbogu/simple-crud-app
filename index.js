const express = require('express')
const app = express()
const mongoose = require('mongoose')

const mongoUri = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const Product = require("./models/product.model")
const productRoute = require("./routes/product.route")


// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello World')
})

if (!mongoUri) {
    console.log("MONGO_URI is not set. Please set it in your environment before starting the server.");
    process.exit(1);
}

mongoose.connect(mongoUri)
    .then(() => {
        console.log("Connected to database!");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });