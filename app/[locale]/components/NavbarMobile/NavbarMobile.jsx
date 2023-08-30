'use client'
import React, { useState } from 'react';
import { Toolbar, Typography, IconButton, Drawer, List, ListItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../Brand/Brand';
import Link from 'next/link';
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";

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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:'0.7em'}}>         
          <Brand/>
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }} onClick={toggleDrawer}>
          <ListItem button>
            <Link href={'/works'}>WORKS</Link>
          </ListItem>
          <ListItem button>
          <Link href={'/exhibitions'}>EXHIBITIONS</Link>
          </ListItem>
          <ListItem button>
          <Link href={'/text'}>PAPERS</Link>
          </ListItem>
{/*           <ListItem button>
          <Link href={'/bio'}>BIO</Link>
          </ListItem> */}
          <ListItem button>
          <Link href={'/contact'}>CONTACT</Link>
          </ListItem>
        </List>
        <DropdownNavbar style={{backgroundColor:'transparent',color:'black'}}></DropdownNavbar>
      </Drawer>
</>

  );
};

export default Navbar;
