const router = require("express").Router();
let wCustomer = require("../../Models/WB_model/wCustomer");

//(http://localhost:8050/wCustomer/add)
// Add new wholesale customer
router.route("/add").post((req, res) => {

    const Business_name = req.body.Business_name;
    const phone = Number(req.body.phone);
    const Email = req.body.Email;
    const Website = req.body.Website;
    const Shipping_address = req.body.Shipping_address;
    const Tranding_since = req.body.Tranding_since;
    const Type_of_Businss = req.body.Type_of_Businss;
    const Preferred_Payment = req.body.Preferred_Payment;
    const Business_Representative_name = req.body.Business_Representative_name;
    const Business_Representative_address = req.body.Business_Representative_address;
    const Business_Representative_Tel = Number(req.body.Business_Representative_Tel);
    const Business_Representative_Signature = req.body.Business_Representative_Signature;


    const NewWCustomer = new wCustomer({
        Business_name,
        phone,
        Email,
        Website,
        Shipping_address,
        Tranding_since,
        Type_of_Businss,
        Preferred_Payment,
        Business_Representative_name,
        Business_Representative_address,
        Business_Representative_Tel,
        Business_Representative_Signature
    })

    NewWCustomer.save().then(() => {
        res.json("New Wholesale customer added.")

    }).catch((err) => {
        console.log(err);
    })
})



//Retrieve the customer details
//calling url (http://localhost:8070/wCustomer)

router.route("/").get((req, res) => {

    wCustomer.find().then((wCustomer) => {
        res.json(wCustomer)
    }).catch((err) => {
        console.log(err)
    })

})

//Update wholesale Customer Details
//calling url (http://localhost:8070/wCustomer/update/)

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {
        Business_name,
        phone,
        Email,
        Shipping_address,
        Tranding_since,
        Type_of_Businss,
        Preferred_Payment,
        Business_Representative_name,
        Business_Representative_address,
        Business_Representative_Tel,
        Business_Representative_Signature
    } = req.body;

    const UpdateCustomer = {

        Business_name,
        phone,
        Email,
        Shipping_address,
        Tranding_since,
        Type_of_Businss,
        Preferred_Payment,
        Business_Representative_name,
        Business_Representative_address,
        Business_Representative_Tel,
        Business_Representative_Signature


    }
    const update = await wCustomer.findByIdAndUpdate(userId, UpdateCustomer)
        .then(() => {
            res.status(200).send({ status: "User Update" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with user update", wCustomer: update });
        })


    //Delete wholesale Customer

    router.route("/delete/:id").delete(async (req, res) => {
        let userId = req.params.id;

        await wCustomer.findByIdAndDelete(userId)
            .then(() => {
                res.status(200).send({ status: "Successfully Wholesale customer deleted." });

            }).catch((errr) => {
                console.log(err.message);
                res.status(500).send({ status: "Error with delete Customer" })
            })
    })
})


router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;

    const user = await wCustomer.findById(userID)
        .then((wCustomer) => {
            res.status(200).send({ status: "Product fetched", wCustomer : wCustomer })
        }).catch((err) => {
            res.status(500).send({ status: "Product fetching unsuccessfull !" });
        })
})




module.exports = router;