const router = require("express").Router();
const { response } = require("express");
const { create } = require("../../Models/MP_model/Customer_i");
let Customer_i = require("../../Models/MP_model/Customer");


router.route("/add").post((req,res)=>{

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const inquiry = req.body.inquiry;

    const newCustomer = new Customer_i({

        first_name,
        last_name,
        email,
        inquiry
    })

    newCustomer.save().then(()=>{
        res.json("inquiry Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Customer_i.find().then((Customer)=>{
        res.json(Customer)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {first_name,last_name,email,inquiry}=req.body;

    const updateCustomer = {
        first_name,
        last_name,
        email,
        inquiry
    }

    const update = await Customer.findByIdAndUpdate(userId,updateCustomer).then(()=>{
        res.status(200).send({status: "Inquiry Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});
    })  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Inquiry deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete inquiry",error: err.message});
    })
})
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;  
    const user = await Customer.findById(userId).then((customer)=>{
        res.status(200).send({status: "User fetched",customer})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;