import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Grid,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Button,
    Card,
    CardContent,
    CardMedia,
    Menu,
    MenuItem
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Import the MenuOutlined icon
import { styled } from '@mui/system';
import '@fontsource/open-sans';
import homeTile from './assets/home_tile.jpg'
import buyImage from './assets/buyImage.jpg';   // Example images for the services
import rentImage from './assets/rentImage.jpg';
import swapImage from './assets/swapImage.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Home.css';

// Styles for Background Container
const BackgroundContainer = styled('div')({
    position: 'relative',
    height: '544px', // Image height
    backgroundImage: `url(${homeTile})`,
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the image
    opacity: 0.5, // Image opacity

});

// Wrapper to properly position the AppBar
const AppBarWrapper = styled('div')({
    position: 'absolute',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '70%',
    zIndex: 2, // Ensure AppBar is above the background image
});

// Styled AppBar with padding and other styles
const StyledAppBar = styled(AppBar)({
    backgroundColor: '#000', // Black background
    color: '#FFF', // White text
    padding: '0 30px', // Padding as per your requirement
    borderRadius: '50px', // Rounded corners as per your requirement
});

// Typography Styles
const StyledTypography = styled(Typography)({
    fontFamily: "'Open Sans', sans-serif", // Open Sans font
    color: '#FFF', // White text
    marginRight: '20px', // Spacing between options
    fontWeight: 400, // Regular font weight
    fontSize: '16px', // Font size for options
    textDecoration: 'none', // Remove underline
});

// Styles for sections
const Section = styled('section')({
    padding: '50px',
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor: '#F7F7F7', // Light background for sections
    marginBottom: '20px',
    borderRadius: '8px',

});

// Drawer content styling
const DrawerContent = styled(Box)({
    width: 250,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
});

// Styles for the Profile and options section
const OptionsContainer = styled(Box)({
    marginTop: '20px',
    marginBottom: '20px',
});

// Style for SignIn button
const SignInButton = styled(Button)({
    marginTop: 'auto',
    backgroundColor: '#000',
    color: '#FFF',
    fontFamily: "'Open Sans', sans-serif",
    ':hover': {
        backgroundColor: '#333',
    },
});

// Styles for Service Cards
const ServiceCard = styled(Card)({
    maxWidth: 420, // Set card width to 420px
    margin: 'auto',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease', // Add transition for smooth scaling
    ":hover": {
        cursor: 'pointer',
        transform: 'scale(1.05)' // Scale the card slightly on hover
    }
});

const ServiceCardMedia = styled(CardMedia)({
    height: 315, // Set image height to 315px
    width: '100%', // Ensure image fills the width
});

// Smooth scroll behavior for anchor links
const scrollBehavior = {
    scrollBehavior: 'smooth',
};

const Adminhome = () => {
    // State to control the drawer open/close state
    useEffect(() => {
        document.title = "Fashion Forward";
    }, []);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [isProfileCardOpen, setIsProfileCardOpen] = useState(false)

    // Function to toggle the drawer
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setIsDrawerOpen(open);
    };
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleProfileClick = () => {
        setIsProfileCardOpen(true);
    };
    const handleProfileCardClose = () => {
        setIsProfileCardOpen(false);
    };

    const userData = {
        isAdmin: "",
        name: "",
        email: "",
        age: ""
    }

    return (
        <>
            {/* Apply scroll behavior globally */}
            <style>
                {`html { scroll-behavior: smooth; }`}
            </style>


            {/* Background Image Container */}
            <BackgroundContainer />

            {/* AppBar Wrapper for positioning */}
            <AppBarWrapper>
                <StyledAppBar position="static">
                    <Toolbar>
                        {/* Menu icon for the Drawer */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ marginRight: '20px' }}
                        >
                            <MenuOutlinedIcon /> {/* Use the MenuOutlined icon */}
                        </IconButton>

                        {/* Title with Open Sans font */}
                        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                            <Typography
                                color="inherit"
                                sx={{
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 26,
                                }}
                            >
                                FashionForward
                            </Typography>
                        </Box>

                        {/* Navigation Options */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <StyledTypography variant="h6" component="a" href="#services">
                                Services
                            </StyledTypography>
                            <StyledTypography variant="h6" component="a" href="#about-us">
                                About
                            </StyledTypography>
                            <StyledTypography variant="h6" component="a" href="#contact-us">
                                Contact Us
                            </StyledTypography>
                            {user ? (
                                <>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        aria-label="account"
                                        onClick={handleMenuOpen}
                                    >
                                        <AccountCircleIcon />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem>{user.email}</MenuItem>
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <SignInButton onClick={() => navigate('/login')}>
                                    Sign In
                                </SignInButton>
                            )}
                        </Box>
                    </Toolbar>
                </StyledAppBar>
            </AppBarWrapper>

            {/* Drawer for sidebar */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ zIndex: 3 }}
            >
                <DrawerContent>
                    {/* Profile option */}
                    <List>
                        <ListItem button>
                            <ListItemText primary="Profile" onClick={handleProfileClick} />
                        </ListItem>
                    </List>

                    {/* Divider */}
                    <Divider variant="middle" />

                    {/* Buy, Rent, Swap options */}
                    <OptionsContainer>
                        <List>
                            <ListItem button onClick={() => { navigate('/adminbuy') }}>
                                <ListItemText primary="Buy" />
                            </ListItem>
                            <ListItem button onClick={() => { navigate('/adminrent') }}>
                                <ListItemText primary="Rent" />
                            </ListItem>
                            <ListItem button onClick={() => { navigate('/adminswap') }}>
                                <ListItemText primary="Swap" />
                            </ListItem>
                        </List>
                        <Divider variant="middle" />

                    </OptionsContainer>

                    {/* Divider */}
                    <Divider variant="middle" />

                    {/* SignIn Button */}
                    {user ? (
                        <SignInButton variant="contained" fullWidth onClick={logout}>
                            Logout
                        </SignInButton>
                    ) : (
                        <SignInButton variant="contained" fullWidth onClick={() => { navigate('/login'); toggleDrawer(false); }}>
                            Sign In
                        </SignInButton>
                    )}
                </DrawerContent>
            </Drawer>
            {/* Profile Card */}
            {isProfileCardOpen && (
                <ProfileCard userData={userData} onClose={handleProfileCardClose} />
            )}

            {/* Services Section */}
            <Section id="services">
                <Container>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 600, // Increase the font weight
                            fontSize: '2.5rem', // Increase the font size
                            mb: 4,
                            textAlign: 'center', // Align text slightly to the left
                            marginLeft: '20px', // Add some left margin for slight left alignment
                        }}
                    >
                        Services
                    </Typography>
                    <div style={{ height: '30px' }}></div>
                    <Grid container spacing={4} justifyContent="center">
                        {/* Buy Service */}
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceCard onClick={() => navigate("/adminbuy")}>
                                <ServiceCardMedia
                                    image={buyImage}
                                    title="Buy"
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontWeight: 500,
                                            mb: 1,
                                        }}
                                    >
                                        Buy
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontSize: 14,
                                            color: '#555',
                                        }}
                                    >
                                        Discover the latest fashion trends and buy your favorite items with ease.
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>

                        {/* Rent Service */}
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceCard onClick={() => navigate("/adminrent")}>
                                <ServiceCardMedia
                                    image={rentImage}
                                    title="Rent"
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontWeight: 500,
                                            mb: 1,
                                        }}
                                    >
                                        Rent
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontSize: 14,
                                            color: '#555',
                                        }}
                                    >
                                        Rent high-quality fashion pieces for any occasion at affordable prices.
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>

                        {/* Swap Service */}
                        <Grid item xs={12} sm={6} md={4}>
                            <ServiceCard onClick={() => navigate("/adminswap")}>
                                <ServiceCardMedia
                                    image={swapImage}
                                    title="Swap"
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontWeight: 500,
                                            mb: 1,
                                        }}
                                    >
                                        Swap
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "'Open Sans', sans-serif",
                                            fontSize: 14,
                                            color: '#555',
                                        }}
                                    >
                                        Exchange your fashion items with others to refresh your wardrobe sustainably.
                                    </Typography>
                                </CardContent>
                            </ServiceCard>
                        </Grid>
                    </Grid>
                </Container>
            </Section>

            {/* Divider to separate sections */}
            <Divider sx={{ margin: '0 0' }} />

            {/* About Us and Contact Us Sections */}
            <Section className='he'>
                <Container>
                    <Grid container spacing={6} id="about-us">
                        {/* About Us Section */}
                        <Grid item xs={12} md={5}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontWeight: 400,
                                    mb: 2,
                                }}
                            >
                                About
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    width: 600,
                                }} // Smaller font size
                            >
                                FashionForward is a leading fashion rental service that provides
                                a wide range of stylish clothing and accessories for every
                                occasion. Our mission is to make high-quality fashion accessible
                                to everyone, offering the latest trends and timeless classics at
                                affordable prices. Whether you're preparing for a special event
                                or simply looking to refresh your wardrobe, FashionForward has
                                you covered.
                            </Typography>
                        </Grid>
                        <div style={{ width: '190px' }}></div>
                        {/* Divider between About Us and Contact Us */}
                        <Divider orientation="vertical" flexItem variant="middle" />

                        {/* Contact Us Section */}
                        <Grid item xs={12} md={5} id="contact-us">
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontWeight: 400,
                                    mb: 2,
                                }}
                            >
                                Contact Us
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                }} // Smaller font size
                            >
                                For any inquiries, please reach out to us at{' '}
                                <a href="mailto:contact@fashionforward.com">
                                    contact@fashionforward.com
                                </a>
                                . We would love to hear from you and assist you with any
                                questions or concerns you may have.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Section>
        </>
    );
};

export default Adminhome;