import React from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

function Shirts() {
    const shirts = [
        {
            imageUrl: 'https://example.com/shirt1.jpg',
            name: 'Classic White Shirt',
            description: 'A timeless white shirt perfect for any occasion.',
            price: '$29.99'
        },
        {
            imageUrl: 'https://example.com/shirt2.jpg',
            name: 'Blue Denim Shirt',
            description: 'Casual denim shirt for a laid-back look.',
            price: '$39.99'
        },
        {
            imageUrl: 'https://example.com/shirt3.jpg',
            name: 'Striped Casual Shirt',
            description: 'Comfortable striped shirt for everyday wear.',
            price: '$24.99'
        },
        {
            imageUrl: 'https://example.com/shirt4.jpg',
            name: 'Floral Print Shirt',
            description: 'Vibrant floral shirt to brighten up your wardrobe.',
            price: '$34.99'
        },
        {
            imageUrl: 'https://example.com/shirt5.jpg',
            name: 'Plaid Shirt',
            description: 'Classic plaid shirt for a rustic look.',
            price: '$32.99'
        },
        {
            imageUrl: 'https://example.com/shirt6.jpg',
            name: 'Linen Shirt',
            description: 'Lightweight linen shirt for summer days.',
            price: '$44.99'
        },
        {
            imageUrl: 'https://example.com/shirt7.jpg',
            name: 'Black Formal Shirt',
            description: 'Elegant black shirt for formal occasions.',
            price: '$49.99'
        },
        {
            imageUrl: 'https://example.com/shirt8.jpg',
            name: 'Graphic Tee',
            description: 'Stylish graphic tee for casual outings.',
            price: '$19.99'
        }
    ];

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                Shirts Collection
            </Typography>
            <Grid container spacing={2}>
                {shirts.map((shirt, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={shirt.imageUrl}
                                alt={shirt.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {shirt.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {shirt.description}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    {shirt.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Shirts;
