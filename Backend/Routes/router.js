const express = require('express');
const router = express.Router();
const products = require('../Models/Products');

router.post("/insertproduct", async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode, ProductQuantity } = req.body;

    try {
        const pre = await products.findOne({ ProductBarcode: ProductBarcode })
        console.log(pre);

        if (pre) {
            res.status(422).json("Product is already added.")
        }
        else {
            const addProduct = new products({ ProductName, ProductPrice, ProductBarcode, ProductQuantity })

            await addProduct.save();
            res.status(201).json(addProduct)
            console.log(addProduct)
        }
    }
    catch (err) {
        console.log(err)
    }
})

//Getting(Reading) Data:
router.get('/products', async (req, res) => {

    try {
        const getProducts = await products.find({})
        console.log(getProducts);
        res.status(201).json(getProducts);
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/products/:id', async (req, res) => {

    try {
        const getProduct = await products.findById(req.params.id);
        console.log(getProduct);
        res.status(201).json(getProduct);
    }
    catch (err) {
        console.log(err);
    }
})

router.put('/updateproduct/:id', async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode, ProductQuantity } = req.body;
    console.log("req: ",req.body)
    try {
        const updateProducts = await products.findByIdAndUpdate(req.params.id, { ProductName, ProductPrice, ProductBarcode, ProductQuantity }, { new: true });
        console.log("Data Updated");
        res.status(201).json(updateProducts);
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/product/:barcode', async (req, res) => {
    const query = {ProductBarcode : req.params.barcode}
    console.log("Que: ",query)
    try {
        const getProduct = await products.find(query);
        console.log(getProduct);
        res.status(201).json(getProduct);
    }
    catch (err) {
        console.log(err);
    }
})

router.delete('/deleteproduct/:id', async (req, res) => {

    try {
        const deleteProduct = await products.findByIdAndDelete(req.params.id);
        console.log("Data Deleted");
        res.status(201).json(deleteProduct);
    }
    catch (err) {
        console.log(err);
    }
})


module.exports = router;