import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useCart } from './CartContext';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

const Suite = ({ category }) => {
  const { addToCart } = useCart();
  const [suites, setSuites] = useState([]);

  useEffect(() => {
    const fetchSuites = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/suites`);
        setSuites(response.data);
      } catch (e) {
        console.log("Error in fetching suites:", e);
      }
    };
    fetchSuites();
  }, []);

  const handleAddToCart = (suite) => {
    if (addToCart) {
      toast.success(`${suite.name} has been added to the cart`);
      addToCart(suite, category);
    } else {
      toast.error("Failed to add to cart. Please try again.");
    }
  };

  if (!suites.length) {
    return (
      <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        No suits available
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
        Suits Collection
      </Typography>
      <Grid container spacing={2}>
        {suites.map((suite, index) => (
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
                image={require(`./assets/${suite.imageUrl}`)}
                alt={suite.name}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    {suite.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {suite.description}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    ${suite.price}
                  </Typography>
                </div>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(suite)} sx={{ mt: 2 }}>
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

export default Suite;
