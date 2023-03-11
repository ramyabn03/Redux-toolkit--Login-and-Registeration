import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { update } from "../features/userSlice";
import './UpdateDetails.css';
import './layout.css';

function UpdateDetails() {

    const currentUser = useSelector(state => state.user.currentUser);

    const [user, setUser] = useState(currentUser)

    const dispatch = useDispatch();

    const handleFieldChange = event => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    function updateHandler(e) {
        e.preventDefault();

        dispatch(update(user));
    };

    return (
        <Fragment>

            <form onSubmit={(e) => updateHandler(e)} >
                <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleFieldChange} />
                <input type="text" placeholder="UserName" name="userName" value={user.userName} onChange={handleFieldChange} />
                <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleFieldChange} />
                <input type="text" placeholder="Password" name="password" value={user.password} onChange={handleFieldChange} />
                <input type="phone" placeholder="Phone Number" name="phone" value={user.phone} onChange={handleFieldChange} />
                <input type="text" placeholder="Address" name="address" value={user.address} onChange={handleFieldChange} />
                <div className="save-btn">
                    <button>Save</button> </div>
            </form>
        </Fragment>
    );
}

export default UpdateDetails;