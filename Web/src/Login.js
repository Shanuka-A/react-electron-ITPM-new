import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Mainpg from "./Mainpg";
import Home from "../src/views/home/Home";
import Navbar from "../src/components/navbar/index";
import Footer from "../src/components/footer/Footer";

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("sanskarPassword").replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(false);
      setFlag(false);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={emaillog}
              onChange={(event) => setEmaillog(event.target.value)}
              style={{ width: '100%', padding: '10px' }} // Inline CSS for input element
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={passwordlog}
              onChange={(event) => setPasswordlog(event.target.value)}
              style={{ width: '100%', padding: '10px' }} // Inline CSS for input element
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}

export default Login;
