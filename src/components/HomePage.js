import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import UpdateDetails from "./UpdateDetails";
import './Home.css';
import Card from './UI/Card';
import { logout } from "../features/userSlice";
//import { useNavigate } from "react-router-dom";

function HomePage() {
  const [update, setUpdate] = useState(false);

  const currentUser = useSelector(state => state.user.currentUser);

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  //const navigate = useNavigate();


  function updateHandler(event) {
    event.preventDefault();

    setUpdate(!update);
  }

  return (
    <Fragment>
      <div className="main-header">User Details
        {isLoggedIn ? (
          <button
            onClick={() => {
              dispatch(logout());
              //navigate("/login");
            }}
          >Logout</button>
        ) : (
          <Login />
        )}
      </div>


      <Card>
        <div className="details">
            <div key={currentUser.id} className="details-sec">
              <p>UserName: <b>{currentUser.userName}</b></p>
              <hr />
              <p>Name: <b>{currentUser.name}</b></p>
              <hr />
              <p>Email Address: <b>{currentUser.email}</b></p>
              <hr />
              <p>Phone Number: <b>{currentUser.phone}</b></p>
              <hr />
              <p>Address: <b>{currentUser.address}</b></p>
            </div>
        </div>
      </Card>

      <section className="update" >
        {isLoggedIn ? (
          <div className="update-btn">
            <button onClick={updateHandler}>Update</button></div>
        ) : <Login />}

        {update && <UpdateDetails />}
      </section>

    </Fragment>
  );
}

export default HomePage;