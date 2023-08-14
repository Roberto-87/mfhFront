'use client'
import React, { useState } from 'react';
import { Toolbar, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../Brand/Brand';
import Link from 'next/link';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
< >
      <Toolbar >
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
            <Link href={'/works'}>Works</Link>
          </ListItem>
          <ListItem button>
          <Link href={'/exhibitions'}>Exhibitions</Link>
          </ListItem>
          <ListItem button>
          <Link href={'/text'}>Papers</Link>
          </ListItem>
          <ListItem button>
          <Link href={'/bio'}>Bio</Link>
          </ListItem>
          <ListItem button>
          <Link href={'/contact'}>Contact</Link>
          </ListItem>
        </List>
      </Drawer>
</>

  );
};

export default Navbar;
