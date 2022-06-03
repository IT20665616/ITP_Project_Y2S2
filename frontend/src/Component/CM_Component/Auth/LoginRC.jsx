import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./context/userContext";
import ErrorNotice from "../misc/ErrorNotice";

function LoginRC() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginResponse = await axios.post("http://localhost:8070/user/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            alert("Welcome to POCO CASA");
            localStorage.setItem("auth-token", loginResponse.data.token);
            localStorage.setItem("userId", loginResponse.data.user.id);
            history("/content");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }

    };

    return (
        <div className="container shadow my-5">
            <div className="row justify-content-end">
                <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                    <br/><br/>
                    <h1 className="display-4 fw-bolder">Hello there..</h1>
                    <br/><br/>
                    <p className="mb-4">Don't have an account yet ?</p>
                    <Link
                        to="/"
                        className="btn btn-outline-light rounded-pill pb-2 w-50"
                    >
                        Register
                    </Link>
                    <br/><br/>
                </div>
                <div className="col-md-6 p-5">
                <div className="mb-3 text-center">
                            <img

                                src={require("../../HP_Component/images/logo.jpeg")}
                                width="110px"
                                height="100px"
                            ></img>
                        </div>
                        <br/>
                    {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                    <br/>
                    <form onSubmit={submit}>
                        
                            <label>Email: </label>
                            <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} />
                        
                            <label>Password: </label>
                            <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />
                            <br/><br/>
                            <button type="submit" value="Login" className="btn btn-primary">LOGIN</button>
    
                        </form>
                        </div>
                </div>
        </div>
    );
}

export default LoginRC;