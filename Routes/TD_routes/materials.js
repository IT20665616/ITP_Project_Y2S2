const router= require("express").Router();
const {response}=require("express");
const {create}=require("../../Models/TD_model/materials");
let materials = require("../../Models/TD_model/materials");

router.route("/add").post((req,res) =>{
    
    const {materialCode,materialName,description,quantity,reOrderingLevel,reOrderingQuantity,damagedQuantity}=req.body;

const newMaterial = new materials({
    materialCode,
    materialName,
    description,
    quantity,
    reOrderingLevel,
    reOrderingQuantity,
    damagedQuantity
})
newMaterial.save().then(()=>{
    res.json("Material Details Added")   
}).catch((err)=>{
    console.log(err);
})

})

router.route("/").get((req,res)=>{
    materials.find().then((materials)=>{
        res.json(materials)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/update/:id").put(async(req,res)=>{
    let materialId = req.params.id;
    const {materialCode,materialName,description,quantity,reOrderingLevel,reOrderingQuantity,damagedQuantity}=req.body;

    const updateMaterial ={
        materialCode,
        materialName,
        description,
        quantity,
        reOrderingLevel,
        reOrderingQuantity,
        damagedQuantity
    }
    const update = await materials.findByIdAndUpdate(materialId,updateMaterial).then(()=>{

    res.status(200).send({status:"Material updated"});
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",material:update});

})

})

router.route("/delete/:id").delete(async(req,res)=>{
    let materialId = req.params.id;
    
   await materials.findByIdAndDelete(materialId).then(()=>{

    res.status(200).send({status:"Material Details Deleted"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with deleting data",error:err.message});

})

})

router.route("/get/:id").get(async(req,res)=>{
    let materialId=req.params.id;
    const material = await materials.findById(materialId).then((material)=>{
        res.status(200).send({status:"material fetched", material:material})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status:"Error with get details",error:err.message});
    })

})


module.exports=router;