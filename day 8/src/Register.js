import React, { useState } from 'react';
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

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/user/register', {
                email: email,
                name,
                age: parseInt(age),  // Ensure age is sent as an integer
                password
            });

            if (response.status === 201) {
                toast.success("Registered successfully");
                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Password:', password);
                console.log('Age:', age);

                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                toast.error("User already exists");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            toast.error("There was an error in registration");
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1 style={{ color: 'black' }}>REGISTER</h1>
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
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}

export default Register;
