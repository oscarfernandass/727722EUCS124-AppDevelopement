import React from 'react';
import { Grid, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

function Pant(pants) {


    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}>
                Pants Collection
            </Typography>
            <Grid container spacing={2}>
                {pants.map((pant, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={pant.imageUrl}
                                alt={pant.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {pant.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pant.description}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    {pant.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Pant;
