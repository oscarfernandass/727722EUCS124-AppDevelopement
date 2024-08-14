import React, { useState, useRef } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Box, Typography, CssBaseline, AppBar, Toolbar, IconButton, Divider, TextField, Modal } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import '@fontsource/open-sans';
import Shirts from './Shirts';
import Pant from './Pant';
import Tshirt from './Tshirt';
import Trousers from './Trousers';
import Suite from './Suite';
import { useNavigate } from 'react-router-dom';

// Main container for the Buy page
const MainContainer = styled('div')({
    display: 'flex',
    height: '100vh',
    backgroundColor: '#F7F7F7',
});

// Styled AppBar for the page header
const StyledAppBar = styled(AppBar)({
    backgroundColor: '#000',
    color: '#FFF',
    fontFamily: "'Open Sans', sans-serif",
});

// Container for the content on the page
const ContentContainer = styled(Box)({
    flexGrow: 1,
    padding: '20px',
    fontFamily: "'Open Sans', sans-serif",
});

// Drawer content
const drawerWidth = 240;

// Drawer component
const DrawerContainer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

const Adminbuy = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // Add state for login status
    const [shirts, setShirts] = useState([
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
    ]); // State for shirts
    const [openModal, setOpenModal] = useState(false);
    const [newShirt, setNewShirt] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newPant, setNewPant] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newTrouser, setNewTrouser] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newTshirt, setNewTshirt] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newSuite, setNewSuite] = useState({ imageUrl: '', name: '', description: '', price: '' });

    const [pants, setPants] = useState([{
        imageUrl: 'https://example.com/pant1.jpg',
        name: 'Slim Fit Jeans',
        description: 'Modern slim fit jeans for everyday wear.',
        price: '$39.99'
    },
    {
        imageUrl: 'https://example.com/pant2.jpg',
        name: 'Chinos',
        description: 'Comfortable chinos for a smart-casual look.',
        price: '$29.99'
    },]); // State for pants
    const [tshirts, setTshirts] = useState([{
        imageUrl: 'https://example.com/tshirt1.jpg',
        name: 'Graphic T-Shirt',
        description: 'Stylish graphic t-shirt for a casual look.',
        price: '$19.99'
    },
    {
        imageUrl: 'https://example.com/tshirt2.jpg',
        name: 'Plain T-Shirt',
        description: 'Simple plain t-shirt for everyday wear.',
        price: '$14.99'
    },]); // State for t-shirts
    const [trousers, setTrousers] = useState([{
        imageUrl: 'https://example.com/trouser1.jpg',
        name: 'Formal Trousers',
        description: 'Elegant formal trousers for office wear.',
        price: '$49.99'
    },
    {
        imageUrl: 'https://example.com/trouser2.jpg',
        name: 'Casual Trousers',
        description: 'Comfortable casual trousers for everyday use.',
        price: '$34.99'
    },]); // State for trousers
    const [suites, setSuites] = useState([{
        imageUrl: 'https://example.com/suite1.jpg',
        name: 'Classic Black Suit',
        description: 'Elegant black suit for formal events.',
        price: '$199.99'
    },
    {
        imageUrl: 'https://example.com/suite2.jpg',
        name: 'Blue Business Suit',
        description: 'Professional blue suit for business meetings.',
        price: '$179.99'
    },]); // State for suits

    // Refs for each section
    const shirtRef = useRef(null);
    const pantRef = useRef(null);
    const tshirtRef = useRef(null);
    const trousersRef = useRef(null);
    const suiteRef = useRef(null);

    // Toggle the drawer's open/close state
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Handle click events for clothing type buttons
    const handleButtonClick = (clothingType) => {
        console.log(`Selected clothing type: ${clothingType}`);
        let ref = null;
        switch (clothingType) {
            case 'Shirt':
                ref = shirtRef;
                break;
            case 'Pant':
                ref = pantRef;
                break;
            case 'T-Shirt':
                ref = tshirtRef;
                break;
            case 'Trousers':
                ref = trousersRef;
                break;
            case 'Suits':
                ref = suiteRef;
                break;
            default:
                break;
        }
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setDrawerOpen(false); // Close the drawer after selecting an item
    };
    const handleAddNewShirt = () => {
        setShirts([...shirts, newShirt]);
        setOpenModal(false);
        setNewShirt({ imageUrl: '', name: '', description: '', price: '' });
    };
    const handleAddNewPant = () => {
        setPants([...pants, newPant]);
        setOpenModal(false);
        setNewPant({ imageUrl: '', name: '', description: '', price: '' });
    };
    const handleAddNewTrouser = () => {
        setTrousers([...trousers, newTrouser]);
        setOpenModal(false);
        setNewTrouser({ imageUrl: '', name: '', description: '', price: '' });
    };
    const handleAddNewSuite = () => {
        setSuites([...suites, newSuite]);
        setOpenModal(false);
        setNewSuite({ imageUrl: '', name: '', description: '', price: '' });
    };
    const handleAddNewTshirt = () => {
        setTshirts([...tshirts, newTshirt]);
        setOpenModal(false);
        setNewTshirt({ imageUrl: '', name: '', description: '', price: '' });
    };

    const navigate = useNavigate();

    // Handle login button click
    const handleLogin = () => {
        if (loggedIn) {
            setLoggedIn(false); // If logged in, log out on click
        } else {
            navigate('/login'); // If not logged in, navigate to login page
        }
    };

    // Function to add a new dress to a specific section


    return (
        <MainContainer>
            <CssBaseline />
            <StyledAppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{ marginRight: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap>
                        FashionForward
                    </Typography>
                    <Typography variant="h4" noWrap style={{ marginLeft: '300px' }}>
                        Buy Section
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={handleLogin}
                        style={{ marginLeft: 'auto' }}
                    >
                        {loggedIn ? 'Profile' : 'Login'}
                    </Button>
                </Toolbar>
            </StyledAppBar>
            <DrawerContainer
                variant="temporary"
                open={drawerOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
            >
                <List>
                    {['Shirt', 'Pant', 'Trousers', 'T-Shirt', 'Suits'].map((text) => (
                        <ListItem button key={text} onClick={() => handleButtonClick(text)}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider variant="middle" />
                <ListItem button onClick={() => { navigate('/') }}>
                    <ListItemText primary="Home" />
                </ListItem>
            </DrawerContainer>
            <ContentContainer>
                <Toolbar />
                <Box ref={shirtRef}>
                    <Shirts shirts={shirts} />
                    <Button onClick={() => setOpenModal(true)}>Add New Shirt</Button>
                </Box>
                <Box ref={pantRef}>
                    <Pant pants={pants} />
                    <Button onClick={() => setOpenModal(true)}>Add New Pant</Button>
                </Box>
                <Box ref={tshirtRef}>
                    <Tshirt tshirts={tshirts} />
                    <Button onClick={() => setOpenModal(true)}>Add New T-Shirt</Button>
                </Box>
                <Box ref={trousersRef}>
                    <Trousers trousers={trousers} />
                    <Button onClick={() => setOpenModal(true)}>Add New Trousers</Button>
                </Box>
                <Box ref={suiteRef}>
                    <Suite suites={suites} />
                    <Button onClick={() => setOpenModal(true)}>Add New Suit</Button>
                </Box>
            </ContentContainer>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2">
                        Add New Shirt
                    </Typography>
                    <TextField
                        fullWidth
                        label="Image URL"
                        value={newShirt.imageUrl}
                        onChange={(e) => setNewShirt({ ...newShirt, imageUrl: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Name"
                        value={newShirt.name}
                        onChange={(e) => setNewShirt({ ...newShirt, name: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={newShirt.description}
                        onChange={(e) => setNewShirt({ ...newShirt, description: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Price"
                        value={newShirt.price}
                        onChange={(e) => setNewShirt({ ...newShirt, price: e.target.value })}
                        margin="normal"
                    />
                    <Button onClick={handleAddNewShirt} sx={{ mt: 2 }} variant="contained" color="primary">
                        Add
                    </Button>
                </Box>
            </Modal>
        </MainContainer>
    );
};

export default Adminbuy;
