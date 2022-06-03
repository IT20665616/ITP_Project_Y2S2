const express=require('express');
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors = require("cors");

const dotenv=require("dotenv");
const app=express();
require("dotenv").config();

//assign available port if our default port-8070 is not available
const PORT = process.env.PORT || 8070;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
//app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    //useCreateIndex: "true",
    useNewUrlParser: "true",
    //useUnifiedTopology: "true",
    //useFindAndModify: "false"
});




//create a connection

//create a connection
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Mongodb Connection Success!");

});


//product routes

const productRouter = require("./Routes/HP_routes/Products");
app.use("/Product", productRouter);

//.... comment your route and add it here 

//payment route---SD
const paymentRouter=require("./Routes/SD_routes/payments");
app.use("/payment",paymentRouter);


//CASH ON DELIVERY ROUTE---SD
const cashdelroute=require("./Routes/SD_routes/cashDels");
app.use("/cashDel",cashdelroute);

//complain route
const customerRouter = require("./Routes/MP_routes/customer");
app.use("/customer",customerRouter);

//inquiry router
const customer_iRouter = require("./Routes/MP_routes/customer_i");
app.use("/customer_i",customer_iRouter);
//open the established connection once


//admin route
const CustomerRouter = require("./Routes/DS_routes/customer.js");
app.use("/customer",CustomerRouter);

// admin profile rote
const profileRoutes= require("./Routes/DS_routes/Profile.js");
app.use("/Adminprofile", profileRoutes);

const materialsRouter = require("./Routes/TD_routes/materials.js");
app.use("/materials",materialsRouter);

const productsRouter = require("./Routes/TD_routes/products.js");
app.use("/products",productsRouter);
//check weather the connection is running on the given port
const userRoute=require("./Routes/CM_routes/user.route");
app.use("/user",userRoute);

const cartRoute=require("./Routes/CM_routes/cart.route");
app.use("/cart",cartRoute);

const wishlistRoute=require("./Routes/CM_routes/wishlist.route");
app.use("/wishlist",wishlistRoute);

app.listen (PORT, () => {
    console.log(`Server is up and running on th port: ${PORT}`)
})


//Whole sale customer Register
const wCustomerRouter = require("./Routes/WB_routes/wCustomers");
app.use("/wCustomer",wCustomerRouter);

//Whole sale customer Log in
const CreateWCusRouter = require("./Routes/WB_routes/CreateWCus");
app.use("/CreateWCus",CreateWCusRouter);

