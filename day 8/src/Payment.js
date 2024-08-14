import React from 'react';
import {
    Container,
    TextField,
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Grid,
} from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const Payment = () => {
    const location = useLocation();
    const { totalCost } = location.state || { totalCost: 0 };

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = () => {
        // Basic validation
        if (!cardNumber || !expiryDate || !cvv || !name) {
            toast.error('Please fill out all fields');
            return;
        }

        setIsProcessing(true);

        // Mock payment processing
        setTimeout(() => {
            setIsProcessing(false);
            toast.success('Payment successful');
        }, 2000);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                Payment
            </Typography>
            <Card>
                <CardContent>
                    <Box component="form" noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Card Number"
                                    variant="outlined"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Expiry Date (MM/YY)"
                                    variant="outlined"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="CVV"
                                    variant="outlined"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name on Card"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Total Cost: ${totalCost.toFixed(2)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handlePayment}
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? 'Processing...' : 'Pay Now'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
            <Toaster position="top-right" reverseOrder={false} />
        </Container>
    );
};

export default Payment;
