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
import axios from 'axios';
import { useCart } from './CartContext'; // Import context

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

const Buy = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [openModal, setOpenModal] = useState(''); // Changed from false to empty string
    const [newShirt, setNewShirt] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newPant, setNewPant] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newTrouser, setNewTrouser] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newTshirt, setNewTshirt] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const [newSuite, setNewSuite] = useState({ imageUrl: '', name: '', description: '', price: '' });
    const { addToCart } = useCart();

    const navigate = useNavigate();

    const shirtRef = useRef(null);
    const pantRef = useRef(null);
    const tshirtRef = useRef(null);
    const trousersRef = useRef(null);
    const suiteRef = useRef(null);

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

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleOpenModal = (modalType) => {
        setOpenModal(modalType);
    };

    const handleCloseModal = () => {
        setOpenModal('');
    };

    const handleAddProduct = async (type) => {
        switch (type) {
            case 'shirt':
                await axios.post(`http://localhost:8080/shirts`, newShirt);
                setNewShirt({ imageUrl: '', name: '', description: '', price: '' });
                break;
            case 'pant':
                await axios.post(`http://localhost:8080/pants`, newPant);
                setNewPant({ imageUrl: '', name: '', description: '', price: '' });
                break;
            case 'trouser':
                await axios.post(`http://localhost:8080/trousers`, newTrouser);
                setNewTrouser({ imageUrl: '', name: '', description: '', price: '' });
                break;
            case 'tshirt':
                await axios.post(`http://localhost:8080/tshirt`, newTshirt);
                setNewTshirt({ imageUrl: '', name: '', description: '', price: '' });
                break;
            case 'suite':
                await axios.post(`http://localhost:8080/suites`, newShirt);
                setNewSuite({ imageUrl: '', name: '', description: '', price: '' });
                break;
            default:
                break;
        }
        handleCloseModal();
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <MainContainer>
            <CssBaseline />
            <StyledAppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "'Open Sans', sans-serif" }}>
                        Buy page
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/cart')}>
                        Go to Cart
                    </Button>
                </Toolbar>
            </StyledAppBar>
            <DrawerContainer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    <ListItem button onClick={() => handleButtonClick('Shirt')}>
                        <ListItemText primary="Shirts" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('Pant')}>
                        <ListItemText primary="Pants" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('T-Shirt')}>
                        <ListItemText primary="T-Shirts" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('Trousers')}>
                        <ListItemText primary="Trousers" />
                    </ListItem>
                    <ListItem button onClick={() => handleButtonClick('Suits')}>
                        <ListItemText primary="Suits" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => navigate("/")}>
                        <ListItemText primary="Home" />
                    </ListItem>

                </List>
                <Divider />
            </DrawerContainer>
            <ContentContainer>
                <Toolbar />
                <div ref={shirtRef}><Shirts category="buy" /></div>
                <div ref={pantRef}><Pant category="buy" /></div>
                <div ref={tshirtRef}><Tshirt category="buy" /></div>
                <div ref={trousersRef}><Trousers category="buy" /></div>
                <div ref={suiteRef}><Suite category="buy" /></div>
            </ContentContainer>
            <Modal open={openModal === 'shirt'} onClose={handleCloseModal}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        Add a new Shirt
                    </Typography>
                    <TextField
                        label="Image URL"
                        value={newShirt.imageUrl}
                        onChange={(e) => setNewShirt({ ...newShirt, imageUrl: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Name"
                        value={newShirt.name}
                        onChange={(e) => setNewShirt({ ...newShirt, name: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Description"
                        value={newShirt.description}
                        onChange={(e) => setNewShirt({ ...newShirt, description: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Price"
                        value={newShirt.price}
                        onChange={(e) => setNewShirt({ ...newShirt, price: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button onClick={() => handleAddProduct('shirt')} variant="contained" color="primary">
                        Add Shirt
                    </Button>
                </Box>
            </Modal>
            <Modal open={openModal === 'pant'} onClose={handleCloseModal}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        Add a new Pant
                    </Typography>
                    <TextField
                        label="Image URL"
                        value={newPant.imageUrl}
                        onChange={(e) => setNewPant({ ...newPant, imageUrl: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Name"
                        value={newPant.name}
                        onChange={(e) => setNewPant({ ...newPant, name: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Description"
                        value={newPant.description}
                        onChange={(e) => setNewPant({ ...newPant, description: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Price"
                        value={newPant.price}
                        onChange={(e) => setNewPant({ ...newPant, price: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button onClick={() => handleAddProduct('pant')} variant="contained" color="primary">
                        Add Pant
                    </Button>
                </Box>
            </Modal>
            <Modal open={openModal === 'trouser'} onClose={handleCloseModal}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        Add a new Trouser
                    </Typography>
                    <TextField
                        label="Image URL"
                        value={newTrouser.imageUrl}
                        onChange={(e) => setNewTrouser({ ...newTrouser, imageUrl: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Name"
                        value={newTrouser.name}
                        onChange={(e) => setNewTrouser({ ...newTrouser, name: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Description"
                        value={newTrouser.description}
                        onChange={(e) => setNewTrouser({ ...newTrouser, description: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Price"
                        value={newTrouser.price}
                        onChange={(e) => setNewTrouser({ ...newTrouser, price: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button onClick={() => handleAddProduct('trouser')} variant="contained" color="primary">
                        Add Trouser
                    </Button>
                </Box>
            </Modal>
            <Modal open={openModal === 'tshirt'} onClose={handleCloseModal}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        Add a new T-Shirt
                    </Typography>
                    <TextField
                        label="Image URL"
                        value={newTshirt.imageUrl}
                        onChange={(e) => setNewTshirt({ ...newTshirt, imageUrl: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Name"
                        value={newTshirt.name}
                        onChange={(e) => setNewTshirt({ ...newTshirt, name: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Description"
                        value={newTshirt.description}
                        onChange={(e) => setNewTshirt({ ...newTshirt, description: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Price"
                        value={newTshirt.price}
                        onChange={(e) => setNewTshirt({ ...newTshirt, price: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button onClick={() => handleAddProduct('tshirt')} variant="contained" color="primary">
                        Add T-Shirt
                    </Button>
                </Box>
            </Modal>
            <Modal open={openModal === 'suite'} onClose={handleCloseModal}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        Add a new Suite
                    </Typography>
                    <TextField
                        label="Image URL"
                        value={newSuite.imageUrl}
                        onChange={(e) => setNewSuite({ ...newSuite, imageUrl: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Name"
                        value={newSuite.name}
                        onChange={(e) => setNewSuite({ ...newSuite, name: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Description"
                        value={newSuite.description}
                        onChange={(e) => setNewSuite({ ...newSuite, description: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Price"
                        value={newSuite.price}
                        onChange={(e) => setNewSuite({ ...newSuite, price: e.target.value })}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button onClick={() => handleAddProduct('suite')} variant="contained" color="primary">
                        Add Suite
                    </Button>
                </Box>
            </Modal>
        </MainContainer >
    );
};

export default Buy;
