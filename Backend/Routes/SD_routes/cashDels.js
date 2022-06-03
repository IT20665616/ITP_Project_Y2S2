const router=require("express").Router();
const res = require("express/lib/response");
const { findByIdAndUpdate } = require("../../Models/SD_model/payment");
let cashDel=require("../../Models/SD_model/cashDel");//import cashDel.js model

//add crud operation routers



router.route("/cdadd").post((req,res)=>{
    //create variables for  schema
    const  d_cus=req.body. d_cus;
    const dc_phone=req.body.dc_phone;//**************** *
    const inputAddress=req.body.inputAddress;
    const inputAddress2=req.body.inputAddress2;
    const inputCity=req.body.inputCity; //req.body.gender==frontend eken ewana data request ekak widiht send wenne ithin e data ywne requwest eke body eka athule ynne
    const inputState=req.body.inputState; 
    const inputZip=req.body.inputZip; 
    //create object using cashDel model
    const newcashDel=new cashDel({
     //initialized properties
        d_cus,
        dc_phone,
        inputAddress,
        inputAddress2,
        inputCity,
        inputState,
        inputZip

    })
   //pass the data to database using our previous created newStudent object 
   //js promise 
   //pass data to database
   newcashDel.save().then(()=>{

        res.json("delivery details added")
        //res.jason=sent respond in jason method

    }).catch((err)=>{
        console.log(err);
        console.log("error of adding delivary details");
    })



})
//fetch all data from all users
//send response as a json format //1st method to send response
// backend url=== http://localhost:8070/student/display
router.route("/cd").get((_req,res)=>{
   cashDel.find().then((cashDels)=>{//*
        res.json(cashDels)
    }).catch((err)=>{
        console.log(err)
    })
})
//2.24
//update part
//in user update we use put method.also we can use post method
//async==wait for promise from the function/await=wait to help async
router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;//user id is a similer to primary key
    const{ d_cus,dc_phone,inputAddress,inputAddress2,inputCity,inputState,inputZip}=req.body;//destructure method
const updatecashDel={
    d_cus,
    dc_phone,
    inputAddress,
    inputAddress2,
    inputCity,
    inputState,
    inputZip
}
//check if user is available
//const update =await findByIdUpdate(userId,updatePayment)
const update =await cashDel.findByIdAndUpdate(userId,updatecashDel)
.then(()=>{
//2nd type to send response 
res.status(200).send({
    status:"cash on delivery details  updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.message});
})


})
//delete
router.route("/delete/:id").delete(async (req,res)=>{
let userId=req.params.id;

await cashDel.findByIdAndDelete(userId)//*
.then(()=>{
    res.status(200).send({status:"cash on delivery details deleted"});
}).catch((err)=>{
    console.log("err.message");
    res.status(500).send({status:"error with delete user",error:err.message});
 })
})

//how to take data from one user
router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    await cashDel.findById(userId)//*
    .then((cashDel)=>{
        res.status(200).send({status:"user fetched",cashDel:cashDel})
    
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user"});
    })
})

module.exports=router;