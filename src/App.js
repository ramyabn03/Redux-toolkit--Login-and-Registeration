import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import "./App.css";
import { Fragment } from "react";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  const isRegistered = useSelector((state) => state.user.isRegistered);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Fragment>
      {/* <BrowserRouter>
        <Routes>
          {!isRegistered && (
            <Route path="/*" element={<Registration />}></Route>
          )}
          {isRegistered && !isLoggedIn && (
            <Route path="/login" element={<Login />}></Route>
          )}
          {isRegistered && isLoggedIn && (
            <Route path="/Home-userprofile" element={<HomePage />}></Route>
          )}
        </Routes>
      </BrowserRouter> */}


      {!isRegistered && <Registration />}
        {isRegistered && !isLoggedIn && <Login />}
        {isRegistered && isLoggedIn && <HomePage />}
    </Fragment>
  );
}

export default App;
