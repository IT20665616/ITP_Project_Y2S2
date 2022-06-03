const router = require("express").Router();
let CreateWCus = require("../../Models/WB_model/CreateWCus");

//(http://localhost:8070/CreateWCus/create)
//Create Customer Account

router.route("/create").post((req,res)=>{
    const firstName=req.body.firstName;
    const LastName= req.body.LastName;
    const Email = req.body.Email;
    const Username = req.body.Username;
    const CreatePW = req.body.CreatePW;
    const ConfirmPW= req.body.ConfirmPW;

    const CreateNEwWcus = new CreateWCus({
        firstName,
        LastName,
        Email,
        Username,
        CreatePW,
        ConfirmPW
    })
    CreateNEwWcus.save().then(()=>{
        res.json("create customer account scuccefully")
    }).catch((err)=>{
        console.log(err);
    })
})
//Retrieve the customer details
//calling url (http://localhost:8050/CreateWCus)

router.route("/").get((req,res)=>{
    CreateWCus.find().then((CreateWCus)=>{
        res.json(CreateWCus)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update wholesale Customer Details
//calling url (http://localhost:8050/CreateWCus/update/)

router.route("/Cusupdate/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{
        firstName,
        LastName,
        Email,
        Username,
        CreatePW,
        ConfirmPW
        
    }=req.body;

    const UpdateCreateCus={
        firstName,
        LastName,
        Email,
        Username,
        CreatePW,
        ConfirmPW

    }
    const update = await CreateWCus.findByIdAndUpdate(userId,UpdateCreateCus).then(()=>{
        res.status(200).send({status:"Customer Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with user update" , error : err.message});
        })
})

router.route("/Cusdelete/:id").delete(async(req, res) =>{
    let userId = req.params.id;

    await CreateWCus.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status :"Successfully Wholesale customer deleted."});

    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete Customer", error:err.message})
    })
})

module.exports = router;