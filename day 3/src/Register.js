import React from 'react'
import { useState } from 'react';
import './Register.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const a = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        try {
            await axios.post(`http://localhost:8080/users`, { name, email, age, password });
            toast.success("Registered successfully");
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Age', age);
            setTimeout(() => {
                a('/login');
            }, 2000);
        }
        catch (e) {
            toast.error("There is a error in registeration")
        }
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Age', age);
        a('/login');

    };
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>REGISTER</h1>
                <div style={{ display: 'flex', gap: '10px' }}>


                    <TextField
                        id="name"
                        label="NAME"
                        variant="outlined"
                        sx={{ width: '90%' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)} required
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>


                    <TextField
                        id="email"
                        label="EMAIL"
                        variant="outlined"
                        sx={{ width: '90%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>


                    <TextField
                        id="password"
                        label="PASSWORD"
                        variant="outlined"
                        sx={{ width: '90%' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>


                    <TextField
                        id="age"
                        label="AGE"
                        variant="outlined"
                        sx={{ width: '90%' }}
                        value={age}
                        onChange={(e) => setAge(e.target.value)} required
                    />
                </div>

                <button className="button-submit" type="submit">Register</button>


                <div className="flex-row">
                    <button className="btn google">Google</button>
                    <button className="btn apple">Apple</button>
                </div>

            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    )
}

export default Register
