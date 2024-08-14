import React, { useState, useRef } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Box, Typography, CssBaseline, AppBar, Toolbar, IconButton, Divider } from '@mui/material';
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

const Buy = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

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
    const navigate = useNavigate();

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
                    <Shirts />
                </Box>
                <Box ref={pantRef}>
                    <Pant />
                </Box>
                <Box ref={tshirtRef}>
                    <Tshirt />
                </Box>
                <Box ref={trousersRef}>
                    <Trousers />
                </Box>
                <Box ref={suiteRef}>
                    <Suite />
                </Box>
            </ContentContainer>
        </MainContainer>
    );
};

export default Buy;
