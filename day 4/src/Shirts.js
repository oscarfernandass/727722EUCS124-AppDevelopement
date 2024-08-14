import React from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

function Shirts({ shirts }) {
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
