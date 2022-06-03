const router= require("express").Router();
const {response}=require("express");
const {create}=require("../../Models/DS_model/customer");
let Customer= require("../../Models/DS_model/customer");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const Reviews = req.body.Reviews;
    const contactno = Number(req.body.contactno);
    
    const newCustomer = new Customer({
        name,
        email,
        Reviews,
        contactno,
        
    })

    newCustomer.save().then(()=>{
        res.json("Customer Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Customer.find().then((Customer)=>{
        res.json(Customer)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,email,Reviews,contactno}=req.body;

    const updateCustomer={
        name,
        email,
        Reviews,
        contactno,
        
    }
    const update = await Customer.findByIdAndUpdate(userId,updateCustomer).then(()=>{
        res.status(200).send({status: "user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
 
})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((errr)=>{
        console.log(errr.message);
        res.status(500).send({status: "Error with delete user"})
    })
    
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await Customer.findById(userId).then((Customer)=>{
        res.status(200).send({status: "User fetched",Customer})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;
