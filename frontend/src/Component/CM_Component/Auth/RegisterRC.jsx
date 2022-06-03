import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../Auth/context/userContext";
import ErrorNotice from "../misc/ErrorNotice";

function RegisterRC() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const newUser = { email, password, passwordCheck, firstName, lastName, gender, address, phone };
            await axios.post("http://localhost:8070/user/register", newUser);
            const loginResponse = await axios.post("http://localhost:8070/user/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            alert("Registration successful");
            localStorage.setItem("auth-token", loginResponse.data.token);
            history("/login");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
            alert(err.message);
        }

    };

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <br /><br />
                        <img
                            src={require("../../HP_Component/images/plogo.png")}
                            width="130px"
                            height="130px"
                        ></img><br/><br/>
                        <h1 className="display-4 fw-bolder">Welcome...</h1><br /><br />
                        <p className="lead text-center">Already have an account ?</p>
                        <Link
                            to="/loginRC"
                            className="btn btn-outline-light rounded-pill pb-2 w-50"
                        >
                            Login
                        </Link>
                        <br /><br />
                    </div>
                    <div className="col-md-6 p-5 text-center">
                        {/* <img src={require("../../HP_Component/images/logo.jpeg")} width="150px" height="150px" alt=""></img><br /><br /> */}
                        <h1 className="display-6 fw-bolder mb-5 text-center">Register</h1>
                        {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                        <form onSubmit={submit}>
                            <div className="mb-3">

                                <label>First Name :</label>
                                <input type="text" className="form-control" id="first-name" onChange={e => setFirstName(e.target.value)} />

                                <label>Last name :</label>
                                <input type="text" className="form-control" id="last-name" onChange={e => setLastName(e.target.value)} />

                                <label>Email: </label>
                                <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} />

                                <label>Password: </label>
                                <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />

                                <label>Confirm Password: </label>
                                <input type="password" className="form-control" id="passwordCheck" onChange={e => setPasswordCheck(e.target.value)} />

                                <label>Gender :</label>
                                <input type="text" className="form-control" id="gender" onChange={e => setGender(e.target.value)} />

                                <label>Address :</label>
                                <input type="text" className="form-control" id="address" onChange={e => setAddress(e.target.value)} />

                                <label>Phone :</label>
                                <input type="text" className="form-control" id="phone" onChange={e => setPhone(e.target.value)} />

                                <br /><br />
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterRC;