import React, { useState } from 'react';
import './Login.css';
import Home from './Home';
import TextField from '@mui/material/TextField';
function Authentication() {
    const [logstatus, setLogstatus] = useState(true); // Ensure login page is displayed first
    const [loggedin, setLoggedin] = useState(false);
    const [lemail, setlEmail] = useState('');
    const [lpassword, setlPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Date of Birth:', dob);
        setLogstatus(true);
    };

    const lhandleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', lemail);
        console.log('Password:', lpassword);
        setLoggedin(true);
    };

    function Login() {
        if (loggedin === false) {
            return (
                <div>
                    <form className="form" onSubmit={lhandleSubmit}>
                        <h1>LOGIN</h1>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <svg height="60" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g id="Layer_3" data-name="Layer 3">
                                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                                </g>
                            </svg>

                            <TextField id="outlined-basic" label="EMAIL" variant="outlined" sx={{ width: '80%' }} />
                        </div>


                        <div style={{ display: 'flex', gap: '10px' }}>
                            <svg height="70" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                            </svg>
                            <TextField id="outlined-basic" label="PASSWORD" variant="outlined" sx={{ width: '80%' }} />

                        </div>

                        <div className="flex-row">
                            <div>
                                <input type="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe">Remember me </label>
                            </div>
                            <span className="span">Forgot password?</span>
                        </div>
                        <button className="button-submit">Sign In</button>
                        <p className="p">Don't have an account? <span className="span" onClick={() => setLogstatus(false)}>Sign Up</span></p>
                        <p className="p line">Or With</p>

                        <div className="flex-row">
                            <button className="btn google">Google</button>
                            <button className="btn apple">Apple</button>
                        </div>
                    </form>
                </div>
            );
        }
        else {
            return (
                <>
                    <Home />
                </>
            );
        }
    }

    function Register() {
        return (
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex-column">
                        <label>Name</label>
                    </div>
                    <div >
                        <input type="text" className="lemail" placeholder="Enter your Name" value={name}
                            onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="flex-column">
                        <label>Email</label>
                    </div>
                    <div >
                        <input type="email" className="lemail" placeholder="Enter your Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="flex-column">
                        <label>Password</label>
                    </div>
                    <div >
                        <input type="password" className="lemail" placeholder="Enter your Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="flex-column">
                        <label>Date of Birth</label>
                    </div>
                    <div >
                        <input type="date" className="lemail" value={dob} onChange={(e) => setDob(e.target.value)} required />
                    </div>

                    <button className="button-submit" type="submit">Register</button>
                    <p className="p"><b>Sign Up</b></p>
                    <p className="p line"><b>With</b></p>

                    <div className="flex-row">
                        <button className="btn google">Google</button>
                        <button className="btn apple">Apple</button>
                    </div>

                </form>
            </div>
        );
    }

    return (
        <div>
            {logstatus ? <Login /> : <Register />}
        </div>
    );
}

export default Authentication;
