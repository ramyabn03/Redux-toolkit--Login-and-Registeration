import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { login, newregister } from "../features/userSlice";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(login({ userName, password }));
  };

  return (
    <Fragment>
      <div className="main-header">Login</div>
      <form className="display" onSubmit={(e) => loginHandler(e)}>
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <section className="register">
        <p>
          New User? To Register Click Below!</p>
          <button
            onClick={() => {
              dispatch(newregister());
            }}
          >
            Register
          </button>
      </section>
    </Fragment>
  );
}

export default Login;
