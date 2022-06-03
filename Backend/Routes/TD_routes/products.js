const router= require("express").Router();
const {response}=require("express");
const {create}=require("../../Models/TD_model/products");
let products = require("../../Models/TD_model/products");

router.route("/add").post((req,res) =>{
    
    const {productCode,productName,description,quantity,damagedQuantity}=req.body;

const newProduct = new products({
    productCode,
    productName,
    description,
    quantity,
    damagedQuantity
})
newProduct.save().then(()=>{
    res.json("Product Added")   
}).catch((err)=>{
    console.log(err);
})

})

router.route("/").get((req,res)=>{
    products.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/update/:id").put(async(req,res)=>{
    let productId = req.params.id;
    const {productCode,productName,description,quantity,damagedQuantity}=req.body;

    const updateProduct ={
        productCode,
        productName,
        description,
        quantity,
        damagedQuantity
    }
    const update = await products.findByIdAndUpdate(productId,updateProduct).then(()=>{

    res.status(200).send({status:"Product updated"});
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",product:update});

})

})

router.route("/delete/:id").delete(async(req,res)=>{
    let productId = req.params.id;
    
   await products.findByIdAndDelete(productId).then(()=>{

    res.status(200).send({status:"Product Deleted"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with deleting data",error:err.message});

})

})

router.route("/get/:id").get(async(req,res)=>{
    let productId=req.params.id;
    const product = await products.findById(productId).then((product)=>{
        res.status(200).send({status:"Product fetched", product:product})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status:"Error with get details",error:err.message});
    })

})


module.exports=router;