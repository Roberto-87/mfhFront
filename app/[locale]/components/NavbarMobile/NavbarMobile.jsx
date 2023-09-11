'use client'
import React, { useEffect, useState } from 'react';
import { Toolbar, Typography, IconButton, Drawer, List, ListItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../Brand/Brand';
import Link from 'next/link';
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";
import styles from './NavbarMobile.module.css'
import stylesIcon from '../CardContact/CardContact.module.css'
import {AiOutlineInstagram,AiOutlineMail,AiOutlineFacebook} from 'react-icons/ai'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.87)', 
        },
      },
    },
  },
})

const Navbar =() => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:'0.75em'}}>         
          <Brand/>
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} >
      <div style={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
          <CloseIcon onClick={toggleDrawer} style={{fontSize:'35px',fontWeight: 400,lineHeight:'22px',color: '#837c7c'}}/>
      </div>
  <List sx={{ width: '100vw', marginTop:'10%'}}  onClick={toggleDrawer}>
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.1s' }}>
      <Link className={styles.linkNavbarMobile}  href={'/works'}>WORKS</Link>
    </ListItem>
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.2s' }}>
      <Link className={styles.linkNavbarMobile}  href={'/exhibitions'}>EXHIBITIONS</Link>
    </ListItem>
    <ListItem  className={styles.animatedListItem} style={{ animationDelay: '0.3s' }}>
      <Link className={styles.linkNavbarMobile}  href={'/text'}>PAPERS</Link>
    </ListItem>
    <ListItem className={styles.animatedListItem} style={{ animationDelay: '0.4s' }}>
      <Link className={styles.linkNavbarMobile}  href={'/bio'}>BIO</Link>
    </ListItem>
    <ListItem className={styles.animatedListItem} style={{ animationDelay: '0.5s' }}>
      <Link  className={styles.linkNavbarMobile} href={'/contact'}>CONTACT</Link>
    </ListItem>
    <ListItem className={styles.animatedListItem} style={{ animationDelay: '0.5s' }}>
  <DropdownNavbar className={styles.animatedListItem}  style={{ backgroundColor: 'transparent', color: 'black' }}></DropdownNavbar>
    </ListItem>
  {/*  
    <ListItem className={styles.animatedListItem} style={{ animationDelay: '0.5s' }}>
   <div style={{display:'flex',justifyContent:'space-around',width:'75%', alignItems:'center', padding:'6%'}}>
   <AiOutlineFacebook style={{marginTop:'1.4px',fontSize:'1.15em'}} className={stylesIcon.iconsContact} />
   <AiOutlineInstagram style={{marginTop:'1.5px',fontSize:'1.18em',marginLeft:'1.5px'}} className={stylesIcon.iconsContact} />
   <AiOutlineMail style={{marginTop:'2px',fontSize:'1.1em'}} className={styles.iconsContact} /> 


   </div> 
    </ListItem>
    */}
  </List>
</Drawer>

</ThemeProvider>

  );
};

export default Navbar;
