const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: true,
        },
        ProductPrice: {
            type: Number,
            required: true,
        },
        ProductBarcode: {
            type: Number,
            required: true,
        },
        ProductQuantity:{
            type: Number,
            require: true,
        }
    });

const Products = mongoose.model("Products", ProductSchema)
module.exports = Products;
