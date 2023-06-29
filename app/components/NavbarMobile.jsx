'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
<>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Brand/>
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }} onClick={toggleDrawer}>
          <ListItem button>
            <ListItemText primary="Opción 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Opción 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Opción 3" />
          </ListItem>
        </List>
      </Drawer>
</>

  );
};

export default Navbar;
