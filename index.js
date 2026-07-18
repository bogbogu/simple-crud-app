const express = require('express')
const app = express()
const mongoose = require('mongoose')

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


mongoose.connect("mongodb+srv://REDACTED:REDACTED@REDACTED/REDACTED")
    .then(() => {
        console.log("Connected to database!");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });