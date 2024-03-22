import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import Navbar from "../src/components/navbar/index"; // Import Navbar component
import Footer from "../src/components/footer/Footer"; // Import Footer component

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("sanskarEmail", JSON.stringify(email));
            localStorage.setItem("sanskarPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");
            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return (
        <>
            <Navbar /> {/* Include Navbar component */}
            <div style={{ padding: '20px' }}>
                {login ? (
                    <form onSubmit={handleFormSubmit}>
                        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Register</h3>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full Name"
                                name="name"
                                onChange={(event) => setName(event.target.value)}
                                style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                                style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(event) => setPassword(event.target.value)}
                                style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone No.</label>
                            <input
                                type="Phone"
                                className="form-control"
                                placeholder="Enter contact no"
                                onChange={(event) => setPhone(event.target.value)}
                                style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: 'white' }}>Choose your Profession</label>
                            <Form.Control
                                as="select"
                                onChange={(event) => setProfession(event.target.value)}
                                style={{ width: '100%', padding: '10px', marginBottom: '15px', color: '#000' }}
                            >
                                <option>Select</option>
                                <option>Artist</option>
                                <option>Photographer</option>
                                <option>Team Player</option>
                                <option>Full Stack</option>
                            </Form.Control>
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block" style={{ marginBottom: '15px', backgroundColor: '#343a40', borderColor: '#343a40' }}>
                            Register
                        </button>
                        <p onClick={handleClick} className="forgot-password text-right" style={{ cursor: 'pointer' }}>
                            Already registered? Log in
                        </p>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                I got it you are in hurry! But every Field is important!
                            </Alert>
                        )}
                    </form>
                ) : (
                    <Login />
                )}
            </div>
            <Footer /> {/* Include Footer component */}
        </>
    );
}

export default Registration;
