const router= require("express").Router();
const {response}=require("express");
const profile= require("../../Models/DS_model/profile");

const {create}=require("../../Models/DS_model/profile");


router.route("/add").post((req,res)=>{
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const email = req.body.email;
    const Pno = Number(req.body.Pno);
    const nic = req.body.nic;
    const dob = req.body.dob;
    const password = req.body.password;
    
    const newprofile = new profile({
        Fname,
        Lname, 
        email,
        Pno, 
        nic,
        dob,
        password,
        
    })
// validate

if (!email || !password )
return res.status(400).json({ msg: "Not all fields have been entered." });

if (password.length < 8)
return res
  .status(400)
  .json({ msg: "The password needs to be at least 8 characters long." });
  
    newprofile.save().then(()=>{
        res.json("profile Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    profile.find().then((profile)=>{
        res.json(profile)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{Lname,Fname,email,Pno,nic,dob}=req.body;

    const updateprofile={
        Fname,
        Lname, 
        email,
        Pno, 
        nic,
        dob,
       
    }
    const update = await profile.findByIdAndUpdate(userId,updateprofile).then(()=>{
        res.status(200).send({status: "profile updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
 
})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await profile.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Admin deleted"});
    }).catch((errr)=>{
        console.log(errr.message);
        res.status(500).send({status: "Error with delete Admin"})
    })
    
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await profile.findById(userId).then((profile)=>{
        res.status(200).send({status: "Admin fetched",profile})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get Admin",error: err.message});
    })
})
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // validate
      if (!email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered." });
  
      const profile = await profile.findOne({ email: email });
      if (!profile)
        return res
          .status(400)
          .json({ msg: "No account with this email has been registered." });
  
      const isMatch = await bcrypt.compare(password, profile.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
  
      const token = jwt.sign({ id: profile._id }, process.env.JWT_SECRET);
      console.log("token",token);
      res.json({
        token,
        profile: {
          id: profile._id,
          email: profile.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
   
module.exports = router;
