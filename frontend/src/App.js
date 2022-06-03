import {BrowserRouter,Routes, Route } from "react-router-dom";

//hansi's imports
import EditContent from "./Component/HP_Component/EditContent";
import AboutUs from "./Component/HP_Component/AboutUs";
import ContactUs from "./Component/HP_Component/ContactUs";
import Products from "./Component/HP_Component/Products";
import Content from "./Component/HP_Component/Content";
import ProductCreate from "./Component/HP_Component/ProductCreate"
import ProductUpdate from "./Component/HP_Component/ProductUpdate"

//matheesha's imports
import CustomerCare from "./Component/MP_Component/CustomerCare";
import AddComplaint from "./Component/MP_Component/AddComplaint";
import AddInquiry from "./Component/MP_Component/AddInquiry";
import AllComplaints from "./Component/MP_Component/AllComplaints";
import AllInquiries from "./Component/MP_Component/AllInquiries";
import logo from '../../frontend/src/';
import './App.css';

//waruni's imports
import CreateWCus from "./Component/WB_Component/CreateWCus";
import EditWcus from "./Component/WB_Component/EditWcus";
import FirstView from "./Component/WB_Component/FirstView";
import RegisterWcustomer from "./Component/WB_Component/RegisterWcustomer";
import AllWcustomers from "./Component/WB_Component/AllWcustomers";

// dasunika's imports
import Login from "./Component/DS_Component/Login";
import EditProfile from "./Component/DS_Component/EditProfile";
import Navbar from './Component/DS_Component/Navbar';
import Home from './Component/DS_Component/Home';
import About from './Component/DS_Component/About';
import Reviews from './Component/DS_Component/Reviews';
import ReviewUs from './Component/DS_Component/ReviewUS';
import Contact from './Component/DS_Component/Contact';
import Footer from './Component/DS_Component/Footer';
import Rate from './Component/DS_Component/rate';
import Register from './Component/DS_Component/Register';
import Dashboard from './Component/DS_Component/Dashboard';
import Logout from './Component/DS_Component/Logout';
import Adminprofile from './Component/DS_Component/AdminProfile';
import FetchReviews from './Component/DS_Component/FetchReviews';
import FileUploard from './Component/DS_Component/FileUploard';
import Header from "./Component/DS_Component/Navbar";
import AdminProductPage from "./Component/HP_Component/AdminProductPage";
//import Rate from './components/Rate';

//sahan's imports
import PayementForm from "./Component/SD_component/PaymentForm";
import PaymentHome from "./Component/SD_component/PaymentHome";
import PaymentUpdate from "./Component/SD_component/PaymentUpdate";
import EditPayment from "./Component/SD_component/EditPayment";
import CashdeltUpdate from "./Component/SD_component/CashdelUpdate";
import HomeWC from "./Component/WB_Component/HomeWC";

// dilshan's imports
import AddMaterial from './Component/TD_Component/AddMaterial';
import AddProduct from './Component/TD_Component/AddProduct';
import FetchMaterial from './Component/TD_Component/FetchMaterial';
import UpdateMaterials from './Component/TD_Component/UpdateMaterials';
import UpdateProducts from './Component/TD_Component/UpdateProducts';
import FetchProduct from './Component/TD_Component/FetchProduct';

//Malshan's imports
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserContext from './Component/CM_Component/Auth/context/userContext';
import RegisterRC from "./Component/CM_Component/Auth/RegisterRC";
import LoginRC from "./Component/CM_Component/Auth/LoginRC";
import UserProfileRC from "./Component/CM_Component/Auth/UserProfileRC";
import Cart from "./Component/CM_Component/Cart/Cart";
import Wishlist from "./Component/CM_Component/wishlist/Wishlist";
import Initial from "./Component/CM_Component/Initial";


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:8070/user/tokenIsValid', null, { headers: { "x-auth-token": token } });
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:8070/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/content" element={<Content />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/editcontent/:id" element={<EditContent />} />

      {/* Matheesha's navigations */}
      <Route path="/customercare" element={<CustomerCare />} />
      <Route path="/addc" element={<AddComplaint />} />
      <Route path="/addi" element={<AddInquiry />} />
      <Route path="/allc" element={<AllComplaints />} />
      <Route path="/alli" element={<AllInquiries />} />

      {/* Dasunika's navigations */}
      <Route path="/producthome" element={<AdminProductPage />} />
      <Route path="/productcreate" element={<ProductCreate />} />
      <Route path="/productupdate" element={<ProductUpdate />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Adminprofile" element={<Adminprofile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/EditProfile/:id" element={<EditProfile />} />
      <Route path="/FileUploard" element={<FileUploard />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/ReviewUS" element={<ReviewUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rate" element={<Rate />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/FetchReviews" element={<FetchReviews />} />
      <Route path="/logout" element={<Logout />} />

      {/* sahan aiya's navigations */}
      <Route path="/payment" element={<PaymentHome />} />
      <Route path="/card" element={<PayementForm />} />
      <Route path="/update" element={<PaymentUpdate />} />
      <Route path="/edit" element={<EditPayment />} />
      <Route path="/cashupdate" element={<CashdeltUpdate />} />

      {/* waruni's navigation */}
      <Route path="/wholesale" element={<FirstView />} />
      <Route path="/registerWC" element={<RegisterWcustomer />} />
      <Route path="/loginWC" element={<CreateWCus />} />
      <Route path="/homeWC" element={<HomeWC />} />
      <Route path="/editWcus/:id" element={<EditWcus />} />
      <Route path="/updateWC" element={<AllWcustomers />} />

      {/* dilshan's navigations */}
      <Route path="/stock/material/" element={<FetchMaterial />} />
      <Route path="/stock/product/" element={<FetchProduct />} />
      <Route path="/stock/material/add" element={<AddMaterial />} />
      <Route path="/stock/product/add" element={<AddProduct />} />
      <Route path="/stock/material/update/:id" element={<UpdateMaterials />} />
      <Route path="/stock/product/update/:id" element={<UpdateProducts />} />
      </Routes>

      {/* malshan's navigations */}
      <UserContext.Provider value={{ userData, setUserData }}>

      <Routes>
        {/* <Route path="/init" element={<Initial/>} /> */}
        <Route path="/" element={<RegisterRC />} />
        <Route path="/loginRC" element={<LoginRC />} />
        <Route path="/profileRC" element={<UserProfileRC />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      </UserContext.Provider>
    </BrowserRouter>

  );
}


export default App;
