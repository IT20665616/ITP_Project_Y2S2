const router=require("express").Router();
const res = require("express/lib/response");
const Payment = require("../../Models/SD_model/payment");
let cashDel=require("../../Models/SD_model/cashDel");//import cashDel.js model
const payment = require("../../Models/SD_model/payment");

//add crud operation routers


router.route("/add").post((req,res)=>{
    //create variables for name age gender in schema
    const c_name=req.body.c_name;
    const card_num=req.body.card_num;//**************** *
    const exp_month=req.body.exp_month;
    const exp_year=req.body.exp_year;
    const cvc_num=req.body.cvc_num; //req.body.gender==frontend eken ewana data request ekak widiht send wenne ithin e data ywne requwest eke body eka athule ynne
    const card_type=req.body.card_type;
    //create object using student model
    const newPayment=new Payment({
     //initialized properties
        c_name,
        card_num,
        exp_month,
        exp_year,
        cvc_num,
        card_type

    })
   //pass the data to database using our previous created newStudent object 
   //js promise 
   //pass data to database
   newPayment.save().then(()=>{

        res.json("payment added")
        //res.jason=sent respond in jason method

    }).catch((err)=>{
        console.log(err);
    })



})
//fetch all data from all users
//send response as a json format //1st method to send response
// backend url=== http://localhost:8070/student/display
router.route("/").get((_req,res)=>{
    Payment.find().then((payments)=>{//*
        res.json(payments)
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
    const{c_name,card_num,exp_month,exp_year,cvc_num,card_type}=req.body;//destructure method
const updatePayment={
    c_name,
    card_num,
    exp_month,
    exp_year,
    cvc_num,
    card_type
}
//check if user is available
//const update =await findByIdUpdate(userId,updatePayment)
const update =await Payment.findByIdAndUpdate(userId,updatePayment)
.then(()=>{
//2nd type to send response 
res.status(200).send({
    status:"payment updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.message});
})


})
//delete
router.route("/delete/:id").delete(async (req,res)=>{
let userId=req.params.id;

await Payment.findByIdAndDelete(userId)//*
.then(()=>{
    res.status(200).send({status:"user deleted"});
}).catch((err)=>{
    console.log("err.message");
    res.status(500).send({status:"error with delete user",error:err.message});
 })
})

//how to take data from one user
router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    await payment.findById(userId)//*
    .then((payment)=>{
        res.status(200).send({status:"user fetched", payment:payment})
    
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user"});
    })
})

module.exports=router;