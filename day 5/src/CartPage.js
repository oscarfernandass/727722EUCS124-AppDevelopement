import React, { useState } from 'react';
import { useCart } from './CartContext';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Typography,
    Button,
    Grid,
    CssBaseline,
    Divider,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled('div')({
    display: 'flex',
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
});

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#000',
    color: '#FFF',
    fontFamily: "'Open Sans', sans-serif",
});

const ContentContainer = styled(Box)({
    flexGrow: 1,
    padding: '20px',
    fontFamily: "'Open Sans', sans-serif",
});

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

const CartPage = () => {
    const { cartItems } = useCart();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const parsePrice = (price) => {
        const cleanedPrice = price.toString().replace(/[^0-9.]/g, '');
        return parseFloat(cleanedPrice);
    };

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = parsePrice(item.price);
            return total + (isNaN(itemPrice) ? 0 : itemPrice * item.quantity);
        }, 0);
    };

    const renderItemsByCategory = (category) => {
        const filteredItems = cartItems.filter((item) => item.category === category);
        return filteredItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <CardMedia component="img" height="200" image={require(`./assets/${item.imageUrl}`)} alt={item.name} />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            ${isNaN(parsePrice(item.price)) ? '0.00' : parsePrice(item.price).toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Quantity: {item.quantity}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ));
    };

    return (
        <MainContainer>
            <CssBaseline />
            <StyledAppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "'Open Sans', sans-serif" }}>
                        Cart Page
                    </Typography>
                </Toolbar>
            </StyledAppBar>
            <DrawerContainer variant="temporary" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem button onClick={() => navigate('/buy')}>
                        <ListItemText primary="Buy Page" />
                    </ListItem>
                    <ListItem button onClick={() => navigate('/rent')}>
                        <ListItemText primary="Rent Page" />
                    </ListItem>
                    <ListItem button onClick={() => navigate('/swap')}>
                        <ListItemText primary="Swap Page" />
                    </ListItem>
                    <ListItem button onClick={() => navigate('/')}>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
                <Divider />
            </DrawerContainer>
            <ContentContainer>
                <Toolbar />
                <Typography variant="h4" gutterBottom>
                    Cart
                </Typography>
                {cartItems.length === 0 ? (
                    <Typography variant="body1">Your cart is empty</Typography>
                ) : (
                    <>
                        <Typography variant="h6" gutterBottom>
                            Buy
                        </Typography>
                        <Grid container spacing={2}>
                            {renderItemsByCategory('buy')}
                        </Grid>
                        <Divider sx={{ margin: '20px 0' }} />
                        <Typography variant="h6" gutterBottom>
                            Rent
                        </Typography>
                        <Grid container spacing={2}>
                            {renderItemsByCategory('rent')}
                        </Grid>
                        <Divider sx={{ margin: '20px 0' }} />
                        <Typography variant="h6" gutterBottom>
                            Swap
                        </Typography>
                        <Grid container spacing={2}>
                            {renderItemsByCategory('swap')}
                        </Grid>
                        <Divider sx={{ margin: '20px 0' }} />
                        <Typography variant="h6" gutterBottom>
                            Total Cost: ${calculateTotalCost().toFixed(2)}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => alert('Checkout')}>
                            Checkout
                        </Button>
                    </>
                )}
            </ContentContainer>
        </MainContainer>
    );
};

export default CartPage;
