const router = require("express").Router();
let Product = require('../../models/HP_model/Product');

//{ http://localhost:8070/Product/add }
//we use post method to add data to the databaser

router.route("/add").post((req, res) => {

    //we use .body here becase we are taking data from the body of the url
    //if we have data types other than 'String' we have to convert it to the perticular data type

    const product_name = req.body.product_name;
    const product_code = req.body.product_code;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = Number(req.body.price);


    const newProduct = new Product({
        product_name,
        product_code,
        description,
        imageUrl,
        price
    })

    newProduct.save().then(() => {
        // send a message to front end from the jason format
        // this executes only when the argument is true
        res.json(newProduct);

    }).catch((err) => {
        console.log(err);
    })

})

/*******************************************************************/
//RETRIEVE function

//we use get method to fetch data from the database

router.route("/").get((req, res) => {
    Product.find().then((Products) => {
        res.json(Products);
    }).catch((err) => {
        console.log(err);
    })
})

/******************************************************************/
// UPDATE function

//we are taking the perticuler object id from the url
//don't forget to put : 
//we use put method to update details

router.route("/update/:id").put(async (req, res) => {

    let productID = req.params.id;

    const { product_name, product_code, description, imageUrl, price } = req.body;

    const updateProduct = {
        product_name,
        product_code,
        description,
        imageUrl,
        price
    }

    const update = await Product.findByIdAndUpdate(productID, updateProduct)

        .then(() => {
            res.status(200).send({ status: "Product Updated Successfully !" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Database couldn't update properly", Product: update })
        })
})

/*****************************************************************************************/

// DELETE Function
//we use delete method to delete data from the database

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await Product.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({ status: "Product deletion successful !" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error in deletion" });
        })

})

/******************************************************************************************/
// RETRIEVE function (one at a time)

router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;

    const product = await Product.findById(userID)
        .then((Product) => {
            res.status(200).send({ Status: "Product fetched", Product: Product })
        }).catch((err) => {
            res.status(500).send({ Status: "Product fetching unsuccessfull !" });
        })
})


// do not forget to export the module after implementation
module.exports = router;

