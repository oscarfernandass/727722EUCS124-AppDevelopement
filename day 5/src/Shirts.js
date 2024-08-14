import React, { useContext, useState, useEffect } from 'react';

import { Grid, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useCart } from './CartContext';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Shirt = ({ category }) => {
  const { addToCart } = useCart();
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/shirts`);
        setShirts(response.data);
      } catch (e) {
        console.log("Error in fetching shirts:", e);
      }
    };
    fetchShirts();
  }, []);

  const handleAddToCart = (shirt) => {
    if (addToCart) {
      toast.success(`${shirt.name} is added to the cart`);
      addToCart(shirt, category);
    } else {
      console.error("addToCart is not defined");
    }
  };

  if (!shirts.length) {
    return (
      <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        No shirts available
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        Shirt Collection
      </Typography>
      <Grid container spacing={2}>
        {shirts.map((shirt, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={require(`./assets/${shirt.imageUrl}`)}
                alt={shirt.name}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    {shirt.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {shirt.description}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {shirt.price}
                  </Typography>
                </div>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(shirt)} sx={{ mt: 2 }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};

export default Shirt;
