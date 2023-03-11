import React, { Fragment, useState } from "react";
import { useDispatch } from 'react-redux';

//import { useNavigate } from "react-router-dom";
import { register } from "../features/userSlice";
import './layout.css';


function Registration() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        userName: "",
        password: "",
        address: ""
    })

    //const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFieldChange = event => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]:value
        })
    }

    function registerHandler(e) {
        e.preventDefault();

        dispatch(
            register(user)
        );
        //navigate("/login");
    };

    return (
        <Fragment>
            <div className="main-header">Registration</div>
            <form className="display" onSubmit={(e) => registerHandler(e)}>
                <input type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleFieldChange} required/>
                <input type="text"
                    name="userName"
                    placeholder="UserName"
                    value={user.userName}
                    onChange={handleFieldChange} required/>
                <input type="email"
                    name="email"
                    placeholder="Email address"
                    value={user.email}
                    onChange={handleFieldChange} />
                <input type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleFieldChange} required/>
                <input type="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={user.phone}
                    onChange={handleFieldChange} />
                <input type="text"
                    name="address"
                    placeholder="Address"
                    value={user.address}
                    onChange={handleFieldChange} />

                <button>Register</button>
            </form>
        </Fragment>
    );
}

export default Registration;