import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import './Login.css';
import { useAuth } from './AuthContext';
function Login({ onLogin }) {
    const [lemail, setlEmail] = useState('');
    const [lpassword, setlPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const lhandleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        try {
            const response = await axios.get(`http://localhost:8080/users?email=${lemail}&password=${lpassword}`);
            if (response.data.length > 0) {
                toast.success("Logged in successful");
                const userData = { email: lemail };
                login(userData);
                console.log('Email:', lemail);
                console.log('Password:', lpassword);
                onLogin();
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 2000);
            }
            else {
                toast.error("wrong credentials");
            }
        }
        catch (e) {
            toast.error("Wrong credentials");
        }

    };

    return (
        <div>
            <form className="form" onSubmit={lhandleSubmit}>
                <h1 style={{ fontFamily: '', color: 'black' }}>LOGIN</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <svg height="60" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                        </g>
                    </svg>
                    <TextField
                        id="email"
                        label="EMAIL"
                        variant="outlined"
                        sx={{ width: '80%' }}
                        value={lemail}
                        onChange={(e) => setlEmail(e.target.value)} required
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <svg height="70" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                    </svg>
                    <TextField
                        id="password"
                        label="PASSWORD"
                        variant="outlined"
                        sx={{ width: '80%' }}
                        type="password"
                        value={lpassword}
                        onChange={(e) => setlPassword(e.target.value)} required
                    />
                </div>

                <div className="flex-row">
                    <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <span className="span">Forgot password?</span>
                </div>
                <button className="button-submit" type="submit">Sign In</button>
                <p className="p">Don't have an account? <span className="span" onClick={() => navigate('/register')}>Sign Up</span></p>
                <p className="p line">Or With</p>

                <div className="flex-row">
                    <button className="btn google">Google</button>
                    <button className="btn apple" onClick={() => navigate('/adminlogin')}>Admin login</button>
                </div>
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
}

export default Login;