import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useCart } from './CartContext';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

const Trousers = ({ category }) => {
  const { addToCart } = useCart();
  const [trousers, setTrousers] = useState([]);

  useEffect(() => {
    const fetchTrousers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/trousers`);
        setTrousers(response.data);
      } catch (e) {
        console.log("Error in fetching trousers:", e);
      }
    };
    fetchTrousers();
  }, []);

  const handleAddToCart = (trouser) => {
    if (addToCart) {
      toast.success(`${trouser.name} has been added to the cart`);
      addToCart(trouser, category);
    } else {
      toast.error("Failed to add to cart. Please try again.");
    }
  };

  if (!trousers.length) {
    return (
      <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        No trousers available
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        Trousers Collection
      </Typography>
      <Grid container spacing={2}>
        {trousers.map((trouser, index) => (
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
                image={require(`./assets/${trouser.imageUrl}`)}
                alt={trouser.name}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    {trouser.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {trouser.description}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    ${trouser.price}
                  </Typography>
                </div>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(trouser)} sx={{ mt: 2 }}>
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

export default Trousers;
