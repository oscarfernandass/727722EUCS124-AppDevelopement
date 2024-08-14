import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useCart } from './CartContext';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

const Pant = ({ category }) => {
  const { addToCart } = useCart();
  const [pants, setPants] = useState([]);

  useEffect(() => {
    const fetchPants = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pants`);
        setPants(response.data);
      } catch (e) {
        console.log("Error in fetching pants:", e);
      }
    };
    fetchPants();
  }, []);

  const handleAddToCart = (pant) => {
    if (addToCart) {
      toast.success(`${pant.name} has been added to the cart`);
      addToCart(pant, category);
    } else {
      toast.error("Failed to add to cart. Please try again.");
    }
  };

  if (!pants.length) {
    return (
      <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        No Pants available
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        Pants Collection
      </Typography>
      <Grid container spacing={2}>
        {pants.map((pant, index) => (
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
                image={require(`./assets/${pant.imageUrl}`)}
                alt={pant.name}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    {pant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pant.description}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    ${pant.price}
                  </Typography>
                </div>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(pant)} sx={{ mt: 2 }}>
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

export default Pant;
