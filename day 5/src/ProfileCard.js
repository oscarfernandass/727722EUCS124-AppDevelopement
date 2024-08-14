import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Avatar, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from './AuthContext';
import axios from 'axios';

const ProfileCard = ({ onClose }) => {
    const { user, logout } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        document.title = "Fashion Forward";
        const fetchUserData = async () => {
            if (user != null) {
                try {
                    const response = await axios.get(`http://localhost:8080/users?email=${user.email}`);
                    if (response.data.length > 0) {
                        const user = response.data[0];
                        setUserData({
                            name: user.name,
                            email: user.email,
                            age: user.age,
                            isAdmin: false,
                        });
                    } else {
                        console.log("No email exists");
                    }
                } catch (e) {
                    console.error("Error fetching user data", e);
                }
            }
        };
        fetchUserData();
    }, [user]);

    return (
        <Card
            sx={{
                width: 400,
                height: 450,
                margin: '20px auto',
                textAlign: 'center',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '16px',
                padding: '20px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 4,
                overflow: 'hidden',
            }}
        >
            <CardContent>
                <Avatar
                    sx={{
                        margin: '0 auto 10px',
                        backgroundColor: '#000',
                        width: 80,
                        height: 80,
                    }}
                >
                    <PersonIcon sx={{ fontSize: 50, color: '#fff' }} />
                </Avatar>

                <Grid container spacing={1} sx={{ textAlign: 'left' }}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ color: '#000', fontWeight: 'bold' }}>
                            Name:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#555', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {userData ? userData.name : "No Name"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ color: '#000', fontWeight: 'bold' }}>
                            Email:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#555', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {userData ? userData.email : "No Email"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" sx={{ color: '#000', fontWeight: 'bold' }}>
                            Age:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#555' }}>
                            {userData ? userData.age : "N/A"}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    sx={{
                        margin: '0 auto',
                        backgroundColor: '#000',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                    }}
                    onClick={onClose}
                >
                    Close
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProfileCard;
