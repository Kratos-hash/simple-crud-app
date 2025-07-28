const mongoose = require('mongoose');
const express = require('express');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://Kratos:Adewale1122@simple-crud-app.4abbili.mongodb.net/Node-API?retryWrites=true&w=majority&appName=simple-crud-app")
.then(() => {
    console.log("Connected to MongoDB-atlas");
})
.catch((err) => {
        console.error("Connection error:", err);
    });